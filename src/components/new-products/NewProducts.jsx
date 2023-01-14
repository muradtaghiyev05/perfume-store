import { perfumes } from '../../perfumes/data'
import ProductCard from '../product-card/ProductCard';

const NewProducts = () => {

  return (
    <div className='new-products'>
        {perfumes.slice(0, 8).map(item => (
            <ProductCard key={item.id} item={item} />
        ))}
    </div>
  )
}

export default NewProducts