import { useState } from "react";
import style from './Search.module.css';
import { AiOutlineSearch } from "react-icons/ai";
import { Data } from '../../../Data';

function Search() {

  const [search, setSearch] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    const filteredDraw = Data.filter((draw) => {
      return draw.name.toLowerCase().includes(searchValue.toLowerCase());
    })
    setSearch(filteredDraw);
  }

  console.log(search);

  return (
    <>
    {Data ? <div className={style.container}>
      <div className={style.Search}>
        <form className={style.searchBar}>
          <input 
          type="text" 
          placeholder="Search"
          className={style.searchInput}
          onChange={handleSearch}
          />
          <AiOutlineSearch className={style.searchIcon} />
          <button className={style.btn}>Search</button>
        </form>
      </div>
    </div> :
    search}
    </>
  );
}

export default Search;