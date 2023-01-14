import NewImage from '../../assets/other-images/goodgirl.png'
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <div className="new-arrival-card">
        <div className="image-part">
            <div className="square">
                <div className="circle">
                </div>
            </div>
            <img src={NewImage} alt='new-arrival' className="new-arrival-img" />
        </div>
        <div className="info-part">
            <span className='red-span'>Ən Çox Satılan</span>
            <span className='new-arrival-title'>Carolina Herrera Good Girl</span>
            <p className='new-arrival-desc'>
                Öz möhtəşəm qoxusu ilə qadınların vazgeçilməz seçiminə çevrilən bir ətir.
                Əgər siz də sınamaq istəyirsinizsə tərəddüd belə etməyin.
            </p>
            <Link to='/product/23' className='Link'><button className='learn-more'>Ətraflı Məlumat</button></Link>
        </div>
    </div>
  )
}

export default NewArrival