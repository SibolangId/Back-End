const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const axios = require('axios');
const { Buffer } = require('buffer');

// Fungsi untuk mengonversi URL gambar menjadi string base64
async function convertImageToBase64(imageUrl) {
    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        return Buffer.from(response.data, 'binary').toString('base64');
    } catch (error) {
        throw new Error('Error converting image to base64');
    }
}

module.exports = {
    createDestination: async (data, callBack) => {
        try {
            const base64Image = await convertImageToBase64(data.image_blob);
            data.image_blob = base64Image;
            const result = await prisma.destinations.create({
                data: {
                    user_id: data.user_id,
                    name: data.name,
                    description: data.description,
                    location: data.location,
                    image_blob: data.image_blob
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
                    destination_id: id
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

    updateDestination: async (data, callBack) => {
        try {
            const base64Image = await convertImageToBase64(data.image_blob);
            data.image_blob = base64Image;
            const result = await prisma.destinations.update({
                where: {
                    destination_id: data.destination_id
                },
                data: {
                    user_id: data.user_id,
                    name: data.name,
                    description: data.description,
                    location: data.location,
                    image_blob: data.image_blob
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
                    destination_id: data.destination_id
                }
            });
            callBack(null, result);
        } catch (error) {
            callBack(error);
        }
    }
};
