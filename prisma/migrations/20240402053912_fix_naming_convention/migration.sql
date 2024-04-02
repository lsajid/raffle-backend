/*
  Warnings:

  - You are about to drop the column `raffleId` on the `Participant` table. All the data in the column will be lost.
  - Added the required column `raffle_id` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_raffleId_fkey";

-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "raffleId",
ADD COLUMN     "is_winner" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "raffle_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Raffle" ALTER COLUMN "is_active" SET DEFAULT true;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_raffle_id_fkey" FOREIGN KEY ("raffle_id") REFERENCES "Raffle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
