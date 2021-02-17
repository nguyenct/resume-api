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
import { VolunteerService } from './volunteer.service';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';
import {
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorators';
import { Role } from 'src/common/enums/role.enum';
import { TokenAuthGuard } from 'src/auth/token-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Volunteer } from './schemas/volunteer.schema';

@ApiTags('Volunteer')
@Controller('volunteer')
@ApiHeader({
  name: 'Authorization',
  description: 'Bearer auth token',
  required: true,
})
@UseGuards(TokenAuthGuard, RolesGuard)
export class VolunteerController {
  constructor(private readonly volunteerService: VolunteerService) {}

  @Post()
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Create volunteer',
    description: 'Creates the volunteer resource',
  })
  createVolunteer(
    @Body() createVolunteerDto: CreateVolunteerDto,
  ): Promise<Volunteer> {
    return this.volunteerService.create(createVolunteerDto);
  }

  @Get()
  @Roles(Role.Admin, Role.User)
  @ApiOperation({
    summary: 'List volunteer',
    description: 'Retrieves list of the volunteer resources',
  })
  findAllVolunteer(): Promise<Volunteer[]> {
    return this.volunteerService.findAll();
  }

  @Put(':id')
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Update volunteer',
    description:
      'Updates the volunteer resource associated with the provided id',
  })
  updateVolunteer(
    @Param('id') id: string,
    @Body() updateVolunteerDto: UpdateVolunteerDto,
  ): Promise<Volunteer> {
    return this.volunteerService.update(id, updateVolunteerDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Delete volunteer',
    description:
      'Deletes the volunteer resource associated with the provided id',
  })
  @ApiOkResponse()
  removeVolunteer(@Param('id') id: string) {
    return this.volunteerService.remove(id);
  }
}
