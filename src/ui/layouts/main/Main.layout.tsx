// Components
import Header from './header/Header';
import Footer from './footer/Footer';

const MainLayout = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
