import Link from "next/link";
import styles from "./page.module.css";
import { getProducts } from "@/service/products";

export default async function ProductPage() {
  /**
   * TODO: 메모리에 있는 것이 아닌, 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줄 것임
   *
   */
  const products = await getProducts();

  return (
    <ul className={styles.ul}>
      {products.map((product, index) => (
        <li key={index}>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}
