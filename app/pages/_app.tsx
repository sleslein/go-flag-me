import type { AppProps /*, AppContext */ } from 'next/app'
import Header from './Header'
import Footer from './Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Header />
    <Component {...pageProps} /> 
    <Footer />
  </>)
}

export default MyApp
