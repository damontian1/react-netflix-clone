import { useAppContext } from '../context/state';
import Carousel from "react-multi-carousel";
import CarouselRightArrow from './CarouselRightArrow'
import CarouselLeftArrow from './CarouselLeftArrow'
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link'

export default function MediaCarousel(props) {
  const state = useAppContext();
  const category = props.category;
  return (
    <div className="mb-8">
      <span className="font-semibold mb-1 inline-block capitalize text-2xl text-white">{category !== "top" ? category : `Top Picks for Damon`}</span>
      <Carousel
        partialVisible
        infinite
        renderButtonGroupOutside={false}
        customRightArrow={<CarouselRightArrow />}
        customLeftArrow={<CarouselLeftArrow />}
        deviceType="mobile"
        itemClass="px-0.5"
        responsive={{
          mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 3,
            slidesToSlide: 3,
            partialVisibilityGutter: 10
          },
        }}

      >
        {
          state[category] && state[category].map((item, index) => {
            let itemTitle = item.original_title || item.original_name;
            let itemTitleWithDashes = itemTitle.toLowerCase().split(" ").join("-")
            return (
              <Link
                href={`/media/${itemTitleWithDashes}`}
                key={index}
                className="w-full h-full"
              >
                <a
                  onClick={() => {
                    state.setVisible(true);
                    state.setCurrentMedia(item)
                  }}
                  className="overflow-hidden inline-block rounded-sm relative h-full">
                  <img src="/react-netflix-clone/logo-small.png" alt="" className="absolute mx-1 my-2 w-5" />
                  <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" className="w-full h-full object-cover" />
                  <h2 className="absolute right-1 px-1 py-1 bottom-1 font-bold uppercase text-right text-base w-3/4 text-shadow-1 text-shadow-2 leading-none font-custom">{category === "popularTV" ? item.original_name : item.title}</h2>
                  {category === "popularTV" && (<img src="/react-netflix-clone/logo-new-episodes.png" alt="" className="absolute bottom-2 h-5" />)}
                </a>
              </Link>
            )
          })
        }
      </Carousel>
    </div>
  )
}