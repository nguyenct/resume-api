import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import {
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorators';
import { Role } from 'src/common/enums/role.enum';
import { Experience } from './schemas/experience.schema';
import { TokenAuthGuard } from 'src/auth/token-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';

@ApiTags('Experience')
@Controller('experience')
@ApiHeader({
  name: 'Authorization',
  description: 'Bearer auth token',
  required: true,
})
@UseGuards(TokenAuthGuard, RolesGuard)
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Post()
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Create experience',
    description: 'Creates the experience resource',
  })
  createExperience(
    @Body() createExperienceDto: CreateExperienceDto,
  ): Promise<Experience> {
    return this.experienceService.create(createExperienceDto);
  }

  @Get()
  @Roles(Role.Admin, Role.User)
  @ApiOperation({
    summary: 'List experience',
    description: 'Retrieves list of the experience resources',
  })
  findAllExperience(): Promise<Experience[]> {
    return this.experienceService.findAll();
  }

  @Put(':id')
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Update education',
    description:
      'Updates the education resource associated with the provided id',
  })
  updateExperience(
    @Param('id') id: string,
    @Body() updateExperienceDto: UpdateExperienceDto,
  ): Promise<Experience> {
    return this.experienceService.update(id, updateExperienceDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Delete education',
    description:
      'Deletes the education resource associated with the provided id',
  })
  @ApiOkResponse()
  removeExperience(@Param('id') id: string) {
    return this.experienceService.remove(id);
  }
}
