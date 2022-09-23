import Person from "./Person";

const Persons = ({ persons, setPersons, personsToShow, setPersonsToShow }) => {
  return personsToShow.map((person) => (
    <Person
      key={person.name}
      person={person}
      persons={persons}
      personsToShow={personsToShow}
      setPersonsToShow={setPersonsToShow}
      setPersons={setPersons}
    />
  ));
};

export default Persons;
