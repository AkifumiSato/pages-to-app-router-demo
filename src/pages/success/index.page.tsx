import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Success</title>
      </Head>
      <main>
        <h1>Post success</h1>
        <p>message: `{router.query.message ?? "[message is undefined]"}`</p>
        <Link href="/">top</Link>
      </main>
    </>
  );
}
