const Filter = ({persons, newFilter, setNewFilter, setPersonsToShow}) =>
{
    const handleFilterChange = (event) =>
    {
      console.log(event.target.value)
      setNewFilter(event.target.value)
      if(event.target.value !== "")
      {
        const filteredPersons = persons.filter((person)=> person.name.toUpperCase().includes(event.target.value.toUpperCase()))
        setPersonsToShow(filteredPersons)
      }
      else setPersonsToShow(persons)
    }
    return(
        <>
          filter shown with:  <input value={newFilter} onChange={handleFilterChange}/>
        </>
    )
}

export default Filter