import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function Ex() {
    const [dataAdwantages, setDataAdwantages] = useState([])
    axios.post('https://fancy-mittens-ray.cyclic.app/api/advantages', user)
    .then(response => {
      console.log(response.data);
      setDataAdwantages(response.data)
    })
    .catch(error => {
      alert('we got one error error is:-',error)
    });
  return (
    <div>
      
    </div>
  )
}

export default Ex
