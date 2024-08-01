import { Router } from 'express';
import multer from 'multer';

import { saveAvatar, getAvatar, getAvatarAll } from '../controller/AvatarController.js';

const router = Router();

// Configurar multer para manejar la carga de archivos
const storage = multer.memoryStorage();
// const upload = multer(storage)
const upload = multer({ dest: '/upload' });

router.post('/create', upload.single('avatar'), saveAvatar);
router.get('/obtener/:id', getAvatar);
router.get('/obtenerAll', getAvatarAll);


export const routerAvatar = router;