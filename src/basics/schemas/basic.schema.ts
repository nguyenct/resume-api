import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { Profile, Location } from '../dto/create-basic.dto';

export type BasicDocument = Basic & Document;

@Schema()
export class Basic {
  @ApiPropertyOptional()
  @Prop()
  name: string;
  
  @ApiPropertyOptional()
  @Prop()
  label: string;

  @ApiPropertyOptional()
  @Prop()
  picture: string;

  @ApiPropertyOptional()
  @Prop()
  email: string;

  @ApiPropertyOptional()
  @Prop()
  phone: string;

  @ApiPropertyOptional()
  @Prop()
  website: string;

  @ApiPropertyOptional()
  @Prop()
  summary: string;

  @ApiPropertyOptional()
  @Prop(raw({
    address: { type: String },
    postalCode: { type: String },
    city: { type: String },
    countryCode: { type: String },
    region: { type: String },
  }))
  location: Location;

  @ApiPropertyOptional()
  @Prop()
  profiles: Profile[];
}

export const BasicSchema = SchemaFactory.createForClass(Basic);