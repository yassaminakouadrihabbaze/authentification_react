

import Home from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import LoginPage from "./loginPage";
import Prediction from "./prediction";
import MyComponent from "./TestComponent";
import LogoutButton from "./Logout";

// const keycloakConfig = {
//   url: 'http://your-keycloak-server/auth',
//   realm: 'your-realm',
//   clientId: 'your-client-id',
// };

const App = () => {


  return (   
      <BrowserRouter>
      <LogoutButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Prediction" element={<Prediction />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path= "/testAuth" element={<MyComponent />} />
        </Routes>    
      </BrowserRouter>
   
  );
};

export default App;

// // export default App;
// //  import './App.css';
// // export default function App(){
// //   return(
// //     <div className="App">
// //       <h1>hiiii</h1>
// //       <h2>heloooooooooooo</h2>
// //     </div>
// //   );

// // }

// import React, { useState } from 'react';
// import axios from 'axios';
//  import './App.css';

// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [token, setToken] = useState('basset khoniiiiiizzzz');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleTokenButtonClick = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/get_token', {
//         params: {
//           username: username,
//           password: password
//         }
//       });
//       setToken(response.data.access_token);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className='App'>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={handleUsernameChange} />
//       </label>
//       <label>
//         Password:
//         <input type="password" value={password} onChange={handlePasswordChange} />
//       </label>
//       <button onClick={handleTokenButtonClick}>Get Token</button>
//       <p>{token}</p>
//     </div>
//   );
// }

// export default App;

// import axios from 'axios';
// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Input = styled.input`
//   margin: 10px;
//   padding: 5px;
//   width: 200px;
//   font-size: 16px;
// `;

// const Button = styled.button`
//   margin: 10px;
//   padding: 5px 10px;
//   font-size: 16px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const Prediction = styled.div`
//   margin: 10px;
//   font-size: 20px;
// `;

// function App() {
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [ap_hi, setAp_hi] = useState('');
//   const [ap_lo, setAp_lo] = useState('');
//   const [cholesterol, setCholesterol] = useState('');
//   const [gluc, setGluc] = useState('');
//   const [smoke, setSmoke] = useState('');
//   const [alco, setAlco] = useState('');
//   const [active, setActive] = useState('');
//   const [prediction, setPrediction] = useState('');

//   const handleButtonClick = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/predict', {
//         age,
//         gender,
//         height,
//         weight,
//         ap_hi,
//         ap_lo,
//         cholesterol,
//         gluc,
//         smoke,
//         alco,
//         active,
//       });

//       setPrediction(response.data.prediction);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Container>
//       <Input placeholder="Age" value={age} onChange={(event) => setAge(event.target.value)} />
//       <Input placeholder="Gender" value={gender} onChange={(event) => setGender(event.target.value)} />
//       <Input placeholder="Height" value={height} onChange={(event) => setHeight(event.target.value)} />
//       <Input placeholder="Weight" value={weight} onChange={(event) => setWeight(event.target.value)} />
//       <Input placeholder="ap_hi" value={ap_hi} onChange={(event) => setAp_hi(event.target.value)} />
//       <Input placeholder="ap_lo" value={ap_lo} onChange={(event) => setAp_lo(event.target.value)} />
//       <Input placeholder="Cholesterol" value={cholesterol} onChange={(event) => setCholesterol(event.target.value)} />
//       <Input placeholder="Gluc" value={gluc} onChange={(event) => setGluc(event.target.value)} />
//       <Input placeholder="Smoke" value={smoke} onChange={(event) => setSmoke(event.target.value)} />
//       <Input placeholder="Alco" value={alco} onChange={(event) => setAlco(event.target.value)} />
//       <Input placeholder="Active" value={active} onChange={(event) => setActive(event.target.value)} />
//       <Button onClick={handleButtonClick}>Predict</Button>
//       {prediction && <Prediction>Prediction: {prediction}</Prediction>}
//     </Container>
//   );
// }

// export default App;
