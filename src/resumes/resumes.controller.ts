import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Resume')
@Controller('resumes')
export class ResumesController {
  @Get()
  @ApiOperation({
    summary: 'Retrieve resume',
    description: 'Retrieves the details of my resume constructed according to the JSONResume.org schema',
  })
  getResume() {
    return {
      profile: 'bro'
    }
  }
}
