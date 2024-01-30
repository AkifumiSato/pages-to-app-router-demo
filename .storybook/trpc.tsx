import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";
import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "../src/pages/trpc-router";

export const trpc = createTRPCReact<AppRouter>();

export function TrpcProvider({ children }: { children: React.ReactElement }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    // @ts-ignore
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
        }),
      ],
    }),
  );

  return (
    // @ts-ignore
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      {/*// @ts-ignore*/}
    </trpc.Provider>
  );
}
