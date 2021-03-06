import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAppContext } from '../../context/state';
import axios from 'axios'
import { useState } from 'react';
import MobileHeader from '../../components/MobileHeader'
import MobileFooter from '../../components/MobileFooter';

export default function Index() {
  const state = useAppContext();
  const router = useRouter()
  const { slug } = router.query
  const [currentPageMedia, setCurrentPageMedia] = useState("");

  useEffect(() => {
    if (!slug) {
      const currentMedia = JSON.parse(localStorage.getItem('currentMedia'))
      setCurrentPageMedia(currentMedia);
    } else if (slug) {
      let url = `https://api.themoviedb.org/3/search/multi?api_key=631627e688738d84a1cae51aa035b23a&query=${slug}`
      axios
        .get(url)
        .then(response => {
          setCurrentPageMedia(response.data.results[0]);
        })
    }
  }, [])

  return (
    <div className="bg-black pb-20">
      <div style={{ backgroundImage: "-webkit-linear-gradient(top,rgba(0,0,0,.8) 40%,rgba(0,0,0,0))" }} className="absolute h-32 top-0 w-full z-30"></div>
      <MobileHeader />
      { currentPageMedia && (<div className="bg-black text-white">
        <div className="max-w-md mx-auto">
          <img src={`https://image.tmdb.org/t/p/original/${currentPageMedia.backdrop_path}`} alt="" style={{ height: "400px" }} className="mb-4 w-full object-cover" />
          <div className="px-4 py-4">
            <img src="/react-netflix-clone/logo-film.png" alt="" className="w-20 mb-1" />
            <h1 className="font-extrabold text-3xl mb-2 leading-10">{currentPageMedia.title}</h1>
            <div className="flex items-center mb-3 space-x-3 text-xs">
              <span className="text-green-400 font-bold">{Math.round(currentPageMedia.vote_average * 10)}% Match</span>
              <span>{currentPageMedia.release_date.substr(0, 4)}</span>
              <span className="border border-gray-600 px-1 p-0.5">{currentPageMedia.adult ? "Rated-PG13" : "Rated-R"}</span>
              <span className="border border-gray-600 p-0.5">1080P HD</span>
            </div>
            <div className="flex flex-col space-y-3 mb-4">
              <button className="flex items-center justify-center px-7 py-2 space-x-2.5 bg-white rounded-sm text-black">
                <svg viewBox="0 0 448 513" className="w-3 h-3 fill-current">
                  <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                </svg>
                <span className="text-sm font-semibold">Play</span>
              </button>
              <button className="flex items-center justify-center px-7 py-2 space-x-2.5 bg-gray-600 rounded-sm text-white">
                <svg viewBox="0 0 12 17" className="text-white w-4 h-4 stroke-current">
                  <path d="M1 15.7h10M10 9l-4 4m0 0L2 9m4 4V1" strokeWidth="2" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-semibold">Download</span>
              </button>

            </div>
            <p className="leading-tight mb-4">{currentPageMedia.overview}</p>
            <div className="flex items-center space-x-10">
              <button className="flex flex-col items-center justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 mb-2" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="text-white text-sm text-gray-500">My List</span>
              </button>
              <button className="flex flex-col items-center justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 mb-2" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span className="text-white text-sm text-gray-500">Rate</span>
              </button>
              <button className="flex flex-col items-center justify-between">
                <svg viewBox="0 0 23 23" className="h-6 mb-2">
                  <path stroke="#FFF" strokeWidth="1.8" d="M21.114 2.24L3.083 8.957l4.867 1.87 2.608 1.003L20.5 3l-9.349 9.394 1.254 3.262 1.638 4.261z" />
                </svg>
                <span className="text-white text-sm text-gray-500">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>)}
      <MobileFooter />
    </div>
  )
}
