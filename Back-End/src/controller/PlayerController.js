import {PlayersModel } from '../model/PlayersModel..js'

export const create = async(req, res)=> {
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

    res.status(200).js
}