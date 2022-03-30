import Head from 'next/head'
import LinearGradient from "../components/linear-background"

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js and tailwindcss boilerplate!</title>
      </Head>
      <LinearGradient option={1} width="100vw" height="100vh">
        <div className='text-center space-y-8'>
          <h1 className='text-9xl text-white'>Boilerplate</h1>
          <h2 className='text-6xl  bg-clip-text text-transparent bg-gradient-to-bl from-sky-300 to-blue-200'>Next.js + Tailwindcss</h2>
        </div>
      </LinearGradient>
    </>
  )
}
