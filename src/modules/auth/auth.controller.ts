import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { RequestWithUser } from 'src/common/types/request-with-user.type';
import { AuthGuard } from '../../common/guards/auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard)
  checkAuth(@Req() request: RequestWithUser) {
    return request.user;
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto, @Req() request: Request) {
    const user = await this.authService.register(registerDto);
    const cookie = this.authService.getCookieWithJwt(user.id);
    request.res.setHeader('Set-Cookie', cookie);
    return user;
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto, @Req() request: Request) {
    const author = await this.authService.login(loginDto);
    const cookie = this.authService.getCookieWithJwt(author.id);

    request.res.setHeader('Set-Cookie', [cookie]);
    return author;
  }

  @Post('logout')
  @UseGuards(AuthGuard)
  @HttpCode(200)
  logout(@Req() request: RequestWithUser) {
    const emptyCookie = this.authService.removeCookieWithJwt();
    request.res.setHeader('Set-Cookie', emptyCookie);
  }
}
