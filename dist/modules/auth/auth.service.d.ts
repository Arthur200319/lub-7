import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    login(loginDto: LoginDto): Promise<import("../users/entities/user.entity").User>;
    register(registerDto: RegisterDto): Promise<import("../users/entities/user.entity").User>;
    private verifyPassword;
    getCookieWithJwt(authorId: number): string;
    removeCookieWithJwt(): string;
}
