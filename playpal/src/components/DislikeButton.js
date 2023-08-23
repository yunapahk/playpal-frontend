// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

// import "../styles.scss";

// function DislikeButton() {
//   const [disliked, setDisliked] = useState(false);

//   const toggleDislike = () => {
//     setDisliked(!disliked);
//   };
//   return (
//     <div className="like-container">
//       <button
//         className={`like-button ${disliked ? "liked" : ""}`}
//         onClick={toggleDislike}
//       >
//         {/* Use the FontAwesomeIcon component */}
//         <FontAwesomeIcon
//           icon={faTimes}
//           size="lg"
//           className="dislike-icon"
//           style={{ color: disliked ? "green" : "" }} // Change the color based on 'liked'
//         />
//       </button>
//     </div>
//   );
// }
// export default DislikeButton;
