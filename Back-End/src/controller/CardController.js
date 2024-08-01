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

export const getCardPlay = async(req, res)=>{
    try {
        const suerte = Math.floor(Math.random() * 52);

        const carta = await CardModel.findByPk(suerte)

        if(!carta){
            res.status(401).json({message: 'Not foud'});
        }

        res.status(200).json({'carta': carta})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

