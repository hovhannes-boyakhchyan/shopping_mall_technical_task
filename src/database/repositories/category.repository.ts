import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { Category, CategoryDocument } from '../schemas';

@Injectable()
export class CategoryRepository extends AbstractRepository<CategoryDocument> {
  logger = new Logger(CategoryRepository.name);

  constructor(
    @InjectModel(Category.name)
    categoryModel: Model<CategoryDocument>,
  ) {
    super(categoryModel);
  }
}
