import Head from 'next/head'
import CenterScreen from '../components/CenterScreen'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <CenterScreen />
      </main>

      {/* Player */}
    </div>
  )
}

export default Home
