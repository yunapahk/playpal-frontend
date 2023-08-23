import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";

import '../styles.scss' 


function LikeButton(){
    const [liked,setLiked]= useState(false)
 
    const toggleLike = () => {
      
      setLiked(!liked);
    };
    return (
      <div className="like-container">
        <button
          className={`like-button ${liked ? "liked" : ""}`}
          onClick={toggleLike}
        >
          {/* Use the FontAwesomeIcon component */}
          <FontAwesomeIcon
            icon={faHeartCirclePlus}
            size="lg"
            className="like-icon"
            style={{ color: liked ? "red" : "" }} // Change the color based on 'liked'
          />
        </button>
      </div>
    );
    }
    export default LikeButton