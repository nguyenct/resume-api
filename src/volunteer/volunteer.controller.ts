import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { VolunteerService } from './volunteer.service';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';
import { ApiHeader, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorators';
import { Role } from 'src/common/enums/role.enum';

@ApiTags('Volunteer')
@Controller('volunteer')
@ApiHeader({
  name: 'Authorization',
  description: 'Bearer auth token',
  required: true
})
export class VolunteerController {
  constructor(private readonly volunteerService: VolunteerService) {}

  @Post()
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Create experience',
    description: 'Creates the experience resource',
  })
  createVolunteer(@Body() createVolunteerDto: CreateVolunteerDto) {
    return this.volunteerService.create(createVolunteerDto);
  }

  @Get()
  @Roles(Role.User)
  @ApiOperation({
    summary: 'List experience',
    description: 'Retrieves list of the experience resources',
  })
  findAllVolunteer() {
    return this.volunteerService.findAll();
  }


  @Put(':id')
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Update education',
    description: 'Updates the education resource associated with the provided id',
  })
  updateVolunteer(@Param('id') id: string, @Body() updateVolunteerDto: UpdateVolunteerDto) {
    return this.volunteerService.update(id, updateVolunteerDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Delete education',
    description: 'Deletes the education resource associated with the provided id',
  })
  @ApiOkResponse()
  removeVolunteer(@Param('id') id: string) {
    return this.volunteerService.remove(id);
  }
}
