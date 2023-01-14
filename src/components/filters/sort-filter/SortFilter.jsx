import { useEffect } from "react"

const SortFilter = ({ currentSort, setCurrentSort, setPageNumber }) => {

  useEffect(() => {
    setPageNumber(0);
  }, [currentSort])

  return (
      <div className='sort-container'>
        <span>Filter:</span>
        <select defaultValue='default' onChange={(e) => setCurrentSort(e.target.value)}>
            <option value='default'>Ən Yeni</option>
            <option value='up'>Ucuzdan-Bahaya</option>
            <option value='down'>Bahadan-Ucuza</option>
        </select>
      </div>
  )
}

export default SortFilter