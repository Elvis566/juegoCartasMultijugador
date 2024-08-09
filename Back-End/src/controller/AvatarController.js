import { AvatarModel } from '../model/AvatarModel.js'


export const saveAvatar = async (req, res)=>{
    const name = req.body.name;
    const url = `http://localhost:3000/images/${req.file.filename}`
    try {
        if(!name){
            return res.status(400).json({messge: "not input invalid"})
        }
       
        const AVATAR = await AvatarModel.create({
            name: name,
            url: url
        })
        return res
        .status(201)
        .json({
            avat: AVATAR, 
            message:"create succesfull",
            });
    } catch (error) {
        console.log(error);
    }
}

export const getAvatarAll = async(req, res)=>{
    try {

        const avatarsAll = await AvatarModel.findAll()

        if(!avatarsAll){
            res.status(401).json({message: 'Not foud'});
        }

        res.status(200).json({'avatars': avatarsAll});

    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const getAvatar = async(req, res)=> {
    try {
        const id = req.params.id;

        const avatarU = await AvatarModel.findByPk(id)
        
        if(!avatarU){
            res.status(401).json({message: 'Not foud'});
        }

        res.status(200).json({'avatar': avatarU});
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

