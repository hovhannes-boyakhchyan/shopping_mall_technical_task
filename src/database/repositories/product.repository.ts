import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { Product, ProductDocument } from '../schemas';

@Injectable()
export class ProductRepository extends AbstractRepository<ProductDocument> {
  logger = new Logger(ProductRepository.name);

  constructor(
    @InjectModel(Product.name)
    productModel: Model<ProductDocument>,
  ) {
    super(productModel);
  }

  async findOne(
    filterQuery: FilterQuery<ProductDocument>,
  ): Promise<ProductDocument> {
    return this.model.findOne(filterQuery).populate('category');
  }
}
