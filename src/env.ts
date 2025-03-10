import { z } from 'zod';

const envSchema = z.object({
  /** Available to both client and server */
  public: z.object({
    odin: z.object({
      apiUrl: z.string().min(1),
    }),
  }),
  /** Available to server only. Should never be exposed to client. */
  secret: z.object({
    databaseUrl: z.string().min(1),
    payload: z.object({
      secret: z.string().min(1),
    }),
    odin: z.object({
      apiKey: z.string().min(1),
    }),
  }),
});

const envObj = {
  public: {
    odin: {
      apiUrl: process.env.ODIN_API_URL!,
    },
  },
  secret: {
    databaseUrl: process.env.DATABASE_URL!,
    payload: {
      secret: process.env.PAYLOAD_SECRET!,
    },
    odin: {
      apiKey: process.env.ODIN_API_KEY!,
    },
  },
} satisfies z.infer<typeof envSchema>;

export const env = envSchema.parse(envObj);
