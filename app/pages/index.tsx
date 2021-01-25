import Head from 'next/head';
import Button from '../components/Button';
import Card from '../components/Card';
import Field from '../components/Field';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Old Glory Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>   
        <div className="bg-gray-900">
          <p className="text-5xl text-gray-200">The Next Scouting Fundraiser</p>
          <p className="text 2xl text-gray-400">A platform for those who value their local community</p>
        </div>   
        <div className="flex flex-row items-center bg-gray-600">
          <Field label="Email" />
          <Button>Start Your Fund Raiser</Button>
        </div>  
      </main>
    </div>
  )
}
