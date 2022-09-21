import { useState } from 'react'

const Person = ({person}) =>
{
  return (
    <ul>{person.name} {person.number}</ul>
    )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
      number: '0040'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event)=>
  {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event)=>
  {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event)=>
  {
    event.preventDefault()
    const duplicationName = persons.find((person)=> person.name===newName);
    const duplicationNo = persons.find((person)=> person.number===newNumber);
    if(duplicationName!==undefined) {
      window.alert(`${newName} is already added to phonebook`)
      return;
    }
    if(duplicationNo!==undefined) {
      window.alert(`${newNumber} is already added to phonebook`)
      return;
    }
    const newPerson = { name: newName, number: newNumber }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>

      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {persons.map((person)=><Person key={person.name} person={person}/>)}
      </div>

    </div>
  )
}

export default App