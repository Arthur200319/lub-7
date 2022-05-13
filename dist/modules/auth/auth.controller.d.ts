import { Request } from 'express';
import { RequestWithUser } from 'src/common/types/request-with-user.type';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    checkAuth(request: RequestWithUser): import("../users/entities/user.entity").User;
    register(registerDto: RegisterDto, request: Request): Promise<import("../users/entities/user.entity").User>;
    login(loginDto: LoginDto, request: Request): Promise<import("../users/entities/user.entity").User>;
    logout(request: RequestWithUser): void;
}
