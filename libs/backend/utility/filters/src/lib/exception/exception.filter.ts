import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { IException } from '@shared/interfaces';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    let statusCode: number;
    let message: string | object;

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    if (exception instanceof HttpException) {
      statusCode = exception.getStatus();
      message = exception ? exception.getResponse() : 'INTERNAL SERVER ERROR';
    } else if (typeof exception === 'object') {
      statusCode = exception.status
        ? (exception.status as number)
        : HttpStatus.BAD_REQUEST;
      message = exception.message ? exception.message : 'INTERNAL SERVER ERROR';
    } else {
      statusCode = HttpStatus.BAD_REQUEST;
      message =
        exception && exception?.original?.code
          ? exception?.original?.code
          : 'INTERNAL SERVER ERROR';
    }

    // console.error('Exception ===>', exception['meta']);

    response.status(statusCode).json(<IException>{
      statusCode,
      message: message,
      timestamp: new Date().toISOString(),
      path: request.url,
      stackTrace: exception,
    });
  }
}
