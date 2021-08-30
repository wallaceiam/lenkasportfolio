import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/froala_blocks.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
