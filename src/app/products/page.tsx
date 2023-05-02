import Link from "next/link";

export default function ProductsPage() {
  const products = ["shirt", "pants", "skirt", "shoes"];
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map((product) => (
          <li key={product}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
