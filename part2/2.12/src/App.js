import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(()=>
  {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((result)=>
            {
              setCountries(result.data)
              setCountriesToShow(result.data)
            })
  },[])

  const handleFilterOnChange = (event)=>
  {
    setFilter(event.target.value)
    const filteredCountries = countries.filter((country)=>country.name.official.toUpperCase().includes(event.target.value.toUpperCase()))
    setCountriesToShow(filteredCountries)
  }
  return (
    <>
      find countries <input value={filter} onChange={handleFilterOnChange}/>
      {countriesToShow.length <= 10 ? countriesToShow.map((country)=><ul>{country.name.official}</ul>) 
                                    : <p>Too many matches, specify another filter.</p>}
    </>
  )
}

export default App;
