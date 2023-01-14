import { useEffect, useState } from "react";
import { perfumes } from "../../../perfumes/data";

const categoryNav = [
    {
        name: 'bütün'
    },
    {
        name: 'kişi'
    },
    {
        name: 'qadın'
    },
    {
        name: 'unisex'
    }
];

const CategoryFilter = ({ setFilteredPerfumes, setPageNumber }) => {

    const [head, setHead] = useState('bütün');
    const [active, setActive] = useState(0);
    
    const handleCategory = (e, index) => {
        setHead(e.target.textContent);
        setActive(index);
    };

    useEffect(() => {
        if (head === 'bütün') {
            setFilteredPerfumes(perfumes);
        }
        else {
            const newPerfumes = perfumes.filter((perfume) => {
                return perfume.category === head;
            });
            setFilteredPerfumes(newPerfumes);
        }
        setPageNumber(0);
    }, [head]);

    return (
    <div className="category-filter">
        {categoryNav.map((item, index) => (
            <span 
                onClick={(e) => handleCategory(e, index)} 
                key={index}
                className={`${active === index ? 'active-category category-item' : 'category-item'}`}
            >
                {item.name}
            </span>
        ))}
    </div>
  )
}

export default CategoryFilter