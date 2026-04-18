import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.json({ message: "Tu będzie lista Muminków!" }));

export default router;