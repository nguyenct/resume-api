import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type EducationDocument = Education & Document;

@Schema()
export class Education {
  @ApiPropertyOptional()
  @Prop()
  institution: string;
  
  @ApiPropertyOptional()
  @Prop()
  area: string;

  @ApiPropertyOptional()
  @Prop()
  studyType: string;

  @ApiPropertyOptional()
  @Prop()
  startDate: string;

  @ApiPropertyOptional()
  @Prop()
  endDate: string;

  @ApiPropertyOptional()
  @Prop()
  gpa: number;

  @ApiPropertyOptional()
  @Prop()
  courses: string[];
}

export const EducationSchema = SchemaFactory.createForClass(Education);