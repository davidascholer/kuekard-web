import type { NextPage } from 'next'
import MediaButtonList from '../features/authentication/components/MediaLoginButtonList'
import FormBody from '../components/form/FormBody'

const SignIn: NextPage = () => {
    return (
        <div>Sign In
          <FormBody/>
        <MediaButtonList/>
        </div>
      )
    }
    
    export default SignIn