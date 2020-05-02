import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
import { IProps, IEvent } from './../context/types';
import { AuthType } from './../context/enum';
import './Login.css';

const LoginPage: React.FC<IProps> = (props: IProps) => {
  console.log('LoginPage', props);
  const { state, dispatch } = useContext(AppContext);
  const [input, setInput] = useState({
    user: 'admin',
    password: 'admin',
  });

  useEffect(() => {
    console.log(state);
    // eslint-disable-next-line
  }, []);

  const handleInputChange = (e: IEvent) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  function handleLogin() {
    dispatch({
      type: AuthType.SIGN_IN,
      payload: {
        user: input.user,
        lastName: input.password,
      },
    });
    props.history.push('/home');
  }

  return (
    <React.Fragment>
      <MainNavigation />
      <main className="login-container">
        Login Page
        <hr />
        <div>
          User:
          <input
            type="text"
            name="user"
            value={input.user}
            onChange={handleInputChange}
          />
        </div>
        <div>
          Pwd:
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
          />
        </div>
        <hr></hr>
        <button onClick={handleLogin}>Sign in</button>
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
