import { z } from "zod";
import { publicProcedure, router } from "@/trpc/server";

const create = publicProcedure
  .input(
    z.object({
      message: z.string(),
    }),
  )
  .mutation(async (data) => {
    return `[with trpc]: ${data.input.message}`;
  });

export const message = router({
  create,
});
