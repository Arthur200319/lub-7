import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthJwtStrategy } from 'src/common/strategy/auth.strategy';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [ConfigModule, PassportModule, UsersModule, JwtModule.register({})],
  providers: [AuthService, AuthJwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
