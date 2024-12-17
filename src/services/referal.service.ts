import prisma from "../prisma";

export const findReferal = async (referal: string) => {
  const user = await prisma.user.findFirst({
    where: { OR: [{ ref_code: referal }] },
  });

  return user;
};