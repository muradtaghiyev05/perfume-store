const categoryNav = [
    {
        id: 1,
        name: 'bütün'
    },
    {
        id: 2,
        name: 'kişi'
    },
    {
        id: 3,
        name: 'qadın'
    },
    {
        id: 4,
        name: 'unisex'
    }
];

const CategoryFilter = ({ searchCategory, searchParams, setSearchParams }) => {

    const handleCategory = (e) => {
        setSearchParams({
            ...Object.fromEntries([...searchParams]),
            category: e.target.textContent,
            page: 0
        });
    };

    return (
    <div className="category-filter">
        {categoryNav.map((item) => (
            <span 
                onClick={(e) => handleCategory(e)} 
                key={item.id}
                className={`${item.name === searchCategory ? 'active-category category-item' : 'category-item'}`}
            >
                {item.name}
            </span>
        ))}
    </div>
  )
}

export default CategoryFilter