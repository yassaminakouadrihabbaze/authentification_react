import React, { useState, useEffect } from 'react';
import api from './Axios';

function MyComponent() {
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    // Make request to API
    api.get('/protectiied')
      .then(response => {
        setData(response.data);
        console.log("dataaaaaaaaaaa",response.data);
        const a =localStorage.getItem('accessToken');
        setName(response.data.user.name);
        setLastName(response.data.user.family_name);
        console.log('aaaaaaaaaaaaaaa',a);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
   return <div>{`${name},${data.message}`}</div>



//   return (
//     <div>
//       {data}
//     </div>
//   );
}

export default MyComponent;
