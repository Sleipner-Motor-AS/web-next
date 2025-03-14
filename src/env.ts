import { z } from 'zod';

const envSchema = z.object({
  /** Available to both client and server */
  public: z.object({
    url: z.string().min(1),
    odin: z.object({
      apiUrl: z.string().min(1),
    }),
  }),
  /** Available to server only. Should never be exposed to client. */
  secret: z.object({
    databaseUrl: z.string().min(1),
    payload: z.object({
      secret: z.string().min(1),
      previewSecret: z.string().min(1),
    }),
    odin: z.object({
      apiKey: z.string().min(1),
    }),
  }),
});

const envObj = {
  public: {
    url: process.env.NEXT_PUBLIC_URL!,
    odin: {
      apiUrl: process.env.NEXT_PUBLIC_ODIN_API_URL!,
    },
  },
  secret: {
    databaseUrl: process.env.DATABASE_URL ?? 'secret',
    payload: {
      secret: process.env.PAYLOAD_SECRET ?? 'secret',
      previewSecret: process.env.PAYLOAD_PREVIEW_SECRET ?? 'secret',
    },
    odin: {
      apiKey: process.env.ODIN_API_KEY ?? 'secret',
    },
  },
} satisfies z.infer<typeof envSchema>;

export const env = envSchema.parse(envObj);
