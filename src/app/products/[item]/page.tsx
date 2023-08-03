import NotFoundPage from "@/app/products/not-found";
import { getProduct, getProducts } from "@/service/products";
import { redirect } from "next/navigation";

/**
 * 3초마다 revalidate 요청
 */
export const revalidate = 3;

type TItemPage = {
  params: {
    item: string;
  };
};
export default async function ProducttPage({ params: { item } }: TItemPage) {
  /**
   * 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 보여주기
   */
  const product = await getProduct(item);

  // 존재하지 않는 product를 입력했다면
  if (!product) {
    // NotFoundPage();
    redirect("/about");
  }

  return <div>{product?.name} Page!</div>;
}

export async function generateStaticParams() {
  /**
   * 모든 제품의 페이지들을 미리 만들어 둘 수 있도록 하기 (SSG) - 이건 아직 페이지들이 많지 않기 때문에 가능
   */
  const products = await getProducts();

  return products.map((product) => ({
    item: product.id,
  }));
}

export function generateMetadata({ params }: TItemPage) {
  return {
    title: `제품의 이름: ${params.item}`,
  };
}
