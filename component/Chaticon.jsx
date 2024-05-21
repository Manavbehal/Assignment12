import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment as faCommentRegular, faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';
import { faComment as faCommentSolid, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faRetweet as faRetweetRegular, faRetweet as faRetweetSolid } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as faEnvelopeRegular, faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons';



import './socialcard.css'; 

function Icon() {
  const [isCommentClicked, setIsCommentClicked] = useState(false);
  const [commentCount, setCommentCount] = useState(2);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [heartCount, setHeartCount] = useState(175);
  const [isRetweetClicked, setIsRetweetClicked] = useState(false);
  const [retweetCount, setRetweetCount] = useState(0);
  const [isEnvelopeClicked, setIsEnvelopeClicked] = useState(false);
  const [envelopeCount, setEnvelopeCount] = useState(0);

  const handleCommentClick = () => {
    setIsCommentClicked(!isCommentClicked);
    setCommentCount(commentCount + 1);
  };

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
    setHeartCount(heartCount + (isHeartClicked ? -1 : 1));
  };

  const handleRetweetClick = () => {
    setIsRetweetClicked(!isRetweetClicked);
    setRetweetCount(retweetCount + (isRetweetClicked ? -1 : 1));
  };

  const handleEnvelopeClick = () => {
    setIsEnvelopeClicked(!isEnvelopeClicked);
    setEnvelopeCount(envelopeCount + (isEnvelopeClicked ? -1 : 1));
  };



  return (
    <div className="chat-icon-container">
      
      <div className='icons-gap'>
        <FontAwesomeIcon
          icon={isCommentClicked ? faCommentSolid : faCommentRegular}
          className="icon "
          onClick={handleCommentClick}
        />
        <span className="counter ">{commentCount}</span>
      </div>

      <div className='icons-gap'>
        <FontAwesomeIcon
          icon={isRetweetClicked ? faRetweetSolid : faRetweetRegular}
          className="icon retweet-icon ${isClicked ? 'clicked' : ''}"
          onClick={handleRetweetClick}
        />
        <span className="counter retweet-icon ${isClicked ? 'clicked' : ''}">{retweetCount}</span>
      </div>

      

      <div className='icons-gap'>
        <FontAwesomeIcon
          icon={isHeartClicked ? faHeartSolid : faHeartRegular}
          className="icon heart-icon ${isClicked ? 'clicked' : ''}"
          onClick={handleHeartClick}
        />
        <span className="counter heart-icon ${isClicked ? 'clicked' : ''}">{heartCount}</span>
      </div>

      <div className='icons-gap'>
        <FontAwesomeIcon
          icon={isEnvelopeClicked ? faEnvelopeSolid : faEnvelopeRegular}
          className="icon"
          onClick={handleEnvelopeClick}
        />
        
      </div>
    </div>

    
  );
}

export default Icon;
