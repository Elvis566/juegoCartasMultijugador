import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { sequelize } from './DB/conexion.js'
import { PORT } from './config/config.js'; 
import { routerUser } from './router/UserRouter.js';
import { routerAvatar } from './router/AvatarRouter.js';
import { routerPenitencia } from './router/PenitenciaRouter.js';
// import { routerCard } from './router/CardRouter.js';
import { routerGame } from './router/GameRouter.js';
import { routerGameT } from './router/GameTRouter.js';
import { routerFriends } from './router/FriendRouter.js';
import path from 'path';

const __dirname = path.resolve();


const app = express();
const port = PORT || 3000;

// Configura la carpeta /images como estática
app.use('/images', express.static(path.join(__dirname, 'src/images')));


// Configurar CORS para permitir solicitudes desde localhost:8100
app.use(cors({
    origin: 'http://localhost:8100',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Routes
app.use('/user', routerUser);
app.use('/avatar', routerAvatar);
app.use('/penitencia', routerPenitencia);
// app.use('/card', routerCard);
app.use('/game', routerGame);
app.use('/gameType', routerGameT);
app.use('/friends', routerFriends);

const conexion = async ()=>{
    try {
        await sequelize.authenticate();
        await sequelize.sync({force:false});
        console.log('Connection has beenestablishe successfully');
        app.listen(port, () =>{
            console.log(`Server running http://localhost:${port}`);
        })
    } catch (error) {                                                   
        console.log(`Error ${error}`);
    }
}

conexion();

