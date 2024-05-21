import logo from '../public/dev-black.png';
import './socialcard.css'; 

function logocontainer() {


    return (
      <>
       
          <div className='flex-container'>
          <img src={logo} alt="Logo" className="logo" />
          <div className='outer-logo'>
          <div className='container-logo'>
            
            <h1 className='heading'>The Practical Dev</h1>
            <p className='para-logo'>@ThePracticalDev</p>
            <p className='para-logo'>Sep10</p>
          </div>
          <div className='container-belowlogo'>
            <p>Learning React? Start Small.</p>
            <p>{'{'} author: <span>@dceddia</span>{'}'} </p>
          </div>
          </div>
          </div>
       
      </>
    )
  }
  
  
  export default logocontainer;
  