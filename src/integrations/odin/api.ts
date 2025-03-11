import { ZodError, ZodSchema } from 'zod';

import { env } from '@/env';

type RequestOptions = Omit<NonNullable<Parameters<typeof fetch>[1]>, 'method'>;

export const api = {
  get: async <TResponse>(endpoint: string, responseSchema: ZodSchema<TResponse>, options?: RequestOptions) => {
    const url = getUrl(endpoint);
    const opts = getOptions(options);

    const response = await fetch(url, opts);

    if (!response.ok) {
      throw createResponseError({ url, options: opts }, response);
    }

    let json: TResponse;

    try {
      json = await response.json();
    } catch (_) {
      throw createJsonError({ url, options: opts }, response);
    }

    const parsed = await responseSchema.safeParseAsync(json);

    if (!parsed.success) {
      throw await createSchemaError({ url, options: opts }, response, json, parsed.error);
    }

    return parsed.data;
  },
};

function createResponseError(request: { url: string; options: RequestInit }, response: Response) {
  const error = new Error('<ODIN_RESPONSE_ERROR> ', {
    cause: {
      request,
      response,
    },
  });

  console.dir(error, { depth: 4 });

  return error;
}

function createJsonError(request: { url: string; options: RequestInit }, response: Response) {
  const error = new Error('<ODIN_JSON_ERROR> ', {
    cause: {
      request,
      response,
    },
  });

  console.dir(error, { depth: 4 });

  return error;
}

async function createSchemaError(
  request: { url: string; options: RequestInit },
  response: Response,
  json: unknown,
  zodError: ZodError,
) {
  const error = new Error('<ODIN_SCHEMA_ERROR> ', {
    cause: {
      request,
      response,
      parsedJson: json,
      schemaError: zodError,
    },
  });

  console.dir(error, { depth: 5 });

  return error;
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
