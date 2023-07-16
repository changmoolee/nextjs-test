import Link from "next/link";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "옷 판매 사이트 | 옷 전체 메뉴",
  description: "세련된 옷들을 확인하세요.",
  icons: {
    icon: "/favicon.ico",
  },
};

interface IProductLayoutProps {
  children: React.ReactNode;
}

export default function ProductLayout({ children }: IProductLayoutProps) {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href={"products/women"}>여성옷</Link>
        <Link href={"products/men"}>남성옷</Link>
      </nav>
      {children}
    </div>
  );
}
