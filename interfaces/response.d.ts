export interface Response<T> {
  success: boolean;
  data: T;
  errors: { [key: string]: string[] };
}
