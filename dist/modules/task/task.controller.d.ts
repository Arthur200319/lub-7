import { RequestWithUser } from 'src/common/types/request-with-user.type';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    completed(req: RequestWithUser): Promise<import("./entities/task.entity").Task[]>;
    uncompleted(req: RequestWithUser): Promise<import("./entities/task.entity").Task[]>;
    create(createTaskDto: CreateTaskDto, req: RequestWithUser): Promise<import("./entities/task.entity").Task>;
    makeCompleted(id: number): Promise<import("./entities/task.entity").Task>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
