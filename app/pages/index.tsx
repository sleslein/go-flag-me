import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import {Header} from './Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Go Flag Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <p>Wecome to Go Flag Me!</p>
      </main>

      <footer>
          Powered by Shea and Paul
      </footer>
    </div>
  )
}
