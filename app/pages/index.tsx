import Head from 'next/head';
import Button from '../components/Button';
import Field from '../components/Field';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Old Glory Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">   
        <div className="bg-gray-900 p-10">
          <p className="text-5xl text-gray-200 text-center py-4s">The Next Scouting Fundraiser</p>
          <p className="text 2xl text-gray-400 text-center py-4">A platform for those who value their local community</p>
        </div>   
        <div className="bg-gray-600 py-5 flex justify-center">
          <input type="text" className="text-white border border-grey-100 rounded-md bg-transparent px-5" placeholder="Your Email" />
          <Button className="mx-5">Start Your Fund Raiser</Button>
        </div>  
        <div className="bg-gray-100 p-16 flex">
          <div id="grey-circle" className=" bg-gray-700 w-80 h-80 rounded-full" />
          <div className="pl-16 my-auto"> 
            <p className="text-2xl w-72">We live at the corner of community service and fundraising</p>
            <div id="bar" className="bg-gray-400 h-1.5 w-36 my-5"/>
            <p className="text-xl  w-72">Old Glory Inc. is a non-profit platform that gives power back to the local community.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
