import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const banana = await prisma.food.upsert({
    where: { name: 'Banana' },
    update: {},
    create: {
      name: 'Banana',
      protein: 0.0109,
      carb: 0.2284,
      fat: 0.0033,
      calorie: 0.89,
    },
  });

  const potato = await prisma.food.upsert({
    where: { name: 'Potato' },
    update: {},
    create: {
      name: 'Potato',
      protein: 0.0166,
      carb: 0.1936,
      fat: 0.024,
      calorie: 1.04,
    },
  });
  const chickenBreast = await prisma.food.upsert({
    where: { name: 'Chicken breast' },
    update: {},
    create: {
      name: 'Chicken breast',
      protein: 0.2955,
      carb: 0,
      fat: 0.0772,
      calorie: 1.95,
    },
  });
  const oliveOil = await prisma.food.upsert({
    where: { name: 'Olive oil' },
    update: {},
    create: {
      name: 'Olive oil',
      protein: 0,
      carb: 0,
      fat: 1,
      calorie: 9,
    },
  });
  const broccoli = await prisma.food.upsert({
    where: { name: 'Broccoli' },
    update: {},
    create: {
      name: 'Broccoli',
      protein: 0.0282,
      carb: 0.0664,
      fat: 0.0037,
      calorie: 0.34,
    },
  });
  const whiteRice = await prisma.food.upsert({
    where: { name: 'White rice' },
    update: {},
    create: {
      name: 'White rice',
      protein: 0.042,
      carb: 0.4408,
      fat: 0.0044,
      calorie: 2.04,
    },
  });
  const skyr = await prisma.food.upsert({
    where: { name: 'Skyr' },
    update: {},
    create: {
      name: 'Skyr',
      protein: 0.1,
      carb: 0.09,
      fat: 0.002,
      calorie: 0.8,
    },
  });
  const proteinPowder = await prisma.food.upsert({
    where: { name: 'Protein powder' },
    update: {},
    create: {
      name: 'Protein powder',
      protein: 0.95,
      carb: 0.02,
      fat: 0.03,
      calorie: 4,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
