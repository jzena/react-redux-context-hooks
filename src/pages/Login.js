import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
import './Login.css';

const LoginPage = props => {
  console.log('LoginPage', props);
  const { state, dispatch } = useContext(AppContext);
  const [input, setInput] = useState({
    user: 'admin',
    password: 'admin'
  })
  const { shop } = state;

  useEffect(() => {
    console.log(state);
  }, []);

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  function handleLogin() {
    dispatch({
      type: 'SIGN_IN',
      user: {
        user: 'Jose',
        lastName: 'zena'
      }
    })
    props.history.push("/home");
  }

  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={ shop.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0) }
      />
      <main className="login-container">
        Login Page
        <hr />
        <div>User:
          <input type="text" name="user" value={ input.user } onChange={ handleInputChange } />
        </div>
        <div>Pwd:
          <input type="password" name="password" value={ input.password } onChange={ handleInputChange } />
        </div>
        <hr></hr>
        <button
          onClick={ handleLogin }
        >
          Sign in
        </button>
      </main>
    </React.Fragment>
  );
};

export default LoginPage;