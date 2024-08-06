import {createGame, finalyGame} from '../controller/GameController.js'

import { Router } from 'express'

const router = Router();

router.post('/create', createGame);
router.delete('/delete/:id', finalyGame);


export const routerGame = router;