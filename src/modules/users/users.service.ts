import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { User } from './entities/user.entity';
import { AuthorNotFoundException } from './exceptions/author-with-not-exist.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getOne(id: number) {
    const author = await this.usersRepository.findOne(id);
    if (!author) throw new AuthorNotFoundException('id');
    return author;
  }

  async getByEmail(email: string) {
    const author = await this.usersRepository.findOne({
      where: {
        email,
      },
    });
    if (!author) throw new AuthorNotFoundException('email');
    return author;
  }

  async getAuthors() {
    const [data, count] = await this.usersRepository.find();

    return { data, count };
  }

  async create(createAuthor: CreateAuthorDto) {
    const newAuthor = this.usersRepository.create(createAuthor);
    await this.usersRepository.save(newAuthor);
    return newAuthor;
  }

  remove(id: number) {
    this.usersRepository.delete(id);
  }
}
