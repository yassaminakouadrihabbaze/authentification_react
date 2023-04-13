import React from 'react';
import axios from 'axios';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/logout', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('refresh_token')}`,
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token')
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
