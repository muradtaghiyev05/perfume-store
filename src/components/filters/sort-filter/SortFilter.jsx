
const SortFilter = ({ currentSort, searchParams, setSearchParams }) => {

  const handleSorting = (e) => {
    setSearchParams({
      ...Object.fromEntries([...searchParams]),
      sorting: e.target.value,
      page: 0
    });
  };

  return (
    <div className='sort-container'>
      <span>Filter:</span>
      <select value={currentSort} onChange={(e) => handleSorting(e)}>
        <option value='default'>Ən Yeni</option>
        <option value='up'>Ucuzdan-Bahaya</option>
        <option value='down'>Bahadan-Ucuza</option>
      </select>
    </div>
  )
}

export default SortFilter