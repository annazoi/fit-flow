/*
  Warnings:

  - You are about to drop the `Arms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Back` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Chest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Core` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Legs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shoulders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Arms" DROP CONSTRAINT "Arms_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Back" DROP CONSTRAINT "Back_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Chest" DROP CONSTRAINT "Chest_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Core" DROP CONSTRAINT "Core_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Legs" DROP CONSTRAINT "Legs_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Shoulders" DROP CONSTRAINT "Shoulders_exerciseId_fkey";

-- AlterTable
ALTER TABLE "public"."exercises" ADD COLUMN     "type" TEXT DEFAULT '';

-- DropTable
DROP TABLE "public"."Arms";

-- DropTable
DROP TABLE "public"."Back";

-- DropTable
DROP TABLE "public"."Chest";

-- DropTable
DROP TABLE "public"."Core";

-- DropTable
DROP TABLE "public"."Legs";

-- DropTable
DROP TABLE "public"."Shoulders";

-- CreateTable
CREATE TABLE "public"."categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);
