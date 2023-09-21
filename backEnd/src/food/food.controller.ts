import { Controller, Get, Param } from '@nestjs/common';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Get()
  getAllFood() {
    console.log('hello');
    return this.foodService.getAllFood();
  }

  @Get(':id')
  getFoodById(@Param('id') foodId: string) {
    return this.foodService.getFoodById(foodId);
  }
}
