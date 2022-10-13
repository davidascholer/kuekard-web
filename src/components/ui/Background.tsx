import type { NextPage } from 'next'
import styles from '../../assets/styles/Background.module.scss'
import HeadComponent from '../meta/HeadComponent'
 
const Background: NextPage = () => {
  
  return (
    <div className={styles.body_container}>
        <HeadComponent/>
    </div>
  )
}

export default Background
