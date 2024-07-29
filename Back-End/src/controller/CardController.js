import { CardModel } from '../model/CardModel.js'

export const saveCard = async (req, res)=>{

    const { type_game_id} = req.body;
    const card = req.file;

    try {
        if(!card || !type_game_id ){
            return res.status(400).json({messge: "not input invalid"})
        }
       
        const pt = await CardModel.create({
            card,
            type_game_id
        })
        return res
        .status(201)
        .json({
            pt: pt, 
            message:"create succesfull",
            });
    } catch (error) {
        console.log(error);
    }

}