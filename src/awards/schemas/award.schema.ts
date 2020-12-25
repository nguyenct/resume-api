import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type AwardDocument = Award & Document;

@Schema()
export class Award {
  @ApiPropertyOptional()
  @Prop()
  title: string;

  @ApiPropertyOptional()
  @Prop()
  date: string;

  @ApiPropertyOptional()
  @Prop()
  awarder: string;

  @ApiPropertyOptional()
  @Prop()
  summary: string;
}

export const AwardSchema = SchemaFactory.createForClass(Award);
