
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../StateProvider/reducer';
import { useStateValue } from '../StateProvider/StateProvider';


const Login = () => {
  const [state , dispatch] = useStateValue();

  // console.log(state)
  
  const signIn = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        })
      })
      .catch((error) => {
        alert(error.message);
      })
  }
  return (
    <div className='login'>
      <div className='login__logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png' alt='mainLogo' />
        <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='secondaryLogo' />
      </div>

      <Button type='submit' onClick={signIn}> Sign In</Button>
    </div>
  )
}

export default Login
