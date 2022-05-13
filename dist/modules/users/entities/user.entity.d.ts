import { Task } from 'src/modules/task/entities/task.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    task: Task;
    created_at: Date;
}
