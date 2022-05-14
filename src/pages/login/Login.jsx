import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import wallet from '../../images/wallet.jpg';

function Login () {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true)


 const handleDisabled = () => {
    const regexEmail = /(.*)@(.*).com/;
    const passwordMinLength = 6;

    if (regexEmail.test(email) && password.length   >= passwordMinLength) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  const handleSubmitLogin = () => {
    const loginObj = {
        email: email,
        password: password,
    }

    console.log('LOGIN', loginObj);
  }

  console.log(email)
  console.log(password)
  console.log(disabled)
  


    return (
      <div className='login-page'
      >
        <div className='login-box'>
          <TextField size="small" 
          variant="outlined" 
          style={{ marginBottom: 20 }} 
          label="Email" 
          value={ email }
          onChange={ (event) => {setEmail(event.target.value); handleDisabled()} }
          />

          <TextField size="small" 
          variant="outlined" 
          style={{ marginBottom: 20 }} 
          label="Senha" 
          value={ password }
          onChange={ (event) => {setPassword(event.target.value); handleDisabled()} }
          />

        <Link
          style={{textDecoration: 'none'}}
          to="/add"
        >
         <Button variant="Entrar"
            disabled={ disabled }
            onClick={ () => handleSubmitLogin() }
            >Entrar</Button>
        </Link>
        </div>
        <div className="login-side">
          <img src={wallet} alt="img-wallet"></img>
        </div>
      </div>
    );
  }




export default Login;
