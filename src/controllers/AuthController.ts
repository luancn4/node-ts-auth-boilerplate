import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/AuthService';
import { AppError } from '../utils/AppError';
import { User } from '../models/User';

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new AppError(400, 'Missing required fields');
    }

    const user = await authService.signup(req.body);

    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body as Partial<User>;

    if (!email || !password) {
      throw new AppError(400, 'Missing required fields');
    }

    const user = await authService.signin(req.body);

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
