import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
    private logger = new Logger('HTTP');

    use(request: Request, response: Response, next: NextFunction): void {
       
        response.on('finish', () => {
            const { statusCode } = response;
           
            // this.logger.log( request.headers )
            this.logger.log(
                `${request.method} ${request.hostname} ${request.url} - ${statusCode}`
            );
        });

        next();
    }
}