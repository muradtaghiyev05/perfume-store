import React from 'react'
import Location from '../../../assets/other-images/location.svg'
import Phone from '../../../assets/other-images/phone.svg'
import Mail from '../../../assets/other-images/mail.svg'
import Facebook from '../../../assets/other-images/facebook.svg'
import Instagram from '../../../assets/other-images/instagram.svg'
import Tiktok from '../../../assets/other-images/tiktok.svg';
import Youtube from '../../../assets/other-images/youtube.svg';
import StoreImg from '../../../assets/other-images/store-img.jpg'

const Footer = () => {
    return (
        <div className='footer' id='contact'>
            <div className='footer-container'>
                <div className='store-container'>
                    <img src={StoreImg} alt='store' />
                </div>
                <div className='contact-container'>
                    <h2>Bizimlə Əlaqə Saxlayın</h2>
                    <p>Bizə aşağıda qeyd olunan əlaqə nömrəsi, email və ya instagram vasitəsilə
                        irad və təkliflərinizi bildirə bilərsiniz. <br /> Yeni gələn məhsullarımızdan xəbərdar
                        olmaq üçün sosyal medya səhifələrimizi izləməyi unutmayın.
                    </p>
                    <div className='detail-container'>
                        <ul>
                            <li>
                                <img src={Location} alt='address' />
                                <span>Baku, Azerbaijan, House no 34, Office 150</span>
                            </li>
                            <li>
                                <img src={Phone} alt='phone' />
                                <span>+994559999999</span>
                            </li>
                            <li>
                                <img src={Mail} alt='mail' />
                                <span>etir@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className='social-container'>
                        <a href='https://www.facebook.com/' target='_blank' className='social'>
                            <img src={Facebook} alt='facebook' />
                        </a>
                        <a href='https://www.instagram.com/' target='_blank' className='social'>
                            <img src={Instagram} alt='instagram' />
                        </a>
                        <a href='https://www.tiktok.com/' target='_blank' className='about-social'>
                            <img src={Tiktok} alt='tiktok' />
                        </a>
                        <a href='https://www.youtube.com/' target='_blank' className='about-social'>
                            <img src={Youtube} alt='youtube' />
                        </a>
                    </div>
                    <div className='copyr'>Created by &copy; WebDost Studio</div>
                </div>
            </div>
        </div>
    )
}

export default Footer