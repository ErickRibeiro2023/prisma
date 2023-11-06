import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.User.create({
    data: {
      name: "Erick",
      fullname: "Ribeiro de souza",
      cpf: 172,
      address: "Rio de janeiro"
    },
  });


  console.log(result);
}


main();
