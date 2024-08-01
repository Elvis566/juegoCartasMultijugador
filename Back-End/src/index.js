import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { sequelize } from './DB/conexion.js'
import { PORT } from './config/config.js'; 
import { routerUser } from './router/UserRouter.js';
import { routerAvatar } from './router/AvatarRouter.js';

// import { UserModel } from './model/UserModel.js';

const app = express();
const port = PORT;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Routes
app.use('/user', routerUser);
app.use('/avatar', routerAvatar);


const conexion = async ()=>{
    try {
        await sequelize.authenticate();
        await sequelize.sync({force:false});
        console.log('Connection has beenestablishe successfully');
        app.listen(port, () =>{
            console.log('Server running');
        })
    } catch (error) {
        console.log(`Error ${error}`);
    }
}

conexion();

