import { IPayload } from './payload.interface';

export interface ISession extends IPayload {
  accessToken: string;
  expireTime?: Date;
  permissions?: string[];
  rolePermission?: string[];
}
