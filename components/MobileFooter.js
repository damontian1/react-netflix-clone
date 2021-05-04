export default function MobileFooter() {
  return (
    <footer className="bottom-0 fixed z-50 bg-black h-20 w-full flex items-center">
      <div className="flex items-center justify-around px-4 w-full">
        <button className="flex flex-col h-12 items-center justify-between text-white">
          <svg viewBox="0 0 20 20" className="text-white fill-current w-6 mb-1">
            <path d="M1 11h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 00.707-1.707l-9-9a.999.999 0 00-1.414 0l-9 9A1 1 0 001 11zm9-8.3l6 6v4.586l.001 5H4V8.7l6-6z" /></svg>
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col h-12 items-center justify-between text-white">
          <svg viewBox="0 0 496 496" className="text-white fill-current w-5 mb-1">
            <path d="M248 0C111 0 0 111 0 248s111 248 248 248 248-111 248-248S385 0 248 0zm78 151c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-158 1c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm230.9 121C390 344 329.4 399 256 399h-16c-73.4 0-134-55-142.9-126-1.2-9.5 6.3-18 15.9-18h270c9.6 0 17.1 8.4 15.9 18z" />
          </svg>
          <span className="text-xs">Fast Laughs</span>
        </button>
        <button className="flex flex-col h-12 items-center justify-between text-white">
          <svg viewBox="0 0 12 17" className="text-white stroke-current w-5 mb-1">
            <path d="M1 15.7h10M10 9l-4 4m0 0L2 9m4 4V1" stroke-width="2" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span className="text-xs">Downloads</span>
        </button>
        <button className="flex flex-col h-12 items-center justify-between text-white">
          <svg viewBox="0 0 512 512" className="text-white stroke-current w-6 mb-1">
            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
          </svg>
          <span className="text-xs">Search</span>
        </button>
        <button className="flex flex-col h-12 items-center justify-between text-white">
          <svg viewBox="0 0 568 590" className="text-white fill-current w-6 mb-1">
            <g>
              <path d="M336.206 2.829c22.972-7.464 47.393 4.28 54.521 26.22L423.121 155h-44.464L350.583 47.803c-.864-2.658-3.793-4.125-6.585-3.34l-.22.067L49.46 140.16c-2.857.928-4.469 3.92-3.582 6.648L133 414.943v59.96c-16.105-1.633-30.336-11.946-35.712-27.585l-.22-.655-94.69-291.43c-7.13-21.94 5.724-45.797 28.696-53.26z" />
              <path d="M520 142H168c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V190c0-26.5-21.5-48-48-48zm-6 400H174c-3.3 0-6-2.7-6-6V196c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z" />
              <path d="M399.418 354.954l-98.217-58.12c-7.98-4.72-20.201-.14-20.201 11.535v116.21c0 10.474 11.356 16.786 20.201 11.535l98.217-58.091c8.762-5.167 8.79-17.903 0-23.07z" />
            </g>
          </svg>
          <span className="text-xs">Coming Soon</span>
        </button>
      </div>
    </footer>
  )
}