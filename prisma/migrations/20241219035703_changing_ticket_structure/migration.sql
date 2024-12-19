/*
  Warnings:

  - Added the required column `available` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalSeats` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "available" INTEGER NOT NULL,
ADD COLUMN     "totalSeats" INTEGER NOT NULL;
