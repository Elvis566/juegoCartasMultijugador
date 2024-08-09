import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import express from 'express';

import { saveAvatar, getAvatar, getAvatarAll } from '../controller/AvatarController.js';

const router = Router();
const __dirname = path.resolve();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '/src/images'))
  },
  filename: (req, file, cb) => {
    cb(null, `image_${Date.now()}-${file.originalname}`);
  },
});
  
const upload = multer({ storage: storage });

router.post('/create', upload.single('avatar'), saveAvatar);
router.get('/obtener/:id', getAvatar);
router.get('/obtenerAll', getAvatarAll);



export const routerAvatar = router;