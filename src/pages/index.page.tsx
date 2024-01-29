import Head from "next/head";
import Link from "next/link";

type Inputs = {
  message: string;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>
      <main>
        <h1>Hello world</h1>
        <div>
          <Link href="/message">message</Link>
        </div>
      </main>
    </>
  );
}
