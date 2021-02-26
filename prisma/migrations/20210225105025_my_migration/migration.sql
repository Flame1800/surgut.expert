/*
  Warnings:

  - You are about to drop the `_categorytoplace` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_placetotag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_categorytoplace` DROP FOREIGN KEY `_categorytoplace_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_categorytoplace` DROP FOREIGN KEY `_categorytoplace_ibfk_2`;

-- DropForeignKey
ALTER TABLE `_placetotag` DROP FOREIGN KEY `_placetotag_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_placetotag` DROP FOREIGN KEY `_placetotag_ibfk_2`;

-- CreateTable
CREATE TABLE `_CategoryToPlace` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,
UNIQUE INDEX `_CategoryToPlace_AB_unique`(`A`, `B`),
INDEX `_CategoryToPlace_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PlaceToTag` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,
UNIQUE INDEX `_PlaceToTag_AB_unique`(`A`, `B`),
INDEX `_PlaceToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- DropTable
DROP TABLE `_categorytoplace`;

-- DropTable
DROP TABLE `_placetotag`;

-- AddForeignKey
ALTER TABLE `_CategoryToPlace` ADD FOREIGN KEY (`A`) REFERENCES `categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToPlace` ADD FOREIGN KEY (`B`) REFERENCES `places`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlaceToTag` ADD FOREIGN KEY (`A`) REFERENCES `places`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlaceToTag` ADD FOREIGN KEY (`B`) REFERENCES `tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
