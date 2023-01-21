import { useEffect, useState } from 'react';
import { Toaster } from "react-hot-toast";
import { useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import 'react-lazy-load-image-component/src/effects/blur.css'
import ProductCard from '../product-card/ProductCard';
import CategoryFilter from '../filters/category-filter/CategoryFilter';
import SearchFilter from '../filters/search-filter/SearchFilter';
import SortFilter from '../filters/sort-filter/SortFilter';
import { motion } from "framer-motion"
import { perfumes } from '../../perfumes/data';

const productsPerPage = 8;
const sortTypes = {
    up: {
        fn: (a, b) => a.prices[a.prices.length - 1].price - b.prices[b.prices.length - 1].price
    },
    down: {
        fn: (a, b) => b.prices[b.prices.length - 1].price - a.prices[a.prices.length - 1].price
    },
    default: {
        fn: (a, b) => a
    }
};

const Products = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    // category variable
    const searchCategory = searchParams.get('category') || 'bütün';
    const [filteredPerfumes, setFilteredPerfumes] = useState([]);

    // search variables
    const searchText = searchParams.get('title') || '';
    const searchResults = [...filteredPerfumes].filter((product) => product.title.toLowerCase().includes(searchText.trim().toLowerCase()));

    // pagination variables
    const pageNumber = parseInt(searchParams.get('page')) || 0;
    const pagesVisited = pageNumber * productsPerPage;
    const pageCount = Math.ceil(searchResults.length / productsPerPage);

    // sorting variables
    const currentSort = searchParams.get('sorting') || 'default';

    // changing page
    const changePage = ({ selected }) => {
        document.getElementById("products").scrollIntoView();
        setSearchParams({ ...Object.fromEntries([...searchParams]), page: selected })
    };

    // scroll to top when changing
    useEffect(() => {
        const changePage = () => {
            window.scrollTo({ top: 0 });
        };
        changePage()
    }, []);

    useEffect(() => {
        if (searchCategory === 'bütün') {
            setFilteredPerfumes(perfumes);
        }
        else {
            const newPerfumes = perfumes.filter((perfume) => {
                return perfume.category === searchCategory;
            });
            setFilteredPerfumes(newPerfumes);
        }
    }, [searchCategory]);

    return (
    <div className='products-page'>
        <h1 className='products-page-title' id='products'>Keyfiyyətli Ətirlərimiz</h1>
        <SearchFilter searchText={searchText} searchParams={searchParams} setSearchParams={setSearchParams} />
        <SortFilter currentSort={currentSort} searchParams={searchParams} setSearchParams={setSearchParams} />
        <CategoryFilter searchCategory={searchCategory} searchParams={searchParams} setSearchParams={setSearchParams} />
        {searchResults.length ? (
            <motion.div layout className='products-container'>
                <Toaster
                    position='bottom-left'
                    toastOptions={{
                        duration: 5000
                    }}
                />
                {searchResults
                    .sort(sortTypes[currentSort].fn)
                    .slice(pagesVisited, pagesVisited + productsPerPage)
                    .map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
            </motion.div>
        ) : (
            <div className='no-results'>
                Axtarışınıza uyğun nəticə tapılmadı
            </div>
        )}
        {searchResults.length !== 0
            && (
                <ReactPaginate
                    previousLabel="Əvvəlki"
                    nextLabel="Növbəti"
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={1}
                    forcePage={pageNumber}
                    onPageChange={changePage}
                    containerClassName="pagination-buttons"
                    previousLinkClassName='previous-button'
                    nextLinkClassName='next-button'
                    disabledClassName='pagination-disabled'
                    activeClassName='pagination-active'
                />
            )}
      </div>
  )
}

export default Products