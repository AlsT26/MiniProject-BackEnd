/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - Made the column `thumbnail` on table `Event` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "slug" DROP DEFAULT,
ALTER COLUMN "thumbnail" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Event_title_key" ON "Event"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Event_slug_key" ON "Event"("slug");
