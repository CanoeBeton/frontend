import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../src/ui/bigComponents/Header/Header'
import Accueil from '../src/ui/bigComponents/Accueil/Accueil'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Canoë de Béton Ulaval</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header current={'home'} />
        <Accueil />
      </main>
    </>
  )
}
