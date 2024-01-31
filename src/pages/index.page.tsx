import Head from "next/head";
import Link from "next/link";
import { GetServerSideProps } from "next";

type Product = Record<string, unknown>;

type Props = {
  product: Product;
};

export default function Home({ product }: Props) {
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
        <h2>JSON data</h2>
        <pre>
          <code>{JSON.stringify(product, null, 2)}</code>
        </pre>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const product: Product = await fetch("https://dummyjson.com/products/1").then(
    (res) => res.json(),
  );
  return {
    props: {
      product,
    },
  };
};
