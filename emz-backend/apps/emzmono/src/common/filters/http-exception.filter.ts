import { ExceptionFilter,Catch, ArgumentsHost, UnprocessableEntityException, HttpStatus } from '@nestjs/common';
import { STATUS_CODES } from 'http';
import * as Joi from "joi";

@Catch(UnprocessableEntityException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: UnprocessableEntityException, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const statusCode = exception.getStatus();
        const data = exception.getResponse() as any;
        const errorResponse  = {} as any;
        errorResponse.errors = data.errors;

        if (Joi.isError(data)) {
            errorResponse.statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
            errorResponse.errors = this.validationFilter(data.details);
        }

        errorResponse.message = STATUS_CODES[statusCode];
        errorResponse.statusCode = statusCode;

        response.status(errorResponse.statusCode).json(errorResponse)
    }

    private validationFilter(details: any[]): string[] {
        const messages = [];
        for (const detail of details) {
            const key = detail.path.join('.');

            messages.push({[key]: detail.message});
        }
        return messages;
    }
}
