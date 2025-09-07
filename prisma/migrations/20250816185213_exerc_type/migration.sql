/*
  Warnings:

  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `exercises` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."ExerciseType" AS ENUM ('CHEST', 'BACK', 'SHOULDERS', 'ARMS', 'LEGS', 'CORE');

-- AlterTable
ALTER TABLE "public"."exercises" DROP COLUMN "type",
ADD COLUMN     "type" "public"."ExerciseType" NOT NULL;

-- DropTable
DROP TABLE "public"."categories";
