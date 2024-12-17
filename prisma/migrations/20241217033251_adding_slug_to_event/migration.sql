-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "slug" TEXT NOT NULL DEFAULT ' ';

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "status" SET DEFAULT 'Pending';
