import { Router } from 'express';
import { getUsers } from '../controllers/UserController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware, getUsers);
// router.put('/update/:id', updateUser);
// router.delete('/delete/:id', deleteUser);

export default router;
