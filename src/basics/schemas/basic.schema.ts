import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Profiles } from '../dto/create-basic.dto';

export type BasicDocument = Basic & Document;

@Schema()
export class Basic {
  @Prop()
  name: string;

  @Prop()
  label: string;

  @Prop()
  picture: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  website: string;

  @Prop()
  summary: string;

  @Prop(raw({
    address: { type: String },
    postalCode: { type: String },
    city: { type: String },
    countryCode: { type: String },
    region: { type: String },
  }))
  location: Record<string, any>;

  @Prop()
  profiles: Profiles[];
}

export const BasicSchema = SchemaFactory.createForClass(Basic);