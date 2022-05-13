import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  getOne(id: number) {
    return this.taskRepository.findOne(id);
  }

  create(createTaskDto: CreateTaskDto, user: User) {
    const task = this.taskRepository.create({ ...createTaskDto, author: user });
    return this.taskRepository.save(task);
  }

  completed(userId: number) {
    return this.taskRepository.find({
      where: {
        author: userId,
        complited: true,
      },
    });
  }

  uncompleted(userId: number) {
    return this.taskRepository.find({
      where: {
        author: userId,
        complited: false,
      },
    });
  }

  async makeCompleted(id: number) {
    await this.taskRepository.update({ id }, { complited: true });
    return this.getOne(id);
  }

  remove(id: number) {
    return this.taskRepository.delete({ id });
  }
}
