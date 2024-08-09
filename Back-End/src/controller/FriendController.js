import { FriendModel } from "../model/FriendModel.js";
import { UserModel } from "../model/UserModel.js";
import { Sequelize } from "sequelize";


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

// export const getFriends = async (req, res) => {
//     const id = req.params.id;

//     try {
//         let friends = await FriendModel.findAll({
//             where: {
//                 [Sequelize.Op.or]: [
//                     { user_id: id },
//                     { friend_id: id }
//                 ]
//             },
//             include: {
//                     model: UserModel,
//                     as: 'userFriends',
//                     attributes: ['id', 'apodo', 'avatar_id']
//                 }
               
//         });

//         if (!friends.length) {
//             return res.status(404).json({ message: 'No friends found for this user' });
//         }

//         const friendsData = friends.map(friend => {
           
//                 return {
//                     id: friend.userFriends.id,
//                     apodo: friend.userFriends.apodo,
//                     avatar: friend.userFriends.avatar_id
//                 };
//             }
//         );

//         res.status(200).json({ friendsData: friendsData });
//     } catch (error) {
//         console.error('Error fetching friends:', error);
//         res.status(500).json({ message: 'Error fetching friends' });
//     }
// };
export const getFriends = async (req, res) => {
    const id = req.params.id;

    try {
        const friends = await FriendModel.findAll({
            where: { 'user_id': id},
            include: 
                {
                    model: UserModel,
                    as: 'userFriends',
                    attributes: ['id', 'apodo', 'avatar_id']
                }
        });

        const friend = await FriendModel.findAll({
            where: { 'friend_id' : id},
            include: 
                {
                        model: UserModel,
                        as: 'createFriends',
                        attributes: ['id', 'apodo', 'avatar_id']
                }
        });

        // Mapear y combinar los resultados en una sola variable
        const dataFriends = [
            ...friends.map(friend => ({
                id: friend.userFriends.id,
                apodo: friend.userFriends.apodo,
                avatar: friend.userFriends.avatar_id
            })),
            ...friend.map(friend => ({
                id: friend.createFriends.id,
                apodo: friend.createFriends.apodo,
                avatar: friend.createFriends.avatar_id
            }))
        ];

        // Retornar el resultado combinado
        res.status(200).json({ friendsData: dataFriends });

    } catch (error) {
        console.error('Error fetching friends:', error);
        res.status(500).json({ message: 'Error fetching friends' });
    }
};