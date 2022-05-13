import { User } from 'src/modules/users/entities/user.entity';
export declare class Task {
    id: number;
    name: string;
    complited: boolean;
    author: User;
    created_at: Date;
}
