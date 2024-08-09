import { SugerenciaModel } from '../model/SugerenciaModel.js'
import { UserModel } from '../model/UserModel.js';

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

export const getSugerencias = async(req, res)=> {
   try {
    const sugerencias = await SugerenciaModel.findAll({
        include:{
            model: UserModel,
            as: 'enlace',
            attributes:['id', 'apodo', 'gmail', 'avartar_id']
        }
    })

    return res.status(200).json({sugerencias: sugerencias})
   } catch (error) {
    return res.status(500).json({message: error})
   }
}