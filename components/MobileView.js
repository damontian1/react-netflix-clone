import { useAppContext } from '../context/state';
import MobileFooter from './MobileFooter';
import MobileHeader from './MobileHeader'
import MobileMediaCarousel from './MobileMediaCarousel'

export default function MediaSelected(props) {
  const state = useAppContext();

  return (
    <div className="bg-black pb-16">
      <div style={{ backgroundImage: "-webkit-linear-gradient(top,rgba(0,0,0,.7) 30%,rgba(0,0,0,0))" }} className="absolute h-32 top-0 w-full z-30"></div>
      <MobileHeader />
      <div style={{ height: "400px" }} className="h-full w-full inset-0 relative text-white mb-8">
        <img src="/react-netflix-clone/banner.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute bg-gradient-to-t bottom-0 from-black h-40 w-full z-0"></div>
        <div className="-translate-y-1/2 absolute max-w-md px-5 top-2/3 transform">
          <img src="/react-netflix-clone/logo-film.png" alt="" className="w-20 mb-2" />
          <h1 className="font-extrabold text-4xl mb-4 leading-10">Shadow and Bone</h1>
          <p className="leading-tight mb-10">Dark forces conspire against orphan mapmaker Alina Starkov when she unleashes an extraordinary power that could change the fate of her war-torn world.</p>
          <div className="flex space-x-2">
            <button className="flex items-center px-7 py-2 space-x-2.5 bg-white rounded-md text-black">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 448 513">
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
              </svg>
              <span className="text-sm font-semibold">Play</span>
            </button>
            <button className="flex items-center px-7 py-2 space-x-2.5 bg-gray-600 rounded-md text-white">
              <svg className="text-white w-3 h-3 fill-current" viewBox="0 0 496 496">
                <path d="M248 0C111.043 0 0 111.083 0 248c0 136.997 111.043 248 248 248s248-111.003 248-248C496 111.083 384.957 0 248 0zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
              </svg>
              <span className="text-sm font-semibold">More Info</span>
            </button>

          </div>
        </div>
      </div>
      <div className="pl-5 text-white">
        <div className="bg-gradient-to-t bottom-0 from-black h-4 w-full z-0"></div>
        <MobileMediaCarousel category="top" />
        <MobileMediaCarousel category="upcoming" />
        <MobileMediaCarousel category="latest" />
        <MobileMediaCarousel category="popular" />
      </div>
      <MobileFooter />
    </div>
  )
}