import { useEffect, useState } from 'react';
import { Toaster } from "react-hot-toast";
import ReactPaginate from 'react-paginate';
import 'react-lazy-load-image-component/src/effects/blur.css'
import ProductCard from '../product-card/ProductCard';
import CategoryFilter from '../filters/category-filter/CategoryFilter';
import SearchFilter from '../filters/search-filter/SearchFilter';
import SortFilter from '../filters/sort-filter/SortFilter';
import { motion } from "framer-motion"

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
    
    // category variable
    const [filteredPerfumes, setFilteredPerfumes] = useState([]);

    // search variables
    const [searchText, setSearchText] = useState('');
    const searchResults = [...filteredPerfumes].filter((product) => product.title.toLowerCase().includes(searchText.trim().toLowerCase()));

    // pagination variables
    const [pageNumber, setPageNumber] = useState(0);
    const pagesVisited = pageNumber * productsPerPage;
    const pageCount = Math.ceil(searchResults.length / productsPerPage);

    // sorting variables
    const [currentSort, setCurrentSort] = useState('default');

    // changing page
    const changePage = ({ selected }) => {
        document.getElementById("products").scrollIntoView();
        setPageNumber(selected);
    };

    // scroll to top when changing
    useEffect(() => {
        const changePage = () => {
            window.scrollTo({ top: 0 });
        };
        changePage()
    }, []);

    return (
    <div className='products-page'>
        <h1 className='products-page-title' id='products'>Keyfiyyətli Ətirlərimiz</h1>
        <SearchFilter searchText={searchText} setSearchText={setSearchText} setPageNumber={setPageNumber} />
        <SortFilter currentSort={currentSort} setCurrentSort={setCurrentSort} setPageNumber={setPageNumber} />
        <CategoryFilter setFilteredPerfumes={setFilteredPerfumes} setPageNumber={setPageNumber} />
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