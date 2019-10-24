/*

  Pulled from codepen
  https://codepen.io/ahdigital/pen/prXBzN

*/

import React from "react";
import styled from "styled-components";

export const LoaderSC = styled.div`
  .preloader-1 {
    margin: 100px auto 0;
    width: 66px;
    height: 12px;
  }

  .preloader-2 {
    margin: 120px auto 0;
  }

  div {
    color: #000;
    margin: 5px 0;
    text-transform: uppercase;
    text-align: center;
    font-family: "Arial", sans-serif;
    font-size: 10px;
    letter-spacing: 2px;
  }

  .preloader-1 .line {
    width: 1px;
    height: 12px;
    background: #000;
    margin: 0 1px;
    display: inline-block;
    animation: opacity-1 1000ms infinite ease-in-out;
  }

  .preloader-2 .line {
    width: 1px;
    height: 12px;
    background: #000;
    margin: 0 1px;
    display: inline-block;
    animation: opacity-2 1000ms infinite ease-in-out;
  }

  .preloader-1 .line-1,
  .preloader-2 .line-1 {
    animation-delay: 800ms;
  }
  .preloader-1 .line-2,
  .preloader-2 .line-2 {
    animation-delay: 600ms;
  }
  .preloader-1 .line-3,
  .preloader-2 .line-3 {
    animation-delay: 400ms;
  }
  .preloader-1 .line-4,
  .preloader-2 .line-4 {
    animation-delay: 200ms;
  }
  .preloader-1 .line-6,
  .preloader-2 .line-6 {
    animation-delay: 200ms;
  }
  .preloader-1 .line-7,
  .preloader-2 .line-7 {
    animation-delay: 400ms;
  }
  .preloader-1 .line-8,
  .preloader-2 .line-8 {
    animation-delay: 600ms;
  }
  .preloader-1 .line-9,
  .preloader-2 .line-9 {
    animation-delay: 800ms;
  }

  @keyframes opacity-1 {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes opacity-2 {
    0% {
      opacity: 1;
      height: 15px;
    }
    50% {
      opacity: 0;
      height: 12px;
    }
    100% {
      opacity: 1;
      height: 15px;
    }
  }
`;

export const Loader = () => {
  return (
    <LoaderSC>
      <div className="preloader-1">
        <div>Loading</div>
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
        <span className="line line-4"></span>
        <span className="line line-5"></span>
        <span className="line line-6"></span>
        <span className="line line-7"></span>
        <span className="line line-8"></span>
        <span className="line line-9"></span>
      </div>

      <div className="preloader-2">
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
        <span className="line line-4"></span>
        <span className="line line-5"></span>
        <span className="line line-6"></span>
        <span className="line line-7"></span>
        <span className="line line-8"></span>
        <span className="line line-9"></span>
        <div>Loading</div>
      </div>
    </LoaderSC>
  );
};
