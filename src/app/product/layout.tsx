import styles from "./layout.module.css";

interface IProductLayoutProps {
  children: React.ReactNode;
}

export default function ProductLayout({ children }: IProductLayoutProps) {
  return (
    <div>
      <nav className={styles.nav}>
        <button>여성옷</button>
        <button>남성옷</button>
      </nav>
      {children}
    </div>
  );
}
