import { z } from "zod";
import { publicProcedure } from "@/trpc/server";

export const message = publicProcedure
  .input(
    z.object({
      message: z.string(),
    }),
  )
  .mutation(async (data) => {
    return `[with trpc]: ${data.input.message}`;
  });
