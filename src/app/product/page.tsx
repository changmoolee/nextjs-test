import Link from "next/link";
import styles from "./page.module.css";

/**
 * cf) 메모리에 저장된 데이터
 */
const products = ["shirt", "pant", "skirt", "shoes"];
export default function ProductPage() {
  /**
   * TODO: 메모리에 있는 것이 아닌, 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줄 것임
   *
   */

  return (
    <ul className={styles.ul}>
      {products.map((product, index) => (
        <li key={index}>
          <Link href={`/product/${product}`}>{product}</Link>
        </li>
      ))}
    </ul>
  );
}
