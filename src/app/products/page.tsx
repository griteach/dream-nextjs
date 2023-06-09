import { getProducts } from "@/api/products";
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";
import Link from "next/link";
import clothesImage from "../../../public/images/clothes.jpg";

export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지</h1>
      <Image src={clothesImage} alt="img" />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <MeowArticle />
      </div>
    </>
  );
}
