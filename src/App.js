import React, { useState, useEffect } from 'react';
import axios from './axios';

const getData = async () => {
  return axios.get('', { 'Content-Type': 'application/json' }).then(({ data }) => {
    console.log(data);
    return JSON.stringify(data, null, 2);
  }).catch(err => console.error(err));
}

const App = () => {

  const [info, setInfo] = useState('');

  useEffect(() => {
    getData().then(data => {
      setInfo(data || 'Nothing found');
      console.log(data)
    });
  }, []);


  return (
    <div style={{ margin: '20em' }}>
      <button onClick={_ => getData()}>Click me</button>
      <pre>
        {info}
      </pre>
    </div>
  );
}

export default App;
