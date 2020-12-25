import { Module } from '@nestjs/common';
import { BasicsService } from './basics.service';
import { BasicsController } from './basics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Basic, BasicSchema } from './schemas/basic.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Basic.name, schema: BasicSchema }]),
  ],
  controllers: [BasicsController],
  providers: [BasicsService],
  exports: [BasicsService],
})
export class BasicsModule {}
