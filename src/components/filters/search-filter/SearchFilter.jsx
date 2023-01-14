import { useEffect } from "react";

const SearchFilter = ({ searchText, setSearchText, setPageNumber }) => {

  useEffect(() => {
    setPageNumber(0);
  }, [searchText])

  return (
    <div className='search-container'>
        <input
            type='text'
            placeholder='İstədiyiniz modeli axtarın...'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className='search-input'
        />
    </div>
  )
}

export default SearchFilter