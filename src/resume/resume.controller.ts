import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { TokenAuthGuard } from 'src/auth/token-auth.guard';
import { Roles } from 'src/common/decorators/roles.decorators';
import { Role } from 'src/common/enums/role.enum';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { ResumeService } from './resume.service';
import { Resume } from './schemas/resume.schema';
import * as theme from 'jsonresume-theme-elegant';

@ApiTags('Resume')
@Controller('resume')
@UseGuards(TokenAuthGuard, RolesGuard)
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get('render')
  @Roles(Role.Admin, Role.User)
  @ApiOperation({
    summary: 'Render resume',
    description: 'Renders HTML from JSONResume.org schema with Theme: Elegant',
  })
  @ApiQuery({
    name: 'access_token',
    type: String,
    description: 'Your access token',
  })
  @ApiOkResponse()
  async renderResume() {
    const resumeJson = await this.resumeService.get();
    const resumeHTML = theme.render(resumeJson, {});
    return resumeHTML;
  }

  @Get()
  @Roles(Role.Admin, Role.User)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer auth token',
    required: true,
  })
  @ApiOperation({
    summary: 'Retrieve resume',
    description:
      'Retrieves the details of my resume constructed according to the JSONResume.org schema',
  })
  getResume(): Promise<Resume> {
    return this.resumeService.get();
  }
}
