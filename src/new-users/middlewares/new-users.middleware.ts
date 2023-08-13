import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let protocol = req.protocol;
    let host = req.hostname;
    let port = 4000;
    let url = req.originalUrl;
    let method = req.method;
    let date = new Date().toDateString();
    console.log(`${protocol}://${host}:${port}${url} Method:${method} ${date}`);
    next();
  }
}
