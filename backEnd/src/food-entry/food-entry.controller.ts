import { Body, Controller, Get, Post } from '@nestjs/common';
import { FoodEntryService } from './food-entry.service';
import { AddFoodEntryDto } from './dto/add-foodEntry.dto';

@Controller('food-entry')
export class FoodEntryController {
  constructor(private foodEntryService: FoodEntryService) {}

  @Get()
  getFoodEntries() {
    const userId = '1474f5d0-1f5c-4b0f-a0a3-6ca4d99b467c';

    return this.foodEntryService.getFoodEntries(userId);
  }

  @Post()
  addFoodEntry(@Body() dto: AddFoodEntryDto) {
    return this.foodEntryService.addFoodEntry(
      dto.userId,
      dto.foodId,
      dto.amount,
      dto.addedAt,
    );
  }
}
