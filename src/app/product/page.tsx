import Link from "next/link";
import styles from "./page.module.css";

export default function ProductPage() {
  const products = ["shirt", "pant", "skirt", "shoes"];

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
