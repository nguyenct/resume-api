import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { ApiHeader, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Education } from './schemas/education.schema';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { TokenAuthGuard } from 'src/auth/token-auth.guard';
import { Role } from 'src/common/enums/role.enum';
import { Roles } from 'src/common/decorators/roles.decorators';

@ApiTags('Education')
@Controller('education')
@ApiHeader({
  name: 'Authorization',
  description: 'Bearer auth token',
  required: true
})
@UseGuards(TokenAuthGuard, RolesGuard)
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Create education',
    description: 'Creates the education resource',
  })
  createEducation(@Body() createEducationDto: CreateEducationDto): Promise<Education> {
    return this.educationService.create(createEducationDto);
  }

  @Get()
  @Roles(Role.Admin, Role.User)
  @ApiOperation({
    summary: 'List education',
    description: 'Retrieves list of the education resources',
  })
  findAllEducation(): Promise<Education[]> {
    return this.educationService.findAll();
  }

  @Put(':id')
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Update education',
    description: 'Updates the education resource associated with the provided id',
  })
  updateEducation(@Param('id') id: string, @Body() updateEducationDto: UpdateEducationDto): Promise<Education> {
    return this.educationService.update(id, updateEducationDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Delete education',
    description: 'Deletes the education resource associated with the provided id',
  })
  @ApiOkResponse()
  removeEducation(@Param('id') id: string) {
    return this.educationService.remove(id);
  }
}
