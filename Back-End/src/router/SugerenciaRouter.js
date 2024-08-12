import {saveSugerencia, getSugerencias} from '../controller/SugerenciaController.js'
import { Router } from 'express';

const router = Router();

router.post('/create', saveSugerencia);
router.get('/obtenerAll', getSugerencias);

export const routerSugerencias = router;