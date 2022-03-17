/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react';
import './SearchBar.css';

function SearchBar(props) {

  const [term, setTerm] = useState('');

  const {onSearch} = props;

  function search() {
    onSearch(term);
  }

  function handleTermChange({ target }) {
    setTerm(target.value);
  }

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
      <button className="SearchButton" onClick={search}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
