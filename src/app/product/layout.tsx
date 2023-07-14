import Link from "next/link";
import styles from "./layout.module.css";

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
