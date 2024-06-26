import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto';

@Controller('categories')
export class CategoriesController {
  private logger: Logger;
  constructor(private readonly categoriesService: CategoriesService) {
    this.logger = new Logger();
  }

  @Post('/create')
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    this.logger.log(
      `Create Category Data ==>> ${JSON.stringify(createCategoryDto)}`,
    );

    return this.categoriesService.create(createCategoryDto);
  }
}
