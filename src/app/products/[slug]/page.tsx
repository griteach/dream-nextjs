import { getProduct, getProducts } from "@/api/products";
import { notFound } from "next/navigation";

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

export default function PantsPage({ params: { slug } }: Props) {
  const product = getProduct(slug);
  if (!product) {
    notFound();
  }
  return <h1>{product}설명페이지</h1>;
}

//dynamic route에서 미리 정해둔 페이지들을 만들어 두고 싶을 때 사용
//경로를 알려주면 됨
export function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    slug: product,
  }));
}
