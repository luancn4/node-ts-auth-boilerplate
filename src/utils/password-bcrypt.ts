import bcrypt from 'bcrypt';

const PEPPER = process.env.PEPPER || '';
const ROUNDS = 12;

export async function hashPassword(plain: string) {
  const salt = await bcrypt.genSalt(ROUNDS);

  return bcrypt.hash(plain + PEPPER, salt);
}

export async function verifyPassword(
  plain: string,
  passwordHash: string,
) {
  return bcrypt.compare(plain + PEPPER, passwordHash);
}
