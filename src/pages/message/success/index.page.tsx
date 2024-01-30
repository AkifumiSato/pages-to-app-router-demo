import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useId } from "react";

export default function Success() {
  const router = useRouter();
  const pageHeadingId = useId();

  return (
    <>
      <Head>
        <title>Success</title>
      </Head>
      <main>
        <h1>Post success</h1>
        <section aria-labelledby={pageHeadingId}>
          <h2 id={pageHeadingId}>message</h2>
          <p>`{router.query.message ?? "[message is undefined]"}`</p>
        </section>
        <Link href="/">top</Link>
      </main>
    </>
  );
}
