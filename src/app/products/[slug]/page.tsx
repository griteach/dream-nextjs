import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }
  return <h1>{params.slug}설명페이지</h1>;
}

//dynamic route에서 미리 정해둔 페이지들을 만들어 두고 싶을 때 사용
//경로를 알려주면 됨
export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
