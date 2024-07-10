import { PersonType } from './utils/types';

interface HeaderProps {
  people: PersonType[];
}

const Header = ({ people }: HeaderProps) => {
  return <h3 className="title">{people.length} birthdays today</h3>;
};

export default Header;
