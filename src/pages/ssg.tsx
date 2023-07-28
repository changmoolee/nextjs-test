import { Product, getProducts } from "@/service/products";
import Link from "next/link";

interface SSGProps {
  products: Product[];
}

export default function SSG({ products }: SSGProps) {
  return (
    <div>
      12버전에서의 SSG 구현
      <ul>
        제품들은 다음과 같다.
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/product/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * SSG
 */
export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    // revalidate: 10, -> ISR
  };
}
