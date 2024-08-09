import {saveFriend, getFriends} from '../controller/FriendController.js'
import { Router } from 'express'

const router = Router();

router.post('/create', saveFriend);
router.get('/obtener/:id', getFriends);

export const routerFriends = router;