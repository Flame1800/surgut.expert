import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Auth Demo</title>
      </Head>

      <nav className="authNew">
        <button>Sign In</button>
        <button>Sign Out</button> 
      </nav>      
    </>
  )
}