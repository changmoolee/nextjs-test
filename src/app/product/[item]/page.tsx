import NotFoundPage from "@/app/product/not-found";
import { getProduct, getProducts } from "@/service/products";

type TItemPage = {
  params: {
    item: string;
  };
};
export default function ContactPage({ params: { item } }: TItemPage) {
  const product = getProduct(item);

  if (!product) {
    NotFoundPage();
  }

  /**
   * 지금은 params를 읽어서 데이터 바인딩을 하고 있지만,
   * TODO: 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줄 것임
   */
  return <div>{item} Page!</div>;
}

export function generateStaticParams() {
  /**
   * cf) 메모리에 저장된 데이터
   * TODO: 모든 제품의 페이지들을 미리 만들어 둘 수 있도록 하기 (SSG) - 이건 아직 페이지들이 많지 않기 때문에 가능
   */
  const products = getProducts();

  return products.map((product) => ({
    item: product,
  }));
}

export function generateMetadata({ params }: TItemPage) {
  return {
    title: `제품의 이름: ${params.item}`,
  };
}
