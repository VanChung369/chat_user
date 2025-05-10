export interface QueryParams {
  [key: string]: string | number | boolean | undefined;
}

export interface RequestBody {
  [key: string]: unknown;
}

export interface RequestConfig {
  params?: QueryParams;
  headers?: Record<string, string>;
  timeout?: number;
}
