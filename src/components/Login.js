import React from 'react'

function Login() {
  return (
    <div class='login'>
        <form class=''>
            <h3>Log In:</h3>
            <input type="text" placeholder='User'></input> <br />
            <input type='password' placeholder='Password'></input> <br /> 
            <input type='submit' placeholder='Login' value={"Log In"}></input>
        </form>
    </div>
  )
}

export default Login