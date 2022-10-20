import type { NextPage } from 'next'
// Components
import HeadComponent from '../meta/HeadComponent'
// Styles
import styles from '../../assets/styles/background.module.scss'
 
type Props = {
  children: JSX.Element|JSX.Element[],
};

const Background: NextPage<Props> = ({children}:Props) => {
  
  return (
    <div className={styles.body_container}>
      test
        <HeadComponent/>
        {children}
    </div>
  )
}

export default Background
