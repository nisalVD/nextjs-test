import { getProducts } from "@/lib/api";

export const getStaticProps = async () => {
  const products = await getProducts(6);
  return { props: { products } };
};

export default function Home() {
  return <div>Hello world</div>;
}
