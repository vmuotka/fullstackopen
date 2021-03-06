import React from 'react'

const LoginForm = props => {
  return (
    <>
      <h2>log in to application</h2>
      <form onSubmit={props.handleLogin}>
        <div>
          username:
          <input
            type='text'
            value={props.username}
            name='username'
            id='username'
            onChange={({ target }) => props.setUsername(target.value)}
          />
        </div>
        <div>
          password:
          <input
            type='password'
            value={props.password}
            name='username'
            id='password'
            onChange={({ target }) => props.setPassword(target.value)}
          />
        </div>
        <button id='login' type="submit">Login</button>
      </form>
    </>
  )
}

export default LoginForm