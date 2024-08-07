import { Router } from "express";
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { saveCard, getCardPlay} from '../controller/CardController.js';

const router = Router();
const __dirname = path.resolve();

// Verifica y crea el directorio `uploads` si no existe
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: path.join(__dirname, '/images'),
  filename: (req, file, cb)=> {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
  
const upload = multer({ storage: storage });

router.post('/save', upload.single('card'), saveCard);
router.get('/obtener', getCardPlay);

export const routerCard = router;