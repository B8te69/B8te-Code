import React, { useState } from 'react';
import s from "./auth.module.css";

const Authorization: React.FC = () => {
    const [login, setLogin] = useState('');
    const setLoginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }
    return (
    <div className={s.Authorization}>
        <label htmlFor="loginInput">Войти на сайт:</label>
        <input 
          id='loginInput'
          className={s.Login}
          type="text"
          onChange={setLoginHandler}
          value={login}
        />
      </div>
    )
}

export default Authorization;