

import './socialcard.css'; 
import Logocontainer from '../component/logocontainer.jsx';
import Card from '../component/card.jsx';
import ChatIcon from '../component/Chaticon.jsx';





function App() {


  return (
    <>
     <div className='social-card'>
      <hr className='hrabove'/>
       <Logocontainer/>
       <Card/>
       <ChatIcon/>
       <hr className='hrbottom'/>
     </div>
    
    </>
  )
}
        


export default App
