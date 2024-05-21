

import './socialcard.css'; 
import logo from '../public/dev-black.png';
import profile from '../public/profile.jpg';





function Card() {
 return (
    <>
    <div className='containerinside'>
      <div className='containerimage'> 
      <img src={logo} alt="Logo" className="logo-inside" />
      <h1 className='headingimage'>Learning React? Start Small</h1>
      <div className='profile'>
         <h1 style={{ marginLeft: '10px' }}>Dave Ceddia</h1>
         <img src={profile} alt="Logo" className="profile-inside" />
      </div>
      </div>


      <div className="belowinsidecontainer">

      <h4 className="headingcaption">Learning React? Start Small</h4>
      <p className="paracaption">Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.</p>
      <h5 className='username'>dev.to</h5>
       
      </div>
    </div>
    </>
  )
}
        


export default Card;
