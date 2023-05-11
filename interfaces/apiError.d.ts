export interface APIError {
  errors: { [key: string]: string[] };
  message: string;
}
