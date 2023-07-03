import React,{useState} from 'react'
import './global.css'

const Login = () => {
  const [user, setUser] = useState({
    email:'', password:''
  });

  const handleChange =(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
    console.log(user);
  };

  const sendData =async()=>{
    const {email, password} = user;
    const head ={
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    };
    const res = await fetch('/login', head);
    await res.json();
  }

  return (
    <div id="Form">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={handleChange}
    name="email"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"
    onChange={handleChange}
    name="password"/>
  </div>
  <button type="submit" class="btn btn-primary"
  onClick={sendData}>Submit</button>
</form>
    </div>
  )
}

export default Login
