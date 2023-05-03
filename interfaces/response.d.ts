export interface Response<T> {
  success: boolean;
  data?: T;
  message: string;
  errors?: { [key: string]: string[] };
  token?: string;
}
