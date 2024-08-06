import { FriendModel } from "../model/FriendModel.js";
import { UserModel } from "../model/UserModel.js";


export const saveFriend = async(req, res)=> {
    const {user_id, friend_id} = req.body;

    try {
        if(!user_id || !friend_id){
            return res.status(400).json({messge: "not input invalid"})
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

export const getFriends = async (req, res) => {
    const { userId } = req.params;

    try {
        const friends = await FriendModel.findAll({
            where: { user_id : userId },
            include: {
                model: UserModel,
                as: 'Friends',
                attributes: ['id', 'apodo', 'avatar']
            }
        });

        if (!friends.length) {
            return res.status(404).json({ message: 'No friends found for this user' });
        }

        const friendsData = friends.map(friend => ({
            id: friend.Friend.id,
            apodo: friend.Friend.apodo,
            avatar: friend.Friend.avatar
        }));

        res.status(200).json(friendsData);
    } catch (error) {
        console.error('Error fetching friends:', error);
        res.status(500).json({ message: 'Error fetching friends' });
    }
};