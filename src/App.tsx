import { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./List";

type PersonType = {
  id: number;
  name: string;
  age: number;
  image: string;
};

function App() {
  const [people, setPeople] = useState<Array<PersonType>>(data);
  const clearPeople = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} clearPeople={clearPeople} />
      </section>
    </main>
  );
}

export default App;
