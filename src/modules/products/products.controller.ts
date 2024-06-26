import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ValidationMongoIdPipe } from '../../common/pipes';

@Controller('products')
export class ProductsController {
  private logger: Logger = new Logger(ProductsController.name);
  constructor(private readonly productService: ProductsService) {}

  @Post('/create')
  async createProduct(@Body() createProductDto: CreateProductDto) {
    this.logger.log(
      `Create Product Data ==>> ${JSON.stringify(createProductDto)}`,
    );

    return this.productService.createProduct(createProductDto);
  }

  @Get('/:productId')
  async getProduct(
    @Param('productId', ValidationMongoIdPipe) productId: string,
  ) {
    this.logger.log(`Get Product By Id ==>> ${productId}`);

    return this.productService.getProduct(productId);
  }

  @Put('/:productId')
  async updateProduct(
    @Param('productId', ValidationMongoIdPipe) productId: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    this.logger.log(
      `Update Product Data ==>> ${JSON.stringify(updateProductDto)}`,
    );

    return this.productService.updateProduct(productId, updateProductDto);
  }

  @Delete('/:productId')
  async deleteProduct(
    @Param('productId', ValidationMongoIdPipe) productId: string,
  ) {
    this.logger.log(`Delete Product By Id ==>> ${productId}`);

    return this.productService.deleteProduct(productId);
  }
}
