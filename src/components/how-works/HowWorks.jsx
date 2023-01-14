import { useEffect } from 'react';
import NoAuth from '../../assets/other-images/no-auth.png';
import NoCard from '../../assets/other-images/no-card.png';
import SelectProducts from '../../assets/other-images/select-products.png';
import WpPayment from '../../assets/other-images/wp-payment.png';

const HowWorks = () => {

  useEffect(() => {
    const changePage = () => {
      window.scrollTo({ top: 0 });
    };
    changePage()
  }, []);

  return (
    <div className='how-works-container con'>
      <h1 className='how-works-title'>Saytda Alış-Veriş Necə Edilir? </h1>
      <div className='how-works-detail-container'>
        <div className='detail-step'>
          <img src={NoAuth} alt='no-auth' />
          <span>Qeydiyyat Yoxdur</span>
          <p>
            İstifadəçilər artıq hər dəfə qeydiyyatdan keçib özlərinə hesab açmaqdan yorulub.
            Bizim saytda isə sizdən <b>heç bir qeydiyyat və şəxsi məlumat</b> tələb olunmur.
          </p>
        </div>
        <div className='detail-step'>
          <img src={NoCard} alt='no-card' />
          <span>Kard Tələb Olunmur</span>
          <p>
            İstifadəçilər çox zaman öz kardlarını sayta daxil etməkdən çəkinirlər və bu 
            normal haldır. Bizim saytda güvənliyiniz üçün isə sizdən <b>heç bir kard məlumatı</b> tələb olunmur.
          </p>
        </div>
        <div className='detail-step'>
          <img src={SelectProducts} alt='select-products' />
          <span>Məhsulları Seçin</span>
          <p>
            Bəyəndiyiniz məhsulları gözdən keçirin və almaq istədiyiniz məhsulları səbətinizə əlavə edin. 
            <b>Saytın sağ yuxarı</b> hissəsindəki səbətə daxil olaraq seçdiyiniz məhsulları görə bilərsiniz.
          </p>
        </div>
        <div className='detail-step'>
          <img src={WpPayment} alt='wp-payment' />
          <span>Whatsappla Ödəniş</span>
          <p>
            Səbətinizə daxil olduqdan sonra <b>ödəniş et</b> düyməsinə basaraq bizə whatsapp vasitəsilə sifarişinizi 
            göndərə bilərsiniz. Whatsapp sizi bizim nömrəmizə yönləndirəcək və seçdiyiniz məhsullara 
            uyğun avtomatik mesaj yazacaq.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowWorks