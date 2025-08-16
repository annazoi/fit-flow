/*
  Warnings:

  - You are about to drop the column `calories` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `exercise` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "calories",
DROP COLUMN "exercise";

-- CreateTable
CREATE TABLE "public"."exercises" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Chest" (
    "id" SERIAL NOT NULL,
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "Chest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Shoulders" (
    "id" SERIAL NOT NULL,
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "Shoulders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Back" (
    "id" SERIAL NOT NULL,
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "Back_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Legs" (
    "id" SERIAL NOT NULL,
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "Legs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Arms" (
    "id" SERIAL NOT NULL,
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "Arms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Core" (
    "id" SERIAL NOT NULL,
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "Core_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "users_uuid_idx" ON "public"."users"("uuid");

-- AddForeignKey
ALTER TABLE "public"."exercises" ADD CONSTRAINT "exercises_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Chest" ADD CONSTRAINT "Chest_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "public"."exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Shoulders" ADD CONSTRAINT "Shoulders_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "public"."exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Back" ADD CONSTRAINT "Back_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "public"."exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Legs" ADD CONSTRAINT "Legs_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "public"."exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Arms" ADD CONSTRAINT "Arms_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "public"."exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Core" ADD CONSTRAINT "Core_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "public"."exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
