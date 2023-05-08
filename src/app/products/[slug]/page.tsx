import { getProduct, getProducts } from "@/api/products";
import { notFound } from "next/navigation";

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  return (
    <>
      <h1>{product.name}설명페이지</h1>
      <p>가격: {product.price}</p>
    </>
  );
}

//dynamic route에서 미리 정해둔 페이지들을 만들어 두고 싶을 때 사용
//경로를 알려주면 됨
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
