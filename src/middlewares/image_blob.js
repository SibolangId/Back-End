const sharp = require("sharp");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const saveImageBlob = async (imageBuffer) => {
    const optimizedImageBuffer = await sharp(imageBuffer)
        .resize(800, 600)
        .jpeg({ quality: 80 })
        .toBuffer();

    const result = await prisma.imageBlobs.create({
        data: {
            image_data: optimizedImageBuffer,
        }
    });

    return result;
};

module.exports = { saveImageBlob };
