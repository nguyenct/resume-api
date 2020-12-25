import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type SkillDocument = Skill & Document;

@Schema()
export class Skill {
  @ApiPropertyOptional()
  @Prop()
  name: string;

  @ApiPropertyOptional()
  @Prop()
  level: string;

  @ApiPropertyOptional()
  @Prop()
  keywords: string[];
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
