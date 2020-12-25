import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TokenAuthGuard } from 'src/auth/token-auth.guard';
import { Roles } from 'src/common/decorators/roles.decorators';
import { Role } from 'src/common/enums/role.enum';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { ResumeService } from './resume.service';
import { Resume } from './schemas/resume.schema';

@ApiTags('Resume')
@Controller('resume')
@ApiHeader({
  name: 'Authorization',
  description: 'Bearer auth token',
  required: true,
})
@UseGuards(TokenAuthGuard, RolesGuard)
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get()
  @Roles(Role.Admin, Role.User)
  @ApiOperation({
    summary: 'Retrieve resume',
    description:
      'Retrieves the details of my resume constructed according to the JSONResume.org schema',
  })
  getResume(): Promise<Resume> {
    return this.resumeService.get();
  }
}
