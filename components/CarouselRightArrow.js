import { useAppContext } from '../context/state';
import { useState } from 'react';

export default function CarouselRightArrow({ onClick, ...rest }) {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  const [isShown, setIsShown] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={() => onClick()}
      className="carousel__button flex items-center justify-center right-0 z-10"
      style={{
        position: "absolute",
        outline: "0",
        transition: "all .5s",
        border: "0",
        background: "rgba(0,0,0,0.6)",
        height: "100%",
        opacity: "1",
        cursor: "pointer",
      }}>
      <svg viewBox="0 0 266 438" className={`fill-current text-white w-4 ${isShown ? "visible" : "invisible"}`}>
        <path d="M258.476 235.971L64.132 430.314c-9.373 9.373-24.569 9.373-33.941 0L7.524 407.647c-9.357-9.357-9.375-24.522-.04-33.901L161.505 219 7.484 64.255c-9.335-9.379-9.317-24.544.04-33.901L30.191 7.687c9.373-9.373 24.569-9.373 33.941 0L258.475 202.03c9.373 9.372 9.373 24.568.001 33.941z" />
      </svg>
    </button>
  )
};