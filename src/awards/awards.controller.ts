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
import {
  ApiTags,
  ApiHeader,
  ApiOperation,
  ApiOkResponse,
} from '@nestjs/swagger';
import { TokenAuthGuard } from 'src/auth/token-auth.guard';
import { Roles } from 'src/common/decorators/roles.decorators';
import { Role } from 'src/common/enums/role.enum';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { AwardsService } from './awards.service';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { Award } from './schemas/award.schema';

@ApiTags('Awards')
@Controller('awards')
@ApiHeader({
  name: 'Authorization',
  description: 'Bearer auth token',
  required: true,
})
@UseGuards(TokenAuthGuard, RolesGuard)
export class AwardsController {
  constructor(private readonly awardsService: AwardsService) {}

  @Post()
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Create award',
    description: 'Creates the award resource',
  })
  createAward(@Body() createAwardDto: CreateAwardDto): Promise<Award> {
    return this.awardsService.create(createAwardDto);
  }

  @Get()
  @Roles(Role.Admin, Role.User)
  @ApiOperation({
    summary: 'List awards',
    description: 'Retrieves list of the award resources',
  })
  findAllAward(): Promise<Award[]> {
    return this.awardsService.findAll();
  }

  @Put(':id')
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Update award',
    description: 'Updates the award resource associated with the provided id',
  })
  updateAward(
    @Param('id') id: string,
    @Body() updateAwardDto: UpdateAwardDto,
  ): Promise<Award> {
    return this.awardsService.update(id, updateAwardDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @ApiOperation({
    summary: 'Delete award',
    description: 'Deletes the award resource associated with the provided id',
  })
  @ApiOkResponse()
  removeAward(@Param('id') id: string) {
    return this.awardsService.remove(id);
  }
}
