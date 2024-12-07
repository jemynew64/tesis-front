import { Link } from 'react-router-dom';
import { FaArrowLeft  } from 'react-icons/fa';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="sticky top-0 bg-white p-4 flex items-center justify-between border-b">
      <Link to="/aprender">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <FaArrowLeft  className="h-5 w-5" />
        </button>
      </Link>
      <h1 className="font-bold text-lg">{title}</h1>
      <div />
    </div>
  );
};

export default Header;
