import {savePenitencia, getPenitenciaPlay } from '../controller/PenitenciaController.js';
import { Router } from 'express';

const router = Router();

router.post('/create',savePenitencia );
router.get('/obtener/:card_id', getPenitenciaPlay);

export const routerPenitencia = router;