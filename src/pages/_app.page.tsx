import type { AppProps } from "next/app";
import { trpc } from "@/trpc/client";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default trpc.withTRPC(App);
