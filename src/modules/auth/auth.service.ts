import {
  CACHE_MANAGER,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    try {
      const author = await this.usersService.getByEmail(email);
      await this.verifyPassword(password, author.password);
      return author;
    } catch (error) {
      throw new HttpException(
        'Wrong credential provided',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async register(registerDto: RegisterDto) {
    const { password } = registerDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await this.usersService.create({
      ...registerDto,
      password: hashedPassword,
    });

    return createdUser;
  }

  private async verifyPassword(authorPassword: string, HashedPassword: string) {
    const result = await bcrypt.compare(authorPassword, HashedPassword);
    if (!result)
      throw new HttpException(
        'Wrong password provided',
        HttpStatus.BAD_REQUEST,
      );
  }

  //* jwt
  getCookieWithJwt(authorId: number) {
    const payload = { authorId };
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_SECRET_KEY'),
      expiresIn: `${this.configService.get('JWT_TOKEN_EXPIRATION_TIME')}s`,
    });
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get(
      'JWT_ACCESS_TOKEN_EXPIRATION_TIME',
    )}`;
  }

  removeCookieWithJwt() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=;`;
  }
}
