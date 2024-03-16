import React, { useEffect, useState } from 'react';

function SelectCountry() {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const headers = new Headers();
    headers.append("X-CSCAPI-KEY", "T0RaazZ4SUhUQ3Z3U3BSdzNVU0M5bWhsMUNIdkZJNjBTd0VweXRJUQ==");

    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
                const result = await response.json();
                setCountries(result);
            } catch (error) {
                console.log('error', error);
            }
        };
        fetchCountries();
    }, []);


    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`, requestOptions);
                const result = await response.json();
                setStates(result);
            } catch (error) {
                console.log('error', error);
            }
        };
        if (selectedCountry !== '') {
            fetchStates();
        }
    }, [selectedCountry]);


    useEffect(() => {
        const fecthCities = async () => {
            try {
                let response = await fetch(`https://api.countrystatecity.in/v1/countries/IN/states/${selectedCity}/cities`, requestOptions)
                let result = await response.json();
                setCities(result);
            } catch (error) {
                console.log('error', error);
            }
        };
        if (selectedCity !== '') {
            fecthCities();
        }
    }, [selectedCity]);

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handleCitiesChange = (e) => {
        setSelectedCity(e.target.value);
    }

    return (
        <div className='container'>
            <select onChange={handleCountryChange}>
                <option>Select Country</option>
                {countries.map((country) => (
                    <option key={country.iso2} value={country.iso2}>{country.name}</option>
                ))}
            </select>

            <select onChange={handleCitiesChange}>
                <option>Select State</option>
                {states.map((state) => (
                    <option key={state.iso2} value={state.iso2}>{state.name}</option>
                ))}
            </select>

            <select>
                <option>Select City</option>
                {cities.map((city) => (
                    <option key={city.name} value={city.name}>{city.name}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectCountry;
