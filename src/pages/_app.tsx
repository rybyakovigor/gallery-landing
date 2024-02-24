// Core
import { useEffect } from 'react';

// Types
import { AppPropsWithLayout } from '@/ui/types/page-with-layout';

// Styles
import '@/ui/styles/index.css';

const App = ({ Component, pageProps }: AppPropsWithLayout): React.ReactNode => {
  // Hide link outline when navigate
  useEffect(() => {
    const handleClick = (event: MouseEvent): void => {
      const target = event.currentTarget as HTMLAnchorElement;
      target.blur();
    };

    const links = document.querySelectorAll('a');
    links.forEach((link: HTMLAnchorElement) => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default App;
