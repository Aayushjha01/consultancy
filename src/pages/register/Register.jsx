import './register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">
    <div className="card">
    <div className="left">
    <h1>Your Consultant</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum 
    tempore assumenda? Iusto sint aspernatur, illo facere excepturi 
    nemo exercitationem fugiat, quod eaque ex alias, sunt dolores nam harum magni.</p>
    <span>Do you have an account ?</span>
    <Link to="/login">
    <button>Login</button>
    </Link>
    </div>
    <div className="right">
    <h1>Register</h1>
    <form action="">
    <input type="text" name="" id="" placeholder='UserName'/>
    <input type="email" name="" id="" placeholder='Email' />
    <input type="password" name="" id=""  placeholder='Password'/>
    <label for="mySelect">Select your Role:</label>
    <select id="mySelect">
        <option value="apple">University</option>
        <option value="banana">College</option>
        <option value="cherry">Teacher</option>
        <option value="grape">Parents</option>
        <option value="orange">Student</option>
    </select>
    
    <button>Register</button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Register