export enum ApiErrorCode {
  TIMEOUT = -1, // 系统繁忙
  SUCCESS = 0, // 成功

  USER_NEED_LOGIN = 1001, // 用户未登入
  USER_LOGIN_EXPIRE = 1002, // 用户登入过期
  USER_INSUFFICIENT_PERMISSIONS = 1003, // 用户权限不足
}