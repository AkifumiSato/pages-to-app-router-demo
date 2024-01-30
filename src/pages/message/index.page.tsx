import Head from "next/head";
import { MessageForm } from "@/pages/message/_components/message-form";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>
      <main>
        <h1>Hello world</h1>
        <MessageForm />
      </main>
    </>
  );
}
