import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { ApiException } from './api.exception';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus ? exception.getStatus() : 401;
    console.log(exception.message);
    if (exception instanceof ApiException) {
      response
        .status(status)
        .json({
          status: exception.getErrorCode(),
          success: false,
          records: exception.getErrorMessage(),
        });
    } else {
      response
        .status(status)
        .json({
          status,
          success: false,
          records:  exception.message.error || exception.message,
        });
    }
  }
}