import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const allPersons = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [personsToShow, setPersonsToShow] = useState([]) 

  useEffect(()=>
  {
    axios
      .get('http://localhost:3001/persons')
      .then((response)=>
            {
              setPersons(response.data)
              setPersonsToShow(response.data)
            })
  }, []);
  return (
    <div>

      <h2>Phonebook</h2>
      <Filter 
          newFilter={newFilter} 
          persons={persons} 
          setNewFilter={setNewFilter} 
          setPersonsToShow={setPersonsToShow}
      />
      <PersonForm 
          newName={newName} 
          setNewName={setNewName}
          newNumber={newNumber} 
          setNewNumber={setNewNumber}
          persons={persons}
          setPersons={setPersons}
          setPersonsToShow={setPersonsToShow}   
          setNewFilter={setNewFilter}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>

    </div>
  )
}

export default App