import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Background from '../components/ui/Background'

const Home: NextPage = () => {
  useRouter().replace("/SignIn");

  return (
      <Background></Background>
  )
}

export default Home
