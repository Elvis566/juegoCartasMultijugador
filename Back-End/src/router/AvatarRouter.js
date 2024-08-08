import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import express from 'express';

import { saveAvatar, getAvatar, getAvatarAll } from '../controller/AvatarController.js';

const router = Router();
const __dirname = path.resolve();

// Verifica y crea el directorio `uploads` si no existe
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: path.join(uploadDir, 'images'),
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
  
const upload = multer({ storage: storage });

router.post('/create', upload.single('avatar'), saveAvatar);
router.get('/obtener/:id', getAvatar);
router.get('/obtenerAll', getAvatarAll);

// Servir imágenes estáticas
router.use('/images', express.static(path.join(uploadDir, 'images')));


export const routerAvatar = router;