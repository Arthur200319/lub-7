import { NotFoundException } from '@nestjs/common';
export declare class AuthorNotFoundException extends NotFoundException {
    constructor(notFound: string);
}
