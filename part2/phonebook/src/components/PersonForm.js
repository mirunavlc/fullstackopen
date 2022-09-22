const PersonForm = ({persons, setPersons, setPersonsToShow, newName, setNewName,newNumber, setNewNumber, setNewFilter}) =>
{
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
      setPersonsToShow(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
      setNewFilter('')
    }

    return(
    <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm;