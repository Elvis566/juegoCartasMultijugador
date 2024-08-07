import { Router } from 'express';
import multer from 'multer';

import { saveUser, updateUser, login, getUsers } from '../controller/UserController.js';

const router = Router();

// Configurar multer para manejar la carga de archivos
// const storage = multer.memoryStorage();
const upload = multer({ dest: '/upload' });

router.post('/create', upload.single('avatar'), saveUser);
router.put('/update/:id', upload.single('avatar'), updateUser);
router.post('/login', login);
router.get('/obtener/:id', getUsers)

export const routerUser = router;