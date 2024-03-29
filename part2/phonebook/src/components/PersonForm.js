import personsService from "../services/persons";

const PersonForm = ({
  persons,
  setPersons,
  personsToShow,
  setPersonsToShow,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setNewFilter,
  setNotification,
  setError,
}) => {
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const notify = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };
  const notifyError = (message) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 5000);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const duplicationName = persons.find((person) => person.name === newName);
    const duplicationNo = persons.find((person) => person.number === newNumber);

    if (duplicationName !== undefined) {
      if (
        !window.confirm(
          `${newName} is already added to phonebook. Do you want to change the number?`
        )
      )
        return;
      personsService
        .update(duplicationName.id, { name: newName, number: newNumber })
        .then((response) => {
          const pers = persons.map((p) =>
            p.id !== duplicationName.id ? p : response
          );
          setPersons(pers);
          const persToShow = personsToShow.map((p) =>
            p.id !== duplicationName.id ? p : response
          );
          setPersonsToShow(persToShow);
          notify(`Updated ${response.name}`);
        })
        .catch((error) => {
          notifyError(
            `${duplicationName.name} was already deleted from server`
          );
          setPersons(persons.filter((n) => n.id !== duplicationName.id));
          setPersonsToShow(
            personsToShow.filter((n) => n.id !== duplicationName.id)
          );
        });
      return;
    }
    if (duplicationNo !== undefined) {
      notifyError(`${newNumber} is already added to phonebook`);
      return;
    }

    const newPerson = { name: newName, number: newNumber };
    personsService
      .create(newPerson)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setPersonsToShow(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setNewFilter("");
        notify(`Added ${returnedPerson.name}`);
      })
      .catch((error) => {
        notifyError(error.response.data.error);
      });
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      number: <input value={newNumber} onChange={handleNumberChange} />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
