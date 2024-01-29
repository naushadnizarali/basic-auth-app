/* eslint-disable @typescript-eslint/no-explicit-any */
import { IObject } from '../common/common.interface';

export type TApiResponse<T = unknown> = {
  isSuccess: boolean;
  message?: string;
  statusCode?: number;
  data?: T;
  stackTrace?: IObject[] | IObject | any | Record<string, string[]>;
};
