import { message } from "@/pages/message/actions";
import { router } from "@/trpc/server";

export const appRouter = router({
  message,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
