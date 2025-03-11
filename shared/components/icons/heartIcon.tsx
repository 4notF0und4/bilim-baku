

// 'use client'

// import * as React from 'react';

// interface HeartIconProps extends React.SVGProps<SVGSVGElement> {
//   isFilled?: boolean;
// }

// const HeartIcon: React.FC<HeartIconProps> = ({ isFilled = false, ...props }) => {
//   const [filled, setFilled] = React.useState(isFilled);

//   const toggleFill = () => setFilled((prev) => !prev);

//   return (
//     <svg
//       onClick={toggleFill}
//       xmlns="http://www.w3.org/2000/svg"
//       width="15"
//       height="15"
//       fill={filled ? '#F20000' : 'none'}
//       viewBox="0 0 15 15"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       {...props} 
//     >
//       <path
//         d="M13.633 3.073a4.86 4.86 0 0 0-2.972-1.29 4.94 4.94 0 0 0-3.15.839 4.93 4.93 0 0 0-3.325-.847 4.8 4.8 0 0 0-3.047 1.51A4.26 4.26 0 0 0 .004 6.34a4.3 4.3 0 0 0 1.385 2.962l4.659 4.384c.39.36.916.563 1.463.563s1.073-.203 1.463-.563l4.659-4.384C14.508 8.475 15 7.355 15 6.188c0-1.168-.492-2.287-1.367-3.115M12.575 8.33l-4.659 4.376a.601.601 0 0 1-.81 0L2.447 8.31a2.93 2.93 0 0 1-.918-2.114c0-.79.33-1.55.918-2.115a3.3 3.3 0 0 1 2.25-.867c.843 0 1.652.311 2.251.867q.106.1.244.155a.79.79 0 0 0 .822-.155 3.3 3.3 0 0 1 2.25-.867c.843 0 1.651.311 2.25.867.597.558.937 1.313.949 2.103a2.93 2.93 0 0 1-.888 2.126z"
//       />
//     </svg>
//   );
// };

// export default HeartIcon;








"use client";

import * as React from "react";

const HeartIcon: React.FC = () => {
  const [liked, setLiked] = React.useState(false);

  return (
    <svg
      onClick={() => setLiked(!liked)}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="16"
      viewBox="0 0 24 24"
      fill={liked ? "red" : "white"} 
      stroke="red"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ cursor: "pointer", transition: "fill 0.3s ease" }} 
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};




export default HeartIcon;








