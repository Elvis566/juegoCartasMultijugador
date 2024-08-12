import {PlayersModel } from '../model/PlayersModel..js'

export const create = async(req, res)=> {
   try {
    const {user_id, game_id } = req.body;
    const score = 0;

    if(!user_id || !game_id){
        res.status(401).json({message: 'Not input invalid'})
    }

    const player = await PlayersModel.create({
        score: score,
        user_id: user_id,
        game_id: game_id
    })

    res.status(200).json({player: player})
   } catch (error) {
    
   }
}

export const update = async(req, res)=> {
    try {
        const id = req.params.id;
        const {score} = req.body;
        const jugador = await PlayersModel.findByPk(id);

        if(!jugador){
            return res.status(401).json({message: 'Not found'});
        }

        jugador.set({
            score: score
        })

        jugador.save();

        return res.status(200).json({jugador:jugador})
        
    } catch (error) {
        return res.status(500).json({message: error})
    }
}