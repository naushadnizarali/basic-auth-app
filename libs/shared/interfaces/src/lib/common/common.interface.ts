/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IObject {
  [key: string]: any;
}

export interface IActionResult {
  isSuccess: boolean;
  message?: string;
  statusCode?: number;
  data?: IObject[] | IObject | any;
  errors?: IObject[] | IObject | any | Record<string, string[]>;
}

export interface IHeaders {
  headers: {
    Authorization?: string;
    'Content-type'?: string;
    Accept?: string;
    Cookie?: string;
  };
  params?: any;
}
