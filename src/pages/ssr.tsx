import MeowArticle from "@/components/MeowArticle";
import { Product, getProducts } from "@/service/products";
import Link from "next/link";

interface SSRProps {
  products: Product[];
}

export default function SSR({ products }: SSRProps) {
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
      <MeowArticle />
    </div>
  );
}

/**
 * SSR
 */
export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}
