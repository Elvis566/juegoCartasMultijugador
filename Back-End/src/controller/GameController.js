import { measureMemory } from 'vm';
import {GameModel} from '../model/GameModel.js';
import crypto from 'crypto';
export const createGame = async(req, res)=>{
   try {
    const {user_id, game_id } = req.body;

    if(!user_id || !game_id){
        return res.status(401).json({message: 'input no invalid' })
    }

    const codigo = codigoShare();

    const partida = await GameModel.create({
        invite_code: codigo,
        user_create_id: user_id,
        type_game_id:game_id
    })

    return res.status(200).json({partida: partida})
   } catch (error) {
    return res.status(500).json({message: error})
   }
}

export const finalyGame = async(req, res)=> {
    try {
        const id = req.params.id;

    const fGame = await GameModel.findByPk(id)

    if(!fGame){
        return res.status(401).json({message: 'Not found'});
    }else{
        fGame.set({status: false});
        fGame.save();
        return res.status(200).json({message:'Finaly game'})
    }
    } catch (error) {
        return res.status(500).json({message: error})
    }


}


function codigoShare(){
    return crypto.randomBytes(4).toString('hex');
}