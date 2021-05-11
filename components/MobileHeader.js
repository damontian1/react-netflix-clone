import Link from 'next/link'

export default function MobileHeader() {
  return (
    <header className="text-white absolute px-5 z-40 py-5 w-full">
      <nav>
        <div className="flex justify-between items-baseline mb-2">
          <Link href="/">
            <img src="/react-netflix-clone/logo-small.png" alt="" className="w-7" />
          </Link>
          <div className="flex space-x-2">
            <button>
              <svg viewBox="0 0 470 384" className="text-white fill-current h-4">
                <path d="M426.8 0H43C19.4 0 .3 19.1.3 42.7v63.9H43V42.7h383.8v298.6H277.6V384H427c23.6 0 42.7-19.1 42.7-42.7V42.7c0-23.6-19.3-42.7-42.9-42.7zM.3 319.6v63.9h63.9c0-35.3-28.6-63.9-63.9-63.9zm0-85V277c58.9 0 106.6 48.1 106.6 107h42.7c.1-82.4-66.9-149.3-149.3-149.4zM192.4 384h42.7C234.6 254.5 129.8 149.7.3 149.4v42.4c106-.2 192 86.2 192.1 192.2z" />
              </svg>
            </button>
            <button className="px-3 flex space-x-1 items-center focus:outline-none">
              <img src="/react-netflix-clone/damon.jpeg" alt="" className="w-6 h-6 rounded-full" />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <a href="#" className="px-2 text-base">TV Shows</a>
          <a href="#" className="px-2 text-base">Movies</a>
          <a href="#" className="px-2 text-base flex items-center space-x-1">
            <span>Categories</span>
            <svg className="text-white w-4 h-4" viewBox="0 0 320 512">
              <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  )
}