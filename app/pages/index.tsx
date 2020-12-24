import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import Header from './Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Go Flag Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>        
        <p>Wecome to Go Flag Me!</p>
        <p>This will be the home page! Can' wait to see more</p>
      </main>
    </div>
  )
}
