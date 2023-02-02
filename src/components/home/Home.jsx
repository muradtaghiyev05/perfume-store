import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BannerImg from '../../assets/other-images/banner5.webp';
import NewArrival from "../new-arrival/NewArrival";
import NewProducts from '../new-products/NewProducts'

const Home = () => {

    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (hash === '') {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, key]);

    return (
    <div className='home'>
        <div className='hero-container'>
            <img src={BannerImg} alt='hero' />
            <div className='hero-title'>
                <span className="top">Ən Məhşur Brendlər</span>
                <span className="mid">Möhtəşəm Qoxular</span>
                <p className="bottom">
                    Ətir Dünyasında hər zövqə uyğun qalıcı ətirlər tapa bilərsiniz. Bizi seçin və
                    sevdiklərinizi gözəl qoxu ilə qarşılayın.
                </p>
                <Link to={`/products`}><button className="hero-btn">Bütün Ətirlər</button></Link>
            </div>
        </div>
        <div className="new-arrival-container con">
            <NewArrival />
        </div>
        <div className="new-products-container">
            <h1>Yeni Gələn Ətirlər</h1>
            <NewProducts />
            <Link to='/products' className="all-link Link">Bütün Ətirlər</Link>
        </div>
    </div>
    )
}

export default Home