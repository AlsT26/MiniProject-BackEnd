import cron from "node-cron";
import prisma from "../prisma";

async function updateEventStatus() {
  try {
    const currentDate = new Date();
    await prisma.event.updateMany({
      where: {
        date: { lt: currentDate },
        isActive: true,
      },
      data: {
        isActive: false,
      },
    });

    console.log("Event statuss updated successfully");
  } catch (error) {
    console.log("Error updating event statuses:", error);
  } finally {
    await prisma.$disconnect();
  }
}
cron.schedule("0 * * * *", async () => {
  console.log("Running event status update task...");
  await updateEventStatus();
});
