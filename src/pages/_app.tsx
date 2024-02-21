// Types
import { AppPropsWithLayout } from './types/page-with-layout';

// Styles
import '@/ui/styles/index.css';

const App = ({ Component, pageProps }: AppPropsWithLayout): React.ReactNode => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default App;
