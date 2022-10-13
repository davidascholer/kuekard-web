import type { NextPage } from 'next'
import Head from 'next/head'
import favicon from '../../assets/images/favicon/kurkard_icon_128_128_alt.png';

const HeadComponent: NextPage = () => {
  
  return (
      <Head>
        <title>Kuekard</title>
        <meta name="Kuekard" content="Create your own flashcards" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        </Head>
  )
}

export default HeadComponent
