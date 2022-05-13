import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAuthors(): Promise<{
        data: import("./entities/user.entity").User;
        count: import("./entities/user.entity").User;
    }>;
    getOne(id: number): Promise<import("./entities/user.entity").User>;
}
