import { create, update} from '../controller/PlayerController.js';
import { Router } from 'express';

const router = Router();

router.post('/create', create);
router.put('/update', update);

export const routerPlayer = router;
