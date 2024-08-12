import { Router } from 'express';
const router = Router();

import apiRoutes from './api/index.js';
import htmlRoutes from './htmlRoutes.js';

// the apiroutes is telling me anything with an /api is going to touch it. This index ts in the rout foldere is creating the route 
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

export default router;
