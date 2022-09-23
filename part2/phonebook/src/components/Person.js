import personsService from "../services/persons";
const Person = ({
  person,
  persons,
  personsToShow,
  setPersons,
  setPersonsToShow,
}) => {
  return (
    <>
      <ul>
        {person.name} {person.number}
        <button
          onClick={() => {
            if (
              !window.confirm(`Are you sure you want to delete ${person.name}?`)
            )
              return;
            personsService.erase(person.id).then((result) => {
              console.log(result, person.name, person.id);
              const filter = persons.filter((pers) => pers.id !== person.id);
              setPersons(filter);
              const filterToShow = personsToShow.filter(
                (pers) => pers.id !== person.id
              );
              setPersonsToShow(filterToShow);
            });
          }}
        >
          delete
        </button>
      </ul>
    </>
  );
};

export default Person;
