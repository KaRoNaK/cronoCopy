import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FoodService {
  constructor(private prismaService: PrismaService) {}

  getAllFood() {
    return this.prismaService.food.findMany();
  }

  getFoodById(foodId: string) {
    return this.prismaService.food.findUnique({ where: { id: foodId } });
  }
}
