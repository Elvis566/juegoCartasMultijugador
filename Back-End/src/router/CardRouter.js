import { Router } from "express";
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { saveCard, getCardPlay} from '../controller/CardController.js';

const router = Router();
const __dirname = path.resolve();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '/src/images/cards'))
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
  
const upload = multer({ storage: storage });

router.post('/save', upload.single('card'), saveCard);
router.get('/obtener', getCardPlay);

export const routerCard = router;