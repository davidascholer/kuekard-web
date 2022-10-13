import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Background from '../components/ui/Background'


const Home: NextPage = () => {
  const router = useRouter();
  useEffect(()=>{
    router.replace("/SignIn");
  },[])

  return (
      <Background></Background>
  )
}

export default Home
