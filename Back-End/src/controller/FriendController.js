import { FriendModel } from "../model/FriendModel.js";

export const saveFriend = async(req, res)=> {
    const {user_id, friend_id} = req.body;

    try {
        if(!user_id || !friend_id){
            return res.status(400).json({messge: "not input invalid", avatar: req.file})
        }

        const friends = await FriendModel.create({
            user_id,
            friend_id
        })
        return res
        .status(201)
        .json({
            friends: friends, 
            message:"create succesfull",
            });
    } catch (error) {
        console.log(error);
    }
}