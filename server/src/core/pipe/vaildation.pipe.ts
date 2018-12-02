import { PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> { // post验证pipe
  async transform(value, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);  // class-validator库验证参数
    if (errors.length > 0) {
      const message = errors.map(v =>
        Object.keys(v.constraints).reduce((pre, key) => {
          pre += `${v.constraints[key]} `;
          return pre;
        }, ''),
      ).join(' | ');
      throw new HttpException(message,  HttpStatus.BAD_REQUEST);
    }
    return value;
  }
  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type);
  }
}
