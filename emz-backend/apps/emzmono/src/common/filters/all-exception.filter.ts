import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
  InternalServerErrorException,
  PreconditionFailedException,
  NotAcceptableException,
  ForbiddenException,
  RequestTimeoutException,
  ConflictException,
  GoneException,
  HttpVersionNotSupportedException,
  PayloadTooLargeException,
  UnsupportedMediaTypeException,
  NotImplementedException,
  MethodNotAllowedException,
  BadGatewayException,
  ImATeapotException,
  ServiceUnavailableException,
  GatewayTimeoutException,
} from '@nestjs/common';


@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()

    if( exception instanceof BadRequestException 
      || exception instanceof UnauthorizedException 
      || exception instanceof NotFoundException 
      || exception instanceof ForbiddenException 
      || exception instanceof NotAcceptableException 
      || exception instanceof RequestTimeoutException 
      || exception instanceof ConflictException 
      || exception instanceof GoneException 
      || exception instanceof HttpVersionNotSupportedException 
      || exception instanceof PayloadTooLargeException 
      || exception instanceof UnsupportedMediaTypeException 
      || exception instanceof InternalServerErrorException 
      || exception instanceof NotImplementedException 
      || exception instanceof ImATeapotException 
      || exception instanceof MethodNotAllowedException 
      || exception instanceof BadGatewayException 
      || exception instanceof ServiceUnavailableException 
      || exception instanceof GatewayTimeoutException 
      || exception instanceof PreconditionFailedException 
    ){
      response.status(exception.getStatus()).json(exception.getResponse())

    }else{
      response.status(400).json({
        statusCode: 400,
        message: exception['message'],
      })

    }

  }
}
