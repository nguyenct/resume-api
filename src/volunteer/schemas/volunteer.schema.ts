import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type VolunteerDocument = Volunteer & Document;

@Schema()
export class Volunteer {
  @ApiPropertyOptional()
  @Prop()
  organization: string;

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

export const VolunteerSchema = SchemaFactory.createForClass(Volunteer);
