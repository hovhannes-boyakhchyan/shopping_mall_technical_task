import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Category } from './category.schema';

export type ProductDocument = Product & Document;

@Schema({
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
  collection: Product.name,
})
export class Product {
  @Prop({ auto: true })
  _id!: mongoose.Schema.Types.ObjectId;

  @Prop({ type: String })
  title: string;

  @Prop({ type: String })
  description: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
    minlength: 8,
    maxlength: 8,
  })
  SKU: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Category.name,
    required: true,
  })
  category: mongoose.Schema.Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
