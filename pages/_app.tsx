import type { AppProps } from 'next/app';
import "../style/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
