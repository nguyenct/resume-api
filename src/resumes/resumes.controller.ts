import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Resume')
@Controller('resumes')
export class ResumesController {

  @Post()
  @ApiOperation({
    summary: 'Create a resume',
    description: 'Creates an empty resume object that is ready to be built from other endpoints',
  })
  createResume() {
    // Create resume document in mongo
    return 'Resume id'
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a resume',
    description: 'Retrieves the details of a resume associated with the resume ID that is supplied',
  })
  findOneResume(@Param('id') id: string) {
    return {
      profile: 'bro'
    }
  }

  @Get()
  @ApiOperation({
    summary: 'List all resumes',
    description: 'Returns a list of resumes in the database',

  })
  listAllResumes() {
    return {
      resume: 'bro'
    }
  }
}
