// Core
import type { AppProps } from 'next/app';

// Styles
import '@/ui/styles/index.css';

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return <Component {...pageProps} />;
};

export default App;
