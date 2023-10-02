// import React from 'react'
// import './style.css'
// import { useState, useEffect } from 'react'
// /**
// * @author
// * @function BackToTop
// **/

// export const BackToTop = (props) => {
//     const [backToTopBtn, setBackToTopBtn] = useState(false);
//     useEffect(() => {
//         window.addEventListener("scroll", () => {
//             if (window.scrollY > 100) {
//                 setBackToTopBtn(true)
//             } else {
//                 setBackToTopBtn(false)
//             }
//         })
//     }, [])
//     const scrollup = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth",
            
//         })
//     }
//     return (
//         <div style={{}}>
//             {
//             backToTopBtn && 
//             <button 
//             className="BackToTopBtn" 
//             onClick={scrollup}><p>^</p></button>
//             }
//         </div>
//         // <button className="BackToTopBtn"></button>
//     )
// }

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4vmax;
    width: 5vmax;
    height: 5vmax;
    color: #fff;
    background-color:  rgb(98,84,243);
    box-shadow: 1px 1px 1px grey;
    border-radius: 50%;
    position: fixed;
    bottom: 4vmax;
    right: 4vmax;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width: 576px {
    .top-btn {
      right: 0;
      left: 40%;
    }
  }
`;

// export default BackToTop;




