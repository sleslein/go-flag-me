import "../styles/tailwind.css";
import type { AppProps /*, AppContext */ } from 'next/app'
import Header from './Header'
import Footer from './Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className="container">
    <Header />
    <div className="p-5">
      <Component {...pageProps} /> 
    </div>
    <Footer />
  </div>)
}

export default MyApp
