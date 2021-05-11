import Link from 'next/link'

export default function MobileFooter() {
  return (
    <footer className="bottom-0 fixed h-20 z-50 bg-black w-full flex items-center">
      <div className="flex items-center justify-between w-full px-4">
        <Link href="/">
          <a className="flex flex-col h-11 items-center justify-between text-white">
            <svg viewBox="0 0 20 20" className="text-white fill-current h-5 mb-1">
              <path d="M1 11h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 00.707-1.707l-9-9a.999.999 0 00-1.414 0l-9 9A1 1 0 001 11zm9-8.3l6 6v4.586l.001 5H4V8.7l6-6z" /></svg>
            <span className="text-xs">Home</span>
          </a>
        </Link>
        <button className="flex flex-col h-11 items-center justify-between text-white">
          <svg viewBox="0 0 12 17" className="text-white stroke-current h-5 mb-1">
            <path d="M1 15.7h10M10 9l-4 4m0 0L2 9m4 4V1" strokeWidth="2" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xs">Downloads</span>
        </button>
        <button className="flex flex-col h-11 items-center justify-between text-white">
          <svg viewBox="0 0 19 19" className="text-white fill-current stroke-0 h-5 mb-1">
            <path d="M8 16a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0016 8c0-4.411-3.589-8-8-8S0 3.589 0 8s3.589 8 8 8zM8 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
          </svg>
          <span className="text-xs">Search</span>
        </button>
        <button className="flex flex-col h-11 items-center justify-between text-white">
          <svg viewBox="0 0 568 590" className="text-white fill-current h-5 mb-1">
            <g>
              <path d="M336.206 2.829c22.972-7.464 47.393 4.28 54.521 26.22L423.121 155h-54.464L350.583 47.803c-.864-2.658-3.793-4.125-6.585-3.34l-.22.067L49.46 140.16c-2.857.928-4.469 3.92-3.582 6.648L133 414.943v59.96c-16.105-1.633-30.336-11.946-35.712-27.585l-.22-.655-94.69-291.43c-7.13-21.94 5.724-45.797 28.696-53.26z" />
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