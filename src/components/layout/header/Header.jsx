import React, { useState } from 'react';
import Bag from '../../../assets/other-images/shop-bag.svg';
import MenuIcon from '../../../assets/other-images/menu-icon.svg';
import CloseIcon from '../../../assets/other-images/close-icon.svg'
import Logo from '../../../assets/other-images/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const quantity = useSelector(state => state.cart.quantity);

    const handleClick = () => setToggle(!toggle);
    const closeMobileMenu = () => setToggle(false);

    return (
        <div className='header'>
            <div className='header-container con'>
                <Link to='/' className='Link' onClick={closeMobileMenu}>
                    <div className='logo-container'>
                        <div className='logo-img-container'>
                            <img src={Logo} alt='saat' />
                        </div>
                        <h1>Ətir Dünyası</h1>
                    </div>
                </Link>
                <div className='right'>
                    <div className='menu-icon' onClick={handleClick}>
                        {toggle ? <img src={CloseIcon} alt='close' /> : <img src={MenuIcon} alt='menu' />}
                    </div>
                    <div className='nav-links-container'>
                        <ul className={toggle ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links Link' onClick={closeMobileMenu}>
                                    Ana Səhifə
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/products' className='nav-links Link' onClick={closeMobileMenu}>
                                    Ətirlər
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/how-works' className='nav-links Link' onClick={closeMobileMenu}>
                                    Necə
                                </Link>
                            </li>
                            <li className='nav-item' id='cart-item'>
                                <Link to='/cart' className='nav-links Link' onClick={closeMobileMenu}>
                                    Səbətim
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className='nav-links Link' onClick={closeMobileMenu}>
                                    Haqqımızda
                                </Link>
                            </li>
                        </ul>
                        <Link to='/cart' onClick={closeMobileMenu}>
                            <div className='cart-btn'>
                                <img src={Bag} alt='bag' />
                                <div className='badge'>{quantity}</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header