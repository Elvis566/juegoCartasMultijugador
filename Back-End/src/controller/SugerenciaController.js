import { SugerenciaModel } from '../model/SugerenciaModel.js'

export const saveSugerencia = async (req, res)=>{

    const {descripcion, user_id} = req.body;

    try {
        if(!descripcion || !user_id ){
            return res.status(400).json({messge: "not input invalid"})
        }
       
        const pt = await saveSugerencia.create({
            descripcion,
            user_id
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