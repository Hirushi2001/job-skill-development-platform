import React from 'react'
import './Login.css';  // Import your CSS file

function Login() {
  return (
    <div className="login-container">
      <h2>Sign in to your account</h2>

      {/* Form */}
      <form>
        <div>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Password</label>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button
          type="submit"
        >
          Sign in
        </button>
      </form>

      <p>
        Don't have an account? <a href="#">Register</a>
      </p>
    </div>
  )
}

export default Login





