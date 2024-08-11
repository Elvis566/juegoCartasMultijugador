import { UserModel } from "../model/UserModel.js";
import bcrypt from "bcrypt";
import fs from 'node:fs'
import { Op } from "sequelize";

export const saveUser = async (req, res)=>{

    const typeusers_id =1;
    const {apodo, email, password, avatar_id} = req.body;

    try {
        if(!apodo || !email || !password || !avatar_id ){
            return res.status(400).json({messge: "not input invalid"})
        }
        const verfiEmail = await UserModel.findOne({ where :{email:email }});
        if(verfiEmail) {
            return res.status(401).json({message:" email is already exist"})
        }
        const encryptedPassword = await bcrypt.hash(password.toString(),10);
        const user =await UserModel.create({
            apodo,
            email,
            password : encryptedPassword ,
            typeusers_id,
            avatar_id
        })
        return res
        .status(201)
        .json({
            user:user, 
            message:"create succesfull",
            });
    } catch (error) {
        console.log(error);
    }

}

export const updateUser = async (req, res)=>{

    try {

        const id =req.params.id;
        const {apodo, avatar} = req.body;

        if(!apodo || !avatar){
            return res.status(400).json({message:'invalid data'})
        }
        const userFinded = await UserModel.findByPk(id);
        if(userFinded){
            userFinded.set({apodo: apodo, avatar: avatar});
            userFinded.save();
            return res.status(200).json({message:'Update box'})
        }else{
            return res.status(400).json({message: 'nos user found'})
        }


    } catch (error) {
        console.log("Error al iniciar sesion");
    }
}

export const login = async (req,res)=> {
    const {email, password}= req.body;
    try {
        if(!email || !password){
            return res.status(400).json({message:'invalid data'})
        }
        // verificamos si el emial  existe en la base de datos
        const verfiEmail = await UserModel.findOne({where:{email:email}});
        if (!verfiEmail) {
            return res.status(404).json({message:"the email does not exist"});
        }
    
        const isPassworValid = await bcrypt.compare(password, verfiEmail.password);
        
        if (!isPassworValid) {
            return res.status(401).json({message:"Invalid Password"}); 
        }

        return res
        .status(201)
        .json({
            user:verfiEmail, 
            message:"Logeado  correctamente"
            });
    } catch (error) {
        console.log("Error al iniciar sesion");
    }

} 

export const getUsers = async(req, res)=> {
    try {
        const id= req.params.id;

    const users = await UserModel.findAll({
        where: {
            id :{
                [Op.not]:id
            }
        }
    });

    if(!users){
        return res.status(401).json({message: 'Not found users'})
    }

    return res.status(200).json({users: users})
    } catch (error) {
        return res.status(500).json({message: error})
    }
}


// function saveImage(file){
//     const newPath = `./upload/${file.originalname}`;
//     fs.renameSync(file.path, newPath);
//     return newPath

// }