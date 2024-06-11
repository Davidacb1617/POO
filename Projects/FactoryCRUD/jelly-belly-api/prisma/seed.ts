import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const beansFlavor = require('../jellyBellyBeanFlavor.json');

async function main() {
  for (const flavor of beansFlavor) {
    await prisma.beanFlavor.create({
      data: {
        FlavorName: flavor.FlavorName,
        Description: flavor.Description,
        Ingredients: flavor.Ingredients,
      },
    });
  }
  console.log('Seeded Succesfully!');
}

main()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
