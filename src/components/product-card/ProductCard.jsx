import { LazyLoadImage } from "react-lazy-load-image-component"
import AddIcon from '../../assets/other-images/add-to-cart.png';
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
import { Toaster } from "react-hot-toast";

const ProductCard = ({ item }) => {

    const dispatch = useDispatch();

    // for adding product to redux
    const handleClick = (item) => {
        dispatch(addProduct({
            id: `${item.id}_0`,
            product: item,
            selected: 0,
            quantity: 1,
            ml: item.prices[0].ml,
            price: item.prices[0].price, 
            message: `1 ədəd ${item.title} (${item.prices[0].ml} ml) səbətə əlavə olundu!` 
        }));
    };

  return (
    <motion.div layout className='card'>
        <Toaster
          position='bottom-left'
          toastOptions={{
            duration: 5000
          }}
        />
        <Link to={`/product/${item.id}`} className="product-link Link">
            <div className='img-container'>
                <LazyLoadImage
                    className='card-img'
                    src={item.images[0]}
                    alt='card'
                    effect="blur"
                    placeholderSrc={item.images[0]}
                />
            </div>
            <div className='card-info'>
                <h3 className='card-title'>{item.title}</h3>
                <span className='category-span'>{item.category}</span>
            </div>
        </Link>
        <div className='card-bottom'>
            <span className='card-price'>
                {item.prices[0].discount ? (
                    <><span className='discount-price'>{item.prices[0].price + item.prices[0].discount} AZN</span> {item.prices[0].price} AZN</>
                ) : (
                    <>{item.prices[0].price} AZN</>
                )}
            </span>
            <button className='add-btn' onClick={() => handleClick(item)}>
                <img src={AddIcon} alt='add' />
            </button>
        </div>
    </motion.div>
  )
}

export default ProductCard