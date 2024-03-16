import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const headers = new Headers();
        headers.append("X-CSCAPI-KEY", "T0RaazZ4SUhUQ3Z3U3BSdzNVU0M5bWhsMUNIdkZJNjBTd0VweXRJUQ==");

        const requestOptions = {
          method: 'GET',
          headers: headers,
          redirect: 'follow'
        };

        const response = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
        const result = await response.json();
        setCountries(result);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchCountries();
  }, []); // Empty dependency array ensures useEffect runs only once

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const headers = new Headers();
        headers.append("X-CSCAPI-KEY", "T0RaazZ4SUhUQ3Z3U3BSdzNVU0M5bWhsMUNIdkZJNjBTd0VweXRJUQ==");

        const requestOptions = {
          method: 'GET',
          headers: headers,
          redirect: 'follow'
        };

        const response = await fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`, requestOptions);
        const result = await response.json();
        setStates(result);
      } catch (error) {
        console.log('error', error);
      }
    }

    if (selectedCountry !== '') {
      fetchStates();
    }
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="container">
      <select onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map(country => (
          <option key={country.iso2} value={country.iso2}>{country.name}</option>
        ))}
      </select>
      <select>
        <option value="">Select State</option>
        {states.map(state => (
          <option key={state.iso2} value={state.name}>{state.name}</option>
        ))}
      </select>
    </div>
  );
}

export default App;
