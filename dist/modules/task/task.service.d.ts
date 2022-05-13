import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    getOne(id: number): Promise<Task>;
    create(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    completed(userId: number): Promise<Task[]>;
    uncompleted(userId: number): Promise<Task[]>;
    makeCompleted(id: number): Promise<Task>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
