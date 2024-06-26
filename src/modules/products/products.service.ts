import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Product } from '../../database/schemas';
import { ProductRepository } from '../../database/repositories';
import { CreateProductDto, UpdateProductDto } from './dto';
import { generateToken } from '../../common/utils';

@Injectable()
export class ProductsService {
  private logger: Logger = new Logger(ProductsService.name);
  constructor(private readonly productRepository: ProductRepository) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    try {
      return await this.productRepository.create({
        ...createProductDto,
        SKU: generateToken(8),
      });
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async getProduct(productId: string): Promise<Product> {
    try {
      return await this.productRepository.findOne({ _id: productId });
    } catch (e) {
      throw new NotFoundException(e);
    }
  }

  async updateProduct(
    productId: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    try {
      return await this.productRepository.findOneAndUpdate(
        { _id: productId },
        { $set: updateProductDto },
      );
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async deleteProduct(productId: string): Promise<void> {
    try {
      await this.productRepository.deleteOne({ _id: productId });
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
