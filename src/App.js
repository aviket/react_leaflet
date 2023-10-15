import React, { useState } from 'react';
import MyMap from './components/MyMap'
import './App.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import indiaCities from './data/Cities';



function App() {
  // const pos = [12.9716, 77.5946]
  const defaultProps = {
    options: indiaCities,
    getOptionLabel: (option) => option.name,
  };
  const [value, setValue] = useState("Mumbai");
  const [inputValue, setInputValue] = useState('');
  const [pos, setPos] = useState([12.9716, 77.5946]);
  const zoomToCity = (cityName) => {
    setPos(getLatLon(cityName))
    console.log(cityName);
    setValue(cityName);
  }

  const getLatLon = (cityName) => {
    const city = indiaCities.find(city => city.name === cityName);
    if (city) {
      return [city.lat, city.lon];
    } else {
      return null; // Return null if the city name is not found in the data.
    }
  }
  return (
    <>
      <div className="container">
        <MyMap pos={pos} />
        <div className="SSearch" >
          <Autocomplete
            {...defaultProps}
            id="auto-complete"
            autoComplete
            includeInputInList
            className='acomplete'
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              console.log(newInputValue);
              setInputValue(newInputValue);
            }}
            onChange={(e, newValue) => {
              if (newValue) {
              zoomToCity(newValue["name"]);
              }
            }}
            renderInput={(params) => (
              <TextField {...params} label="autoComplete" variant="standard" />
            )}
          />
          {pos}
        </div>
      </div>
    </>
  );
}

export default App;
