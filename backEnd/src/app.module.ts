import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { FoodEntryController } from './food-entry/food-entry.controller';
import { FoodEntryService } from './food-entry/food-entry.service';
import { FoodEntryModule } from './food-entry/food-entry.module';
import { FoodService } from './food/food.service';
import { FoodModule } from './food/food.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    FoodEntryModule,
    FoodModule,
  ],
  controllers: [FoodEntryController],
  providers: [FoodEntryService, FoodService],
})
export class AppModule {}
