import { useEffect } from 'react';
import Instagram from '../../assets/other-images/instagram.svg';
import Tiktok from '../../assets/other-images/tiktok.svg';
import Facebook from '../../assets/other-images/facebook.svg';
import Youtube from '../../assets/other-images/youtube.svg';

const About = () => {

  useEffect(() => {
    const changePage = () => {
      window.scrollTo({ top: 0 });
    };
    changePage()
  }, []);

  return (
    <div className='about-container con'>
      <h1 className='about-title'>Saat Dünyası Haqqında</h1>
      <div className='about-detail-container'>
        <p>Ətir Dünyası 2015-ci ildən bəri Azərbaycanda fəaliyyət göstərir və uğurla öz işini davam etdirir. 
          Bu çoxillik fəaliyyətin verdiyi təcrübəyə və bu sektordakı biliyinə əsasən də Ətir Dünyası öz müştərilərinə 
          tanınmış dünya istehsalçılarından orijinal məhsullar təqdim edir və hər zaman müştərilərinin məmnun qalması üçün çalışır. 
          Ətir Dünyası olaraq hər daim bu sahədəki müasir trendləri və yenilikləri yaxından izləyirik və buna əsasən də, məhsullarımızın
          çeşidlərini artırırıq.
        </p>
        <p id='text2'>Bizim üçün müştəri məmnuniyyəti çox önəmli olduğu üçün mağazamızda tez-tez endirimlər və xüsusi təkliflər mövcud olur. 
          Bu endirim və təkliflərdən xəbərdar olmaq üçün bizi sosyal medyada izləməyi unutmayın!
        </p>
        <div className='about-social-container'>
          <a href='https://www.facebook.com/' target='_blank' className='about-social'>
            <img src={Facebook} alt='facebook' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' className='about-social'>
            <img src={Instagram} alt='instagram' />
          </a>
          <a href='https://www.tiktok.com/' target='_blank' className='about-social'>
            <img src={Tiktok} alt='tiktok' />
          </a>
          <a href='https://www.youtube.com/' target='_blank' className='about-social'>
            <img src={Youtube} alt='youtube' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About