import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { ApiHeader, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Skill } from './schemas/skill.schema';
import { TokenAuthGuard } from 'src/auth/token-auth.guard';
import { Roles } from 'src/common/decorators/roles.decorators';
import { Role } from 'src/common/enums/role.enum';
import { RolesGuard } from 'src/common/guards/roles.guard';

@ApiTags('Skills')
@Controller('skills')
@ApiHeader({
  name: 'Authorization',
  description: 'Bearer auth token',
  required: true
})
@UseGuards(TokenAuthGuard, RolesGuard)
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post()
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Create skill',
    description: 'Creates the skill resource',
  })
  createSkill(@Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.create(createSkillDto);
  }

  @Get()
  @Roles(Role.Admin, Role.User)
  @ApiOperation({
    summary: 'List skill',
    description: 'Retrieves list of the skill resources',
  })
  findAllSkill() {
    return this.skillsService.findAll();
  }

  @Put(':id')
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Update skill',
    description: 'Updates the skill resource associated with the provided id',
  })
  updateSkill(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillsService.update(id, updateSkillDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Delete skill',
    description: 'Deletes the skill resource associated with the provided id',
  })
  @ApiOkResponse()
  removeSkill(@Param('id') id: string) {
    return this.skillsService.remove(id);
  }
}
