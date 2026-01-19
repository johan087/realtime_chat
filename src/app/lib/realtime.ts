import { redis } from "./redis";
import { Realtime } from "@upstash/realtime";
import z from "zod";

const schema = {
  chat: {
    message: z.object({
      id: z.string(),
      sender: z.string(),
      text: z.string(),
      timestamp: z.number(),
      roomId: z.string(),
      token: z.string().optional(),
    }),
    destroy: z.object({
      isDstroyed: z.literal(true),
    }),
  },
};

export const realtime = new Realtime({
  schema,
  redis,
});
