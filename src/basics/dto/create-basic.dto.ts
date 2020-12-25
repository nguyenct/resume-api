import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class Profile {
  network: string;
  username: string;
  url: string;
}

export class Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export class CreateBasicDto {
  @IsNotEmpty()
  name: string;
  
  @ApiPropertyOptional()
  label: string;

  @ApiPropertyOptional()
  picture: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  phone: string;

  @ApiPropertyOptional()
  website: string;

  @ApiPropertyOptional()
  summary: string;

  @ApiPropertyOptional()
  location: Location;

  @ApiPropertyOptional()
  profiles: Profile[];
}
