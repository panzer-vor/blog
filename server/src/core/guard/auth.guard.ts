import { Injectable, CanActivate, ExecutionContext, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as jwt from 'jsonwebtoken';
import { jwtConfig } from '@config';
import { ApiException } from '../exception/api.exception';
import { ApiErrorCode } from '../exception/api-error-codes';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
      private readonly reflector: Reflector,
  ) { }
  canActivate(
    context: ExecutionContext,
  ): boolean {
    const req = context.switchToHttp().getRequest();
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!req.headers.authorization) {
      throw new ApiException('用户未登入', ApiErrorCode.USER_NEED_LOGIN, HttpStatus.OK);
    }
    const token = (req.headers.authorization as string).split(' ')[1];
    try {
      const decoded: any = jwt.verify(token, jwtConfig.secretOrKey);
      if (roles && roles[0] < decoded.role) {
        throw new ApiException('用户权限不足', ApiErrorCode.USER_INSUFFICIENT_PERMISSIONS, HttpStatus.BAD_REQUEST);
      }
    } catch (err) {
      throw new ApiException('用户登入超时或登入证书无效', ApiErrorCode.USER_LOGIN_EXPIRE, HttpStatus.BAD_REQUEST);
    }
    return true;
  }
}
