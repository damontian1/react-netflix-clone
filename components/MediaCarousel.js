import { useAppContext } from '../context/state';
import Carousel from "react-multi-carousel";
import CarouselRightArrow from './CarouselRightArrow'
import CarouselLeftArrow from './CarouselLeftArrow'
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';
import axios from 'axios';

export default function MediaCarousel(props) {
  const state = useAppContext();
  const category = props.category;

  const fetchSimilarMedia = (url) => {
    axios
      .get(url)
      .then(response => {
        state.setSimiliarMedia(response.data.results.slice(0, 9))
      })
  }

  return (
    <div className="mb-6">
      <span className="font-semibold mb-1 inline-block capitalize text-sm sm:text-base">{category !== "top" ? category : `Top Picks for Damon`}</span>
      <Carousel
        // centerMode={true}
        partialVisible={true}
        infinite
        renderButtonGroupOutside={false}
        customRightArrow={<CarouselRightArrow />}
        customLeftArrow={<CarouselLeftArrow />}
        deviceType="desktop"
        itemClass="px-0.5"
        responsive={{
          super_desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 5,
            partialVisibilityGutter: 9
          },
          desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 4,
            slidesToSlide: 4,
            partialVisibilityGutter: 10
          },
          tablet: {
            breakpoint: { max: 768, min: 640 },
            items: 3,
            slidesToSlide: 3,
            partialVisibilityGutter: 10
          },
        }}

      >
        {
          state[category] && state[category].map((item, index) => {
            if (category !== "myList") {
              return (
                <button
                  key={index}
                  className="w-full h-full focus:outline-none"
                  onClick={() => {
                    fetchSimilarMedia(`https://api.themoviedb.org/3/movie/${item.id}/recommendations?api_key=631627e688738d84a1cae51aa035b23a`)
                    state.setCurrentMedia(item)
                    localStorage.setItem("currentMedia", JSON.stringify(item))
                    state.setVisible(true);
                  }}
                >
                  <div className="overflow-hidden rounded-sm relative">
                    <img src={`${process.env.assetPrefix}logo-small.png`} alt="" className="absolute mx-1 my-2 w-5" />
                    <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="" />
                    <h2 className="absolute right-1 px-1 py-1 bottom-1 font-bold uppercase text-right text-xl w-3/4 text-shadow-1 text-shadow-2 leading-none font-custom">{category === "popularTV" ? item.original_name : item.title}</h2>
                    {category === "popularTV" && (<img src={`${process.env.assetPrefix}logo-new-episodes.png`} alt="" className="absolute bottom-2 h-5" />)}
                  </div>
                </button>
              )
            } else {
              return (
                <button key={index}
                  className="w-full h-full focus:outline-none "
                >
                  <div className="overflow-hidden rounded-sm relative">
                    <img src={`${process.env.assetPrefix}logo-small.png`} alt="" className="absolute mx-1 my-2 w-5" />
                    <img src={`${item.backdrop_path}`} alt="" />
                    <h2 className="absolute right-1 px-1 py-1 bottom-1 font-bold uppercase text-right text-xl w-3/4 text-shadow-1 text-shadow-2 leading-none font-custom">{category === "popularTV" ? item.original_name : item.title}</h2>
                    {category === "popularTV" && (<img src={`${process.env.assetPrefix}logo-new-episodes.png`} alt="" className="absolute bottom-2 h-5" />)}
                  </div>
                </button>
              )
            }

          })
        }
      </Carousel>
    </div >
  )
}