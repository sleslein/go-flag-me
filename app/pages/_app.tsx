import "../styles/tailwind.css";
import type { AppProps /*, AppContext */ } from 'next/app'
import Header from './Header'
import Footer from './Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className="container">
    <Header />
    <Component {...pageProps} /> 
    <Footer />
  </div>)
}

export default MyApp
