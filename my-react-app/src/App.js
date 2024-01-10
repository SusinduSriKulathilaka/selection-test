import axios, { isCancel, AxiosError } from 'axios';
import { useEffect } from 'react';

import './App.css';

function App() {

  const options = {
    method: 'GET',
    url: 'https://taobao-api.p.rapidapi.com/api',
    params: {api: 'item_search', page_size: '40', q: 'shoes'},
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'taobao-api.p.rapidapi.com'
    }
  };

  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get('https://taobao-api.p.rapidapi.com/api', params: {api: 'item_search', page_size: '40', q: 'shoes'},
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'taobao-api.p.rapidapi.com'
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className="App">

      frcdddddd

    </div>
  );
}

export default App;
