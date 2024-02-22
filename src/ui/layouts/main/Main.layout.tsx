// Components
import Header from './header/Header';
import Footer from './footer/Footer';

// Styles
import styles from './styles.module.css';

const MainLayout = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
