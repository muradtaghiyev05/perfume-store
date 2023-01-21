
const SearchFilter = ({ searchText, searchParams, setSearchParams }) => {

  const handleSearch = (e) => {
    setSearchParams({
      ...Object.fromEntries([...searchParams]),
      title: e.target.value,
      page: 0
    })
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='İstədiyiniz modeli axtarın...'
        value={searchText}
        onChange={(e) => handleSearch(e)}
        className='search-input'
      />
    </div>
  )
}

export default SearchFilter