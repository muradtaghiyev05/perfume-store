import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react'

import Loading from "./components/loading/Loading";
import ErrorPage from './components/error/ErrorPage';

const Home = lazy(() => import('./components/home/Home'));
const Products = lazy(() => import('./components/products/Products'));
const Layout = lazy(() => import('./components/layout/Layout'));
const About = lazy(() => import('./components/about/About'));
const Cart = lazy(() => import('./components/cart/Cart'));
const HowWorks = lazy(() => import('./components/how-works/HowWorks'));
const Product = lazy(() => import('./components/product/Product'));

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path="/how-works" element={<HowWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
