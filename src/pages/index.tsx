import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Background from '../components/ui/Background'

const Home: NextPage = () => {
  useEffect(()=>{
    useRouter().replace("/SignIn");
  },[])

  return (
      <Background></Background>
  )
}

export default Home
