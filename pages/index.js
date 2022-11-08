import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import ViewportConditional from '../Components/ViewportConditional/ViewportConditional'



const Home = ({cakes, sweetCakes, saltyCakes}) => {
  return (
    <>
    <Head>
      <title>FLYING CAKE</title>
      <meta name="description" content="EAT MORE CAKE" />
      <link rel="icon" href="/favicon.svg" />
    </Head>

    <main className={styles.main}>
    <ViewportConditional sweetCakes={sweetCakes} saltyCakes={saltyCakes}/>
    </main>

  
  </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/products?pagination[page]=1&pagination[pageSize]=50')
  const products = await res.json()
  const cakes = products.data
  const sweetCakes = cakes.filter(cake => cake.attributes.sweetnotsalty)
  const saltyCakes = cakes.filter(cake => cake.attributes.sweetnotsalty === false)
  
  return {
    props: {
      cakes: cakes,
      sweetCakes: sweetCakes,
      saltyCakes: saltyCakes
    }
  }
}

export default Home
