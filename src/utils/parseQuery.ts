import qs from 'query-string';
import { ZodObject } from 'zod';

export function parseQuery<T>(url: string, schema?: ZodObject<any>) {
  const result = qs.parse(new URL(url).search);

  if (schema) {
    const validationResult = schema.safeParse(result);
    if (!validationResult.success) {
      throw new Error(validationResult.error.message);
    }
  }

  return result as T;
}
