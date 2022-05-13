import { HttpException, Injectable } from '@nestjs/common';
import { AuthGuard as authGuard } from '@nestjs/passport';


@Injectable()
export class AuthGuard extends authGuard('auth') {
  constructor() {
    super();
  }

  handleRequest(err, user) {
    console.log({ err, user });
    if (err || !user) throw new HttpException("wrong credentials", 400)
    return user;
  }
}
