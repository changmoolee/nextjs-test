type TItemPage = {
  params: {
    item: string;
  };
};
export default function ContactPage({ params }: TItemPage) {
  return <div>{params.item} Page!</div>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    item: product,
  }));
}
