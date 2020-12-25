import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiConflictResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BasicsService } from './basics.service';
import { CreateBasicDto } from './dto/create-basic.dto';
import { UpdateBasicDto } from './dto/update-basic.dto';
import { Basic } from './schemas/basic.schema';

@ApiTags('Basics')
@Controller('basics')
export class BasicsController {
  constructor(private readonly basicsService: BasicsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create basic information',
    description: 'Creates the basic information resource. Note: Only one can exist.',
  })
  @ApiConflictResponse({
    description: 'Basic information already exists, delete or update the current basic information resource'
  })
  create(@Body() createBasicDto: CreateBasicDto): Promise<Basic> {
    return this.basicsService.create(createBasicDto);
  }

  @Get()
  @ApiOperation({
    summary: 'List basic information',
    description: 'Retrieves a list of the basic information resource. Note: Only one can exist.',
  })
  findAll(): Promise<Basic[]> {
    return this.basicsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get basic information',
    description: 'Retrieves the basic information resource associated with the provided id. Note: Only one can exist.',
  })
  findOne(@Param('id') id: string): Promise<Basic> {
    return this.basicsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update basic information',
    description: 'Updates the basic information resource associated with the provided id. Note: Only one can exist.',
  })
  update(@Param('id') id: string, @Body() updateBasicDto: UpdateBasicDto): Promise<Basic> {
    return this.basicsService.update(id, updateBasicDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete basic information',
    description: 'Deletes the basic information resource associated with the provided id.',
  })
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.basicsService.remove(id);
  }
}
