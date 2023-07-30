import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
};

/**
 * 제품 리스트를 반환하는 함수
 */
export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "data", "products.json");

  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
}

/**
 * 제품 id를 인자로 받아 제품 데이터(객체)를 반환하는 함수 (없을 경우 undefined 반환)
 */
export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();

  return products.find((item) => item.id === id);
}
