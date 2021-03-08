import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import store from '../redux/configueStore';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* redux provider */}
      <Provider store={store}>
        <Layout title={'PC builder'}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
