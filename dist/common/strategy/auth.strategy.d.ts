import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../modules/users/users.service';
declare const AuthJwtStrategy_base: new (...args: any[]) => any;
export declare class AuthJwtStrategy extends AuthJwtStrategy_base {
    private readonly configService;
    private readonly usersService;
    constructor(configService: ConfigService, usersService: UsersService);
    validate(payload: {
        userId: number;
    }): Promise<import("../../modules/users/entities/user.entity").User>;
}
export {};
