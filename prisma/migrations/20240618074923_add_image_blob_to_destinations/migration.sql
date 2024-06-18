/*
  Warnings:

  - You are about to drop the column `image_url` on the `destinations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `destinations` DROP COLUMN `image_url`,
    ADD COLUMN `image_blob` LONGBLOB NULL;
