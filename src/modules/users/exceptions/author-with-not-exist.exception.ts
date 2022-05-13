import { NotFoundException } from '@nestjs/common';

export class AuthorNotFoundException extends NotFoundException {
  constructor(notFound: string) {
    super(`Author with this ${notFound} not exist`);
  }
}
