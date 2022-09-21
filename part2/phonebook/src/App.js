import { useState } from 'react'

const Person = ({person}) =>
{
  return (
    <ul>{person.name}</ul>
    )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handlePersonChange = (event)=>
  {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event)=>
  {
    event.preventDefault()
    const newPerson = { name: newName }
    console.log(newPerson, persons);
    setPersons(persons.concat(newPerson))
    setNewName('')
    
  }

  return (
    <div>

      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
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