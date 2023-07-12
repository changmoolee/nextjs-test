type TItemPage = {
  params: {
    item: string;
  };
};
export default function ContactPage({ params }: TItemPage) {
  return <div>{params.item} Page!</div>;
}
