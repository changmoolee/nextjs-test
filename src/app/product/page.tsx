import Link from "next/link";
import styles from "./page.module.css";
import { getProducts } from "@/service/products";

/**
 * 3초마다 revalidate 요청
 */
// export const revalidate = 3;

export default async function ProductPage() {
  /**
   *  메모리에 있는 것이 아닌, 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 보여주기
   */
  const products = await getProducts();

  const res = await fetch("https://meowfacts.herokuapp.com", {
    next: { revalidate: 3 },
    // 0이면 SSR이 되어버림

    // cache : "force-cache" // SSG
    // cache :"no-store" // SSR
  });

  const data = await res.json();

  const factText = data.data[0];

  return (
    <>
      <ul className={styles.ul}>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </>
  );
}
