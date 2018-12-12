import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

const CodeMessage = new Map()
.set('403', '未登入或登入超时，请重新登入');

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus ? exception.getStatus() : 401;

    response
      .status(status)
      .json({
        status,
        success: false,
        records: {
          data: CodeMessage.get(`${status}`) || exception.message.error || exception.message,
        },
      });
  }
}