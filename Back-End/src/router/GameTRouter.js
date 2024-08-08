import {saveTypeGame, getTypeGame} from '../controller/TypeGameController.js';
import { Router } from 'express';

const router = Router();

router.post('/create', saveTypeGame);
router.get('/obtener', getTypeGame);

export const routerGameT = router