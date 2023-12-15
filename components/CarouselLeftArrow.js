import { useAppContext } from '../context/state';
import { useState } from 'react';

export default function CarouselLeftArrow({ onClick, ...rest }) {
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
      className="carousel__button flex items-center justify-center left-0 z-10"
      style={{
        position: "absolute",
        outline: "0",
        transition: "all .5s",
        border: "0",
        background: "rgba(0,0,0,0.5)",
        height: "100%",
        opacity: "1",
        cursor: "pointer"
      }}>
      <svg viewBox="0 0 266 438" className={`fill-current text-white w-4 ${isShown ? "visible" : "invisible"}`}>
        <path d="M7.52 202.03L201.87 7.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L104.49 219l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L7.52 235.97c-9.37-9.37-9.37-24.57 0-33.94z" />
      </svg>
    </button>
  )
};