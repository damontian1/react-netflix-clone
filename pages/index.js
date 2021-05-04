import Head from 'next/head'
import MobileView from '../components/MobileView';
import DesktopView from '../components/DesktopView';

export default function Home() {

  return (
    <div className="bg-black h-full w-full">
      <Head>
        <title>Netflix Clone | By Damon Tian</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Head>
      <div className="block sm:hidden">
        <MobileView />
      </div>
      <div className="hidden sm:block">
        <DesktopView />
      </div>
    </div>
  )
}
