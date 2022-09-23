import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [personsToShow, setPersonsToShow] = useState([]);

  useEffect(() => {
    personsService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
        setPersonsToShow(initialPersons);
      })
      .catch((error) => {
        alert(`the initial list of persons couldn't be loaded`);
      });
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
        personsToShow={personsToShow}
        setPersonsToShow={setPersonsToShow}
        setNewFilter={setNewFilter}
      />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        setPersons={setPersons}
        personsToShow={personsToShow}
        setPersonsToShow={setPersonsToShow}
      />
    </div>
  );
};

export default App;
