import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
  collection: Category.name,
})
export class Category {
  @Prop({ auto: true })
  _id!: mongoose.Schema.Types.ObjectId;

  @Prop({ type: String, default: '' })
  title: string;

  @Prop({ type: String, default: '' })
  description: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
