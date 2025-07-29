import './SearchBox.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {

  };

  return (
    <div className="container">
    </div>
  );
};

export default SearchBox;
