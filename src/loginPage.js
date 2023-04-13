

import React, { useState } from 'react';
import axios from 'axios';
import {  Input, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';


function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const  [token, setToken] = useState('');
  
    async function handleButtonClick() {
        try {
            try {
                console.log('heloooooooo');
                const response = await axios.post('http://127.0.0.1:8000/get_token', {
                    username,
                    password,
                });
              
                console.log('heloooooooooo2',response.data.access_token);
                localStorage.clear();
                const isToken = localStorage.getItem('access_token');
                if(isToken){
                    localStorage.clear();
                    localStorage.setItem('access_token',response.data.access_token);
                    localStorage.setItem('refresh_token',response.data.refresh_token)
                    setToken(response.data.access_token);
                }else{         
                    localStorage.setItem('access_token',response.data.access_token);
                    localStorage.setItem('refresh_token',response.data.refresh_token);
                     setToken(response.data.access_token);
                }
              } catch (error) {
                console.log("errrrrrrrrror",error);
                console.error(error);
              }
            // await keycloakService.init();
            // console.log("hiiiiiiiiiiiiiiiiiiiiiiii");
            // // token = keycloakService.getToken();
            // console.log("Token", token);

            // localStorage.setItem('accessToken', token);
            // // Redirect to the home page
           
        } catch (error) {
            console.error(error);
            // Display an error message
        }
    }
   
  return (
    <div> 
        <Input placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        <Input placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <Button onClick={handleButtonClick}>login</Button>
        <div>{token}</div>
        <NavLink to="/testAuth">Redirect</NavLink>
    </div>
  );
}

export default LoginPage;