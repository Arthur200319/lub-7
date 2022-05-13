import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getOne(id: number): Promise<User>;
    getByEmail(email: string): Promise<User>;
    getAuthors(): Promise<{
        data: User;
        count: User;
    }>;
    create(createAuthor: CreateAuthorDto): Promise<User>;
    remove(id: number): void;
}
