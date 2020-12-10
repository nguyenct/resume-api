import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export type User = {
  name: string,
  role: string,
  token: string,
}

@Injectable()
export class UsersService {
  constructor(private configService: ConfigService) {}

  private readonly users = [
    {
      name: 'Admin',
      role: 'admin',
      token: this.configService.get('adminToken'),
    },
    {
      name: 'User',
      role: 'user',
      token: this.configService.get('userToken'),
    }
  ]

  async findOne(token: string): Promise<User | undefined> {
    return this.users.find(role => role.token === token);
  }
}

