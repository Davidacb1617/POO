/*
  Warnings:

  - The primary key for the `BeanFlavor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `description` on the `BeanFlavor` table. All the data in the column will be lost.
  - You are about to drop the column `flavorName` on the `BeanFlavor` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `BeanFlavor` table. All the data in the column will be lost.
  - You are about to drop the column `ingredients` on the `BeanFlavor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[FlavorName]` on the table `BeanFlavor` will be added. If there are existing duplicate values, this will fail.
  - The required column `BeanId` was added to the `BeanFlavor` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `Description` to the `BeanFlavor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FlavorName` to the `BeanFlavor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Ingredients` to the `BeanFlavor` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "BeanFlavor_flavorName_key";

-- AlterTable
ALTER TABLE "BeanFlavor" DROP CONSTRAINT "BeanFlavor_pkey",
DROP COLUMN "description",
DROP COLUMN "flavorName",
DROP COLUMN "id",
DROP COLUMN "ingredients",
ADD COLUMN     "BeanId" TEXT NOT NULL,
ADD COLUMN     "Description" TEXT NOT NULL,
ADD COLUMN     "FlavorName" TEXT NOT NULL,
ADD COLUMN     "Ingredients" TEXT NOT NULL,
ADD CONSTRAINT "BeanFlavor_pkey" PRIMARY KEY ("BeanId");

-- CreateIndex
CREATE UNIQUE INDEX "BeanFlavor_FlavorName_key" ON "BeanFlavor"("FlavorName");
