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