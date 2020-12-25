import Head from 'next/head';
import Card from '../components/Card';

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
        <Card title="Sample Card">This is just a sample card with some text</Card>
      </main>
    </div>
  )
}
