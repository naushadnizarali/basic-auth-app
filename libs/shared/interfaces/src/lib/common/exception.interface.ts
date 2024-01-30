import { IObject } from './common.interface';

export interface IException {
  statusCode: number;
  message: string;
  timestamp: string;
  path: string;
  stackTrace: IObject;
}
