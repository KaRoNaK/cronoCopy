import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FoodEntryService {
  constructor(private prismaService: PrismaService) {}

  getFoodEntries(userId: string) {
    return this.prismaService.foodEntry.findMany({ where: { userId } });
  }

  addFoodEntry(userId: string, foodId: string, amount: number, date: Date) {
    return this.prismaService.foodEntry.create({
      data: {
        amount: amount,
        addedAt: date,
        user: { connect: { id: userId } },
        food: { connect: { id: foodId } },
      },
    });
  }
}
