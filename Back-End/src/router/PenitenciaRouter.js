import {savePenitencia, getPenitenciaPlay } from '../controller/PenitenciaController.js';
import { Router } from 'express';

const router = Router();

router.post('/create',savePenitencia );
router.get('/obtener', getPenitenciaPlay);

export const routerPenitencia = router;