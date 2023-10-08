import './login.scss'
import { Link } from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import { useContext } from 'react'

const Login = () => {
  const {login}= useContext(AuthContext)
  const handleLogin=()=>{
    login()
  }

  return (
    <div className="login">
    <div className="card">
    <div className="left">
    <h1>Welcome </h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum 
    tempore assumenda? Iusto sint aspernatur, illo facere excepturi 
    nemo exercitationem fugiat, quod eaque ex alias, sunt dolores nam harum magni.</p>
    <span>Don't you have an account ?</span>
    <Link to="/register">
    <button>Register</button>
    </Link>
    </div>
    <div className="right">
    <h1>Login</h1>
    <form action="">
    <input type="text" name="" id="" placeholder='UserName'/>
    <input type="password" name="" id=""  placeholder='Password'/>
    <button onClick={handleLogin}>Login</button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Login