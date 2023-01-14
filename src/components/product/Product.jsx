import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductSwiper from '../swiper/ProductSwiper';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartRedux';
import { Toaster } from 'react-hot-toast';
import { perfumes } from '../../perfumes/data'

const Product = () => {

  const [currentSelection, setCurrentSelection] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();

  const handleClick = (item) => {
      dispatch(addProduct({
        id: `${item.id}_${currentSelection}`,
        product: item,
        selected: currentSelection,
        quantity: itemQuantity,
        ml: item.prices[currentSelection].ml,
        price: item.prices[currentSelection].price,
        message: `${itemQuantity} ədəd ${item.title} (${item.prices[currentSelection].ml} ml) səbətə əlavə olundu!`
      }));
  };

  const handleSelection = (selection) => {
    setCurrentSelection(selection);
    setItemQuantity(1);
  };

  useEffect(() => {
    const changePage = () => {
      window.scrollTo({ top: 0 });
    };
    changePage()
  }, []);

  return (
    perfumes.map((product) => (
      parseInt(params.id) === product.id && 
      <div key={product.id} className='product-page'>
        <Toaster
          position='bottom-left'
          toastOptions={{
            duration: 5000
          }}
        />
        <div className='product-page-container con'>
          <div className='swiper-container'>
            <ProductSwiper images={product.images} />
          </div>
          <div className='product-detail-container'>
            <h3>{product.title}</h3>
            <span className='category-span'>{product.category}</span>
            <div className='ml-container'>
              {product.prices.map((item, index) => (
                <button
                  value={currentSelection} 
                  key={index} 
                  className={currentSelection === index ? "ml-btn ml-active" : "ml-btn"}
                  onClick={() => handleSelection(index)}>{item.ml} ml</button>
              ))}
            </div>
            <span className='product-price'>
              {product.prices[currentSelection].discount ? (
                <>
                  <span className='discount-price'>
                    {product.prices[currentSelection].price + product.prices[currentSelection].discount} AZN
                  </span> 
                  {product.prices[currentSelection].price} AZN
                </>
              ) : (
                <>{product.prices[currentSelection].price} AZN</>
              )}
            </span>
            <div className='amount-container'>
              <select className='amount' value={itemQuantity} onChange={(e) => setItemQuantity(parseInt(e.target.value))}>
                {Array.from({ length: 30 }, (item, index) => item = index + 1).map(num => (
                  <option key={num}>{num}</option>
                ))}
              </select>
              <button className='add-to-cart-btn' onClick={() => handleClick(product)}>Səbətə At</button>
            </div>
            <span className='about-product-title'>Məhsul Haqqında</span>
            <p className='about-product-desc'>{product.desc}</p>
          </div>
        </div>
      </div>
    ))
  )
}

export default Product