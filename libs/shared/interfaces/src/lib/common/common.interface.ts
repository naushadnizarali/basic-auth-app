export interface IObject {
  [key: string]: any;
}

export interface IActionResult {
  isSuccess: boolean;
  statusCode?: number;
  statusText?: string;
  data?: IObject[] | IObject | any;
  error?: string;
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
