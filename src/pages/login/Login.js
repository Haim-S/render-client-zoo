import React, {useState} from 'react'
import LoginUp from '../../components/login/LoginUp'
import Register from '../../components/login/Register';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);


  return (
    <>
    {isLogin ?
    <LoginUp setIsLogin={setIsLogin}/>
    :
   <Register setIsLogin={setIsLogin}/>
  }
    </>
  )
}

export default Login