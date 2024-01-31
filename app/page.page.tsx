import Link from "next/link";

type Product = Record<string, unknown>;
export default async function PagePage() {
  const product: Product = await fetch("https://dummyjson.com/products/1").then(
    (res) => res.json(),
  );

  return (
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
  );
}
