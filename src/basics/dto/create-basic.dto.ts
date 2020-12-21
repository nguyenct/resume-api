import { ApiProperty } from "@nestjs/swagger";

class Profiles {
  network: string;
  username: string;
  url: string;
}

export class CreateBasicDto {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  location: {
    address: string,
    postalCode: string,
    city: string,
    countryCode: string,
    region: string,
  };
  profiles: Profiles[];
}
