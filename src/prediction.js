import axios from 'axios';
import React, { useState } from 'react';

import { Container, Input, Button } from 'reactstrap';


function Prediction () {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [ap_hi, setAp_hi] = useState('');
    const [ap_lo, setAp_lo] = useState('');
    const [cholesterol, setCholesterol] = useState('');
    const [gluc, setGluc] = useState('');
    const [smoke, setSmoke] = useState('');
    const [alco, setAlco] = useState('');
    const [active, setActive] = useState('');
    const [prediction, setPrediction] = useState('');
  
    const handleButtonClick = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/predict', {
          age,
          gender,
          height,
          weight,
          ap_hi,
          ap_lo,
          cholesterol,
          gluc,
          smoke,
          alco,
          active,
        });
  
        setPrediction(response.data.prediction);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <Container>
        <Input placeholder="Age" value={age} onChange={(event) => setAge(event.target.value)} />
        <Input placeholder="Gender" value={gender} onChange={(event) => setGender(event.target.value)} />
        <Input placeholder="Height" value={height} onChange={(event) => setHeight(event.target.value)} />
        <Input placeholder="Weight" value={weight} onChange={(event) => setWeight(event.target.value)} />
        <Input placeholder="ap_hi" value={ap_hi} onChange={(event) => setAp_hi(event.target.value)} />
        <Input placeholder="ap_lo" value={ap_lo} onChange={(event) => setAp_lo(event.target.value)} />
        <Input placeholder="Cholesterol" value={cholesterol} onChange={(event) => setCholesterol(event.target.value)} />
        <Input placeholder="Gluc" value={gluc} onChange={(event) => setGluc(event.target.value)} />
        <Input placeholder="Smoke" value={smoke} onChange={(event) => setSmoke(event.target.value)} />
        <Input placeholder="Alco" value={alco} onChange={(event) => setAlco(event.target.value)} />
        <Input placeholder="Active" value={active} onChange={(event) => setActive(event.target.value)} />
        <Button onClick={handleButtonClick}>Predict</Button>
        {prediction && <Prediction>Prediction: {prediction}</Prediction>}
      </Container>
    );
  }
  
  export default Prediction;