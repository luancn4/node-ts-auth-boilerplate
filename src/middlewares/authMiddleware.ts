import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { jwtConfig } from '../config/jwt';
import { AppError } from '../utils/AppError';

export interface AuthRequest extends Request {
  user?: any; // this can be typed as global in a .d.ts file
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError(401, 'Token is missing');

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    req.user = decoded;

    return next();
  } catch (err) {
    throw new AppError(401, 'Invalid token');
  }
}
