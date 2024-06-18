const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    getFavoritesByUserIdController : async (userId, destinationId) => {
        return await prisma.favorites.create({
            data: {
                user_id: parseInt(userId),
                destination_id: parseInt(destinationId),
            },
        });
    },

    getFavoritesByUserIdController : async (userId) => {
        return await prisma.favorites.findMany({
            where: {
                user_id: parseInt(userId),
            },
            include: {
                destinations: true,
            },
        });
    }
}
