import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const User = await prisma.User.findMany();
  console.log(User);
}


main();
