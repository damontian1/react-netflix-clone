import { useAppContext } from '../context/state';
import DesktopHeader from './DesktopHeader'
import MediaCarousel from './MediaCarousel'

export default function DesktopView(props) {
  const state = useAppContext();

  return (
    <div>
      {state.visible && (
        <div
          onClick={(e) => { e.target.id === "modal-desktop__outside" ? state.setVisible(false) : "" }}
          style={{ backgroundColor: "rgb(0 0 0 / 75%)", transition: "ease-in 5s" }}
          id="modal-desktop__outside"
          className="fixed h-full inset-0 border- mx-auto z-50 overflow-scroll">
          <div className={`bg-black max-w-5xl mt-6 mx-auto pb-6 rounded-md ${state.visible ? "scale" : "hidden"}`}>
            <div className="relative">
              <div className="absolute top-0 right-0 p-4 text-white z-10">
                <button
                  onClick={() => {
                    state.setVisible(false)
                  }}
                  className="bg-black rounded-full p-3 focus:outline-none">
                  <svg viewBox="0 0 14 14" className="w-4 stroke-current stroke-1 text-white">
                    <path d="M1 13L13 1M1 1l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="w-full h-full relative">
                <div style={{ height: "400px" }} className="w-full h-full">
                  <img src={`https://image.tmdb.org/t/p/original/${state.currentMedia.backdrop_path}`} alt="" className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg" />
                </div>
                <div className="text-white px-12 absolute top-2/3 transform -translate-y-1/2">
                  <div className="mb-16">
                    <img src="/react-netflix-clone/logo-film.png" alt="" className="w-20 mb-2 text-shadow-1 text-shadow-2" />
                    <h1 className="text-4xl font-extrabold mb-4 inline-block py-0.5 text-shadow-1 text-shadow-2">{state.currentMedia.title}</h1>
                    <div className="flex space-x-1.5">
                      <button className="flex items-center px-5 py-1.5 space-x-2.5 bg-white rounded-md text-black">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 448 513">
                          <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                        </svg>
                        <span className="text-sm font-semibold">Play</span>
                      </button>
                      <button className="rounded-full border-2 border-gray-200 bg-gray-900 w-8 h-8 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                      <button className="rounded-full border-2 border-gray-200 bg-black w-8 h-8 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                        </svg>
                      </button>
                      <button className="rounded-full border-2 border-gray-200 bg-black w-8 h-8 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-gradient-to-t bottom-0 from-black h-20 w-full z-0"></div>
              </div>

              <div className="relative">
                <div className="text-white px-12">
                  <div className="mb-16">
                    <div>
                      <div className="flex items-center mb-3 space-x-3 text-base">
                        <span className="text-green-400 font-bold">{state.currentMedia.vote_average * 10}% Match</span>
                        <span>{state.currentMedia.release_date.substr(0, 4)}</span>
                        <span className="border border-gray-600 px-1 p-0.5">{state.currentMedia.adult ? "Rated-PG13" : "Rated-R"}</span>
                        <span className="border border-gray-600 p-0.5">1080P HD</span>
                      </div>
                      <p className="leading-tight mb-4 text-white">{state.currentMedia.overview}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="px-12 text-white">
                  <h2 className="mb-4 text-xl font-semibold">More Like This</h2>
                  <div className="flex flex-wrap -mx-2 h-full overflow-scroll">
                    {
                      state.similiarMedia && state.similiarMedia.map((item, index) => {
                        return (
                          <div key={index} className="w-1/3 py-3 overflow-hidden px-2">
                            <div className="relative">
                              <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" className="rounded-sm" />
                              <h2 className="absolute right-1 px-1 py-1 bottom-1 font-bold uppercase text-right text-xl w-3/4 text-shadow-1 text-shadow-2 leading-none font-custom">{item.title}</h2>
                            </div>
                            <div style={{ backgroundColor: "hsl(0deg 0% 15%)" }} className="mb-4 p-4 rounded-bl-sm rounded-br-sm h-full max-h-60 overflow-hidden overflow-ellipsis">
                              <div className="flex items-center justify-between mb-4">
                                <span className="text-green-400 font-bold">{Math.round(item.vote_average * 10)}% Match</span>
                                <button className="rounded-full border-2 border-gray-200 bg-gray-900 w-8 h-8 flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                  </svg>
                                </button>
                              </div>
                              <p className="text-sm">{item.overview.substr(0, 200)}...</p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <div className="page__container mx-auto bg-black text-white h-full">
        <DesktopHeader />
        <div style={{ height: "50vw", maxHeight: "580px" }} className="h-full w-full inset-0 relative">
          <img src="/react-netflix-clone/banner.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute bg-gradient-to-t bottom-0 from-black h-20 md:h-40 w-full z-0"></div>
          <div className="-translate-y-1/2 absolute max-w-md px-8 top-1/2 transform">
            <img src="/react-netflix-clone/logo-film.png" alt="" className="w-20 mb-3" />
            <h1 className="font-extrabold text-5xl mb-6 leading-10">Shadow and Bone</h1>
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
        <div className="-mt-32 relative sm:-mt-0">
          <div className="pl-8">
            <MediaCarousel category="top" />
            <MediaCarousel category="popular" />
            <MediaCarousel category="upcoming" />
            <MediaCarousel category="latest" />
          </div>
        </div>
      </div>
    </div>
  )
}