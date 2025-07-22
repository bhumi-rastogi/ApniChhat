import React, { useState } from 'react';
import "../styles/Form.css"

const Form = () => {
  const [isLogin, setIsLogin] = useState(false); 

  return (
    <div className="form">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>

      <form>
        {!isLogin && (

            <div className='input'>
            <label for="name">Full Name</label>
            <input type="text" id="name" required/>
            </div>
        )}
            <div className='input'>
          <label for="email">Email</label>
          <input type="email" id="email" required/>
          </div>

          <div className='input'>
          <label for="password">Password</label>
          <input type="password" id="password" required/>
          </div>

        <button type="submit" className="submit">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account? "}
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </p>
      </p>
    </div>
  );
};

export default Form;
