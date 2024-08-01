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
        const suerte = Math.floor(Math.random()*3);
        const {id_fk} = req.body
        const penitencia = await PenitenciaModel.Where('card_id', id_fk, '&&', 'id', suerte);
        if(penitencia){
            res.status(401).json({'penitencia': penitencia});
        }
        res.status(401).json({message: 'Not foud '})
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}