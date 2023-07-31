import Link from "next/link";
import styles from "./layout.module.css";
import { Metadata } from "next";
import { Nanum_Gothic, Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "옷 판매 사이트 | 옷 전체 메뉴",
  description: "세련된 옷들을 확인하세요.",
  icons: {
    icon: "/favicon.ico",
  },
};
const sans = Open_Sans({ subsets: ["latin"] });

const gothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
});

interface IProductLayoutProps {
  children: React.ReactNode;
}

export default function ProductLayout({ children }: IProductLayoutProps) {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href={"products/women"} className={sans.className}>
          여성옷
        </Link>
        <Link href={"products/men"} className={gothic.className}>
          남성옷
        </Link>
      </nav>
      {/* 리액트 서스펜스로 감싸지는 부분 (로딩) */}
      {children}
    </div>
  );
}
