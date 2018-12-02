import { Injectable, CanActivate, ExecutionContext, Request } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import * as jwt from 'jsonwebtoken';
import { jwtConfig } from '@config';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
      private readonly reflector: Reflector,
  ) { }
  canActivate(
      context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (roles) { // roles参数为空代表不需要权限验证
      const token = (req.headers.authorization as string).split(' ')[1];
      try {
        const decoded: any = jwt.verify(token, jwtConfig.secretOrKey);
        if (roles[0] < decoded.role) {
          return false;
        }
      } catch (err) {
        return false;
      }
      return true;
    }
    return true;
  }
}
