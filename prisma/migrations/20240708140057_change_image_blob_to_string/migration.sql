/*
  Warnings:

  - You are about to alter the column `image_blob` on the `destinations` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `destinations` MODIFY `image_blob` VARCHAR(191) NULL;
