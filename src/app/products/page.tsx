import Link from "next/link";
import styles from "./page.module.css";
import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";

/**
 * 3초마다 revalidate 요청
 */
// export const revalidate = 3;

export default async function ProductPage() {
  /**
   *  메모리에 있는 것이 아닌, 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 보여주기
   */
  const products = await getProducts();

  return (
    <>
      <ul className={styles.ul}>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
