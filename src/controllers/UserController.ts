import { userService } from '../services/UserService';
import { Request, Response, NextFunction } from 'express';

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await userService.getUsers();

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
