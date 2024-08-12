import { AvatarModel } from "../model/AvatarModel.js";
import { FriendModel } from "../model/FriendModel.js";
import { UserModel } from "../model/UserModel.js";
import { Sequelize } from "sequelize";
import { Op } from "sequelize";



export const saveFriend = async (req, res) => {
    const { user_id, friend_id } = req.body;

    try {
        if (!user_id || !friend_id) {
            return res.status(400).json({ message: "Datos de entrada inválidos" });
        }

        // Verificar si ya existe una relación de amistad entre los dos usuarios
        const existingFriendship = await FriendModel.findOne({
            where: {
                [Op.or]: [
                    { user_id: user_id, friend_id: friend_id },
                    { user_id: friend_id, friend_id: user_id }
                ]
            }
        });

        if (existingFriendship) {
            return res.status(409).json({ message: "La relación de amistad ya existe" });
        }

        // Crear la relación de amistad
        const friends = await FriendModel.create({
            user_id,
            friend_id
        });

        return res.status(201).json({
            friends: friends,
            message: "Amistad creada exitosamente",
        });
    } catch (error) {
        console.error("Error al crear la amistad:", error.message);
        return res.status(500).json({ message: "Error al crear la amistad", error: error.message });
    }
};


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

    // Bloque include común
    const includeUserFriends = {
        model: UserModel,
        as: 'userFriends',
        attributes: ['id', 'apodo', 'avatar_id'],
        include: {
            model: AvatarModel,
            as: 'enlaceA',
            attributes: ['url']
        }
    };

    const includeCreateFriends = {
        model: UserModel,
        as: 'createFriends',
        attributes: ['id', 'apodo', 'avatar_id'],
        include: {
            model: AvatarModel,
            as: 'enlaceA',
            attributes: ['url']
        }
    };

    try {
        const friends = await FriendModel.findAll({
            where: { 'user_id': id },
            include: includeUserFriends
        });

        const friend = await FriendModel.findAll({
            where: { 'friend_id': id },
            include: includeCreateFriends
        });

        // Mapear y combinar los resultados en una sola variable
        const dataFriends = [
            ...friends.map(friend => ({
                id: friend.userFriends.id,
                apodo: friend.userFriends.apodo,
                avatar: friend.userFriends.avatar_id,
                url: friend.userFriends.enlaceA.url
            })),
            ...friend.map(friend => ({
                id: friend.createFriends.id,
                apodo: friend.createFriends.apodo,
                avatar: friend.createFriends.avatar_id,
                url: friend.createFriends.enlaceA.url
            }))
        ];

        // Retornar el resultado combinado
        return res.status(200).json({ friendsData: dataFriends });

    } catch (error) {
        console.error('Error al obtener los amigos:', error.message);
        return res.status(500).json({ message: 'Error al obtener los amigos', error: error.message });
    }
};
