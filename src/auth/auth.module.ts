import { Module } from '@nestjs/common';
import { TokenStrategy } from './token.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [PassportModule],
    providers: [TokenStrategy, UsersService, ConfigService]
})
export class AuthModule {}
