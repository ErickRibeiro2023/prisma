import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.User.update({
    where: {
      fullname: "Ribeiro de souza",
    },
    data: {
      name: "Erickleysson",
      
    },
  });


  console.log(result);
}
main()
