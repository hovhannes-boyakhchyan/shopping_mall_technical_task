import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateCategoryDto } from './dto';
import { CategoryRepository } from '../../database/repositories';
import { Category } from '../../database/schemas';

@Injectable()
export class CategoriesService {
  private logger: Logger = new Logger(CategoriesService.name);

  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      return await this.categoryRepository.create(createCategoryDto);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
