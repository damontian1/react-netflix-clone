import { useAppContext } from '../context/state';
import Carousel from "react-multi-carousel";
import CarouselRightArrow from './CarouselRightArrow'
import CarouselLeftArrow from './CarouselLeftArrow'
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link'
import axios from 'axios';

export default function MediaCarousel(props) {
  const state = useAppContext();
  const category = props.category;

  const fetchSimilarMedia = (url) => {
    axios
      .get(url)
      .then(response => {
        localStorage.setItem("similiarMedia", JSON.stringify(response.data.results.slice(0, 9)));
      })
  }

  return (
    <div className="mb-10">
      <span className="font-bold mb-1 inline-block capitalize text-2xl text-white">{category !== "top" ? category : `Top Picks for Damon`}</span>
      <div className="flex flex-row gap-x-1 overflow-x-auto scrollbar-hide">
        {
          state[category] && state[category].map((item, index) => {
            if (category !== "myList") {
              let itemTitle = item.original_title || item.original_name;
              let itemTitleWithDashes = itemTitle.toLowerCase().split(" ").join("-")
              return (
                <Link
                  href={`/media/${itemTitleWithDashes}`}
                  key={index}
                >
                  <a
                    onClick={() => {
                      fetchSimilarMedia(`https://api.themoviedb.org/3/movie/${item.id}/recommendations?api_key=631627e688738d84a1cae51aa035b23a`)
                      state.setCurrentMedia(item);
                      localStorage.setItem("currentMedia", JSON.stringify(item));
                      state.setVisible(true);
                    }}
                    className="overflow-hidden inline-block rounded-sm relative h-full w-44 flex-shrink-0">
                    <img src={`${process.env.assetPrefix}logo-small.png`} alt="" className="absolute mx-1 my-2 w-5" />
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" className="w-full h-full object-cover rounded-sm" />
                    <h2 className="absolute right-1 px-1 py-1 bottom-1 font-bold uppercase text-right text-base w-3/4 text-shadow-1 text-shadow-2 leading-none font-custom">{category === "popularTV" ? item.original_name : item.title}</h2>
                    {category === "popularTV" && (<img src={`${process.env.assetPrefix}logo-new-episodes.png`} alt="" className="absolute bottom-2 h-5" />)}
                  </a>
                </Link>
              )
            } else {
              return (
                <div
                  key={index}
                  className="overflow-hidden inline-block rounded-sm relative h-full w-44 flex-shrink-0">
                  <img src={`${process.env.assetPrefix}logo-small.png`} alt="" className="absolute mx-1 my-2 w-5" />
                  <img src={`${item.poster_path}`} alt="" className="w-full h-full object-cover" />
                  <h2 className="absolute right-1 px-1 py-1 bottom-1 font-bold uppercase text-right text-base w-3/4 text-shadow-1 text-shadow-2 leading-none font-custom">{category === "popularTV" ? item.original_name : item.title}</h2>
                  {category === "popularTV" && (<img src={`${process.env.assetPrefix}logo-new-episodes.png`} alt="" className="absolute bottom-2 h-5" />)}
                </div>
              )
            }
          })
        }
      </div>
    </div >
  )
}