const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    createDestination: async (data, callBack) => {
        try {
            const result = await prisma.destinations.create({
                data: {
                    user_id: data.user_id,
                    name: data.name,
                    description: data.description,
                    location: data.location,
                    image_blob: data.image_blob // Simpan path file sebagai string
                }
            });
            callBack(null, result);
        } catch (error) {
            callBack(error);
        }
    },

    getDestinationById: async (id, callBack) => {
        try {
            const result = await prisma.destinations.findUnique({
                where: {
                    destination_id: parseInt(id)
                }
            });
            callBack(null, result);
        } catch (error) {
            callBack(error);
        }
    },

    getDestinations: async (callBack) => {
        try {
            const results = await prisma.destinations.findMany();
            callBack(null, results);
        } catch (error) {
            callBack(error);
        }
    },

    updateDestination: async (id, data, callBack) => {
        try {
            const result = await prisma.destinations.update({
                where: {
                    destination_id: parseInt(id)
                },
                data: {
                    user_id: data.user_id,
                    name: data.name,
                    description: data.description,
                    location: data.location,
                    image_blob: data.image_blob // Simpan path file sebagai string
                }
            });
            callBack(null, result);
        } catch (error) {
            callBack(error);
        }
    },

    deleteDestination: async (id, callBack) => {
        try {
            const result = await prisma.destinations.delete({
                where: {
                    destination_id: parseInt(id)
                }
            });
            callBack(null, result);
        } catch (error) {
            callBack(error);
        }
    }
};
