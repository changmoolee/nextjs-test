import Link from "next/link";

export default function ProductPage() {
  return (
    <nav>
      <Link href={"/product/shirts"}>shirts</Link>
      <Link href={"/product/pants"}>pants</Link>
      <Link href={"/product/skirt"}>skirt</Link>
      <Link href={"/product/shoes"}>shoes</Link>
    </nav>
  );
}
