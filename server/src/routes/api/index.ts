import { Router } from 'express';
import { ticketRouter } from './ticket-routes.js';
import { userRouter } from './user-routes.js';
import { authenticateToken } from '../../middleware/auth.js';

const router = Router();

router.use('/tickets', ticketRouter);
router.use('/users', authenticateToken, userRouter);

export default router;
