import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ExperienceDocument = Experience & Document;

@Schema()
export class Experience {
  @ApiPropertyOptional()
  @Prop()
  company: string;
  
  @ApiPropertyOptional()
  @Prop()
  position: string;

  @ApiPropertyOptional()
  @Prop()
  website: string;

  @ApiPropertyOptional()
  @Prop()
  startDate: string;

  @ApiPropertyOptional()
  @Prop()
  endDate: string;

  @ApiPropertyOptional()
  @Prop()
  summary: string;

  @ApiPropertyOptional()
  @Prop()
  highlights: string[];
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);