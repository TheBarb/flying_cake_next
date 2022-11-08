import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>FLYING CAKE</title>
        <meta name="description" content="EAT MORE CAKE" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
       <div>EAT MORE CAKE</div>
      </main>

    
    </>
  )
}
