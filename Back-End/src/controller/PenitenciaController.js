import { PenitenciaModel } from '../model/PenitenciaModel.js'

export const savePenitencia = async (req, res)=>{

    const {penitencia, card_id} = req.body;

    try {
        if(!penitencia || !card_id ){
            return res.status(400).json({messge: "not input invalid"})
        }
       
        const pt = await PenitenciaModel.create({
            penitencia,
            card_id
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

export const getPenitenciaPlay = async(req, res)=>{
    try {
    
        const card_id = req.params.card_id;
        const penitencia = await PenitenciaModel.findAll({
            where: {card_id:card_id}
        })
        if(penitencia){
           return res.status(401).json({penitencia: penitencia});
        }
        return res.status(401).json({message: 'Not foud '})
        
    } catch (error) {
       return res.status(500).json({message : error.message})
    }
}