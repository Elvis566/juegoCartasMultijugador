import {TypeGameModel} from '../model/TypeGameModel.js';

export const saveTypeGame = async(req, res) =>{
   try {

    const {type, descripcion} = req.body;

    if(!type || !descripcion){
        return res.status(401).json({message: 'Not input invalid'});

    }

    const gameT = await TypeGameModel.create({
        type: type,
        descripcion: descripcion
    })

    return res.status(200).json({gameT: gameT});

   } catch (error) {

    return res.status(500).json({message: error})

   }
    
}

export const getTypeGame = async(req, res)=> {
    try {
        
        const gameT = await TypeGameModel.findAll();
        if(!gameT){

            return res.status(401).json({message: 'Not found'})
        }

        return res.status(200).json({gameT: gameT})
    } catch (error) {

    return res.status(500).json({message: error})
        
    }
}