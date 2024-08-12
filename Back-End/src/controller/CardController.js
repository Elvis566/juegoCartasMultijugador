import { CardModel } from '../model/CardModel.js'


export const saveCard = async (req, res)=>{

    const { name, type_game_id} = req.body;
    const url = `http://localhost:3000/images/cards${req.file.filename}`

    try {
        if(!name || !type_game_id ){
            return res.status(400).json({messge: "not input invalid"})
        }
       
        const pt = await CardModel.create({
            name: name,
            url: url,
            type_game_id: type_game_id
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
        // const suerte = Math.floor(Math.random() * 52);

        const carta = await CardModel.findAll()

        if(!carta){
           return res.status(401).json({message: 'Not foud'});
        }

        return res.status(200).json({'carta': carta});
        
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}

