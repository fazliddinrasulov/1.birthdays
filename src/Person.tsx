type PersonType = {
  id: number;
  name: string;
  age: number;
  image: string;
};
const Person = ({ id, name, image, age }: PersonType) => {
  console.log(name);

  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default Person;
