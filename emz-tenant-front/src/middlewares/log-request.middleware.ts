import { Request, Response, NextFunction } from "express";
import { Injectable, NestMiddleware, Logger } from "@nestjs/common";

@Injectable()
export class HttpRequestLoggerMiddleware implements NestMiddleware {
    private logger = new Logger("HTTP");

    use(request: Request, response: Response, next: NextFunction): void {
      
        const userAgent = request.get("user-agent") || "";
        this.logger.log(
            `Request method: ${request.method } - host: ${request.hostname} - path:${request.path} - ip:${request.ip}`,
        );

        response.on("finish", () => {
            const { statusCode } = response;
           
            this.logger.log(
                `Reponse statusCode:${statusCode}`,
            );
        });

        next();
    }
}