import { ExceptionFilter,Catch, ArgumentsHost, UnprocessableEntityException, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { STATUS_CODES } from 'http';
import { isArray, isEmpty, snakeCase } from 'lodash';

@Catch(UnprocessableEntityException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: UnprocessableEntityException, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let statusCode = exception.getStatus();
        const data = exception.getResponse() as any;

        if (isArray(data.message) && data.message[0] instanceof ValidationError) {
            statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
            const validationErrors = data.message as ValidationError[];
            data.errors = this.validationFilter(validationErrors);
            delete data.error;
        }

        data.message = STATUS_CODES[statusCode];
        data.statusCode = statusCode;

        response.status(statusCode).json(data)
    }

    private validationFilter(validationErrors: ValidationError[]): string[] {
        const messages = [];
        for (const validationError of validationErrors) {
            if (!isEmpty(validationError.children)) {
                this.validationFilter(validationError.children);
                return;
            }

            let { property, constraints } = validationError;

            const message = { [property]: []};


            for (const [, constraint] of Object.entries(
                constraints,
            )) {
                message[property].push(constraint);
            }

            messages.push(message);
        }
        console.log(messages);
        return messages;
    }
}