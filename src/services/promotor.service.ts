import prisma from "../prisma";

export const findPromotor = async (name: string, email: string) => {
  const user = await prisma.promotor.findFirst({
    where: { OR: [{ name: name }, { email: email }] },
  });

  return user;
};