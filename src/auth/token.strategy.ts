import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TokenStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super();
  }

  async validate(token): Promise<any> {
    const user = await this.usersService.findOne(token);
    if (user) {
      return user;
    }
    throw new UnauthorizedException(); 
  }
}
