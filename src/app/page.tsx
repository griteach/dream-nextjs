import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import os from "os";
import Counter from "@/components/Count";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // notFound함수 호출하면 app 폴더에 있는 not-found.tsx가 호출된다.
  //이 함수를 호출해야만 not-found.tsx를 호출 그 외에는, next에 기본적으로 세팅된
  //notFound페이지가 나온다.
  // notFound();
  console.log("Hello - Server");
  console.log(os.hostname());
  return (
    <>
      <h1>homepage</h1>
      <Counter />
    </>
  );
}
