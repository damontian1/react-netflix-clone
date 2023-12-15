import { useAppContext, fetchData } from '../context/state';
import Carousel from "react-multi-carousel";
import CarouselRightArrow from './CarouselRightArrow'
import CarouselLeftArrow from './CarouselLeftArrow'
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';

export default function MediaCarousel(props) {
  const state = useAppContext();
  const category = props.category;

  const fetchSimilarMedia = (url) => {
    fetchData(url).then(response => {
      state.setSimilarMedia(response.data.results.slice(0, 9))
    });
  }

  return (
    <div className="mb-6">
      <span className="font-semibold mb-1 inline-block capitalize text-sm sm:text-base">{category !== "top" ? category : `Top Picks for Damon`}</span>
      <Carousel
        centerMode={true}
        infinite
        customRightArrow={<CarouselRightArrow />}
        customLeftArrow={<CarouselLeftArrow />}
        deviceType="desktop"
        itemClass="px-0.5"
        renderButtonGroupOutside={true}
        responsive={{
          super_desktop: {
            breakpoint: { max: 5000, min: 1024 },
            items: 4,
            slidesToSlide: 4,
            partialVisibilityGutter: 10
          },
          desktop: {
            breakpoint: { max: 1024, min: 992 },
            items: 4,
            slidesToSlide: 4,
            partialVisibilityGutter: 10
          },
          tablet: {
            breakpoint: { max: 992, min: 640 },
            items: 3,
            slidesToSlide: 3,
            partialVisibilityGutter: 10
          },
        }}

      >
        {
          state[category] && state[category].map((item, index) => {
            return (
              <button
                key={index}
                className="w-full h-full focus:outline-none"
                onClick={() => {
                  let similarMoviesUrl = `https://api.themoviedb.org/3/movie/${item.id}/similar`;
                  let similarShowsUrl = `https://api.themoviedb.org/3/tv/${item.id}/similar`;
                  if (category === "myList") {
                    fetchSimilarMedia(similarShowsUrl);
                  } else {
                    fetchSimilarMedia(similarMoviesUrl);
                  }
                  state.setCurrentMedia(item)
                  localStorage.setItem("currentMedia", JSON.stringify(item))
                  state.setVisible(true);
                }}
              >
                <div className="overflow-hidden rounded-sm relative h-full w-full">
                  <img src={`${process.env.assetPrefix}logo-small.png`} alt="" className="absolute mx-1 my-2 w-5" />
                  <img src={item.backdrop_path ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}` : `${process.env.assetPrefix}missing-poster.jpg`} alt="" className="h-full w-full object-cover" />
                  <h2 className="absolute right-1 px-1 py-1 bottom-1 font-bold uppercase text-right text-xl w-3/4 text-shadow-1 text-shadow-2 leading-none font-custom">{item.title ?? item.name}</h2>
                  {category === "popularTV" && (<img src={`${process.env.assetPrefix}logo-new-episodes.png`} alt="" className="absolute bottom-2 h-5" />)}
                </div>
              </button>
            )
          })
        }
      </Carousel>
    </div >
  )
}