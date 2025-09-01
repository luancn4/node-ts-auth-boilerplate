import jwt from 'jsonwebtoken';
import { jwtConfig } from '../config/jwt';
import { User } from '../models/User';
import { AppError } from '../utils/AppError';
import { hashPassword, verifyPassword } from '../utils/password-bcrypt';

export const authService = {
  async signup({ name, email, password }: User) {
    const exists = await User.findOne({ where: { email } });

    if (exists) throw new AppError(409, 'User already exists');

    const passwordHash = await hashPassword(password);

    const { id, createdAt } = await User.create({
      name,
      email,
      password: passwordHash,
    });

    const token = jwt.sign({ id, name, email }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn as any,
    });

    return { id, name, email, createdAt, token };
  },

  async signin({ email, password }: User) {
    const user = await User.scope('withPassword').findOne({ where: { email } });

    if (!user) throw new AppError(401, 'Invalid credentials');

    const ok = await verifyPassword(password, user.password);

    if (!ok) throw new AppError(401, 'Invalid credentials');

    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      jwtConfig.secret,
      {
        expiresIn: jwtConfig.expiresIn as any,
      },
    );

    return { id: user.id, name: user.name, email: user.email, token };
  },
};
