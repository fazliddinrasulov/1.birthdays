import Person from "./Person";
type PersonType = {
  id: number;
  name: string;
  age: number;
  image: string;
};

type Props = {
  people: PersonType[];
  clearPeople: () => void;
};

const List = ({ people, clearPeople }: Props) => {
  return (
    <section>
      {people.map((person: PersonType) => {
        return <Person key={person.id} {...person} />;
      })}
      <button onClick={clearPeople}> clear all</button>
    </section>
  );
};

export default List;
