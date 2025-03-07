import { ZodError, ZodSchema } from 'zod';

import { env } from '@/env';

type RequestOptions = Omit<NonNullable<Parameters<typeof fetch>[1]>, 'method'>;

export const api = {
  get: async <TResponse>(endpoint: string, responseSchema: ZodSchema<TResponse>, options?: RequestOptions) => {
    const response = await fetch(getUrl(endpoint), getOptions(options));

    if (!response.ok) {
      throw createResponseError(response);
    }

    let json: TResponse;

    try {
      json = await response.json();
    } catch (_) {
      throw createJsonError(response);
    }

    const parsed = await responseSchema.safeParseAsync(json);

    if (!parsed.success) {
      throw createSchemaError(response, parsed.error);
    }

    return parsed.data;
  },
};

function createResponseError(response: Response) {
  return new Error('<ODIN_RESPONSE_ERROR> ', {
    cause: {
      response: response,
    },
  });
}

function createJsonError(response: Response) {
  return new Error('<ODIN_JSON_ERROR> ', { cause: response });
}

function createSchemaError(response: Response, error: ZodError) {
  return new Error('<ODIN_SCHEMA_ERROR> ', {
    cause: {
      response: response,
      schemaError: error,
    },
  });
}

function getUrl(endpoint: string) {
  return env.public.odin.apiUrl + endpoint;
}

function getOptions(options?: RequestOptions) {
  return {
    headers: {
      Authorization: `Token ${env.secret.odin.apiKey}`,
      'Cache-Control': 'no-cache',
      ...options?.headers,
    },
    ...options,
  };
}
