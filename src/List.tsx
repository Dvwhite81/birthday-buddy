import Person from './Person';
import { PersonType } from './utils/types';

interface ListProps {
  people: PersonType[];
}

const List = ({ people }: ListProps) => {
  return (
    <section>
      {people.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </section>
  );
};

export default List;
