import { Navigation, A11y, FreeMode, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Cards from './Cards';


// const swiperOptions = {

// }


const Sections = ({ id, title, sectionId, data }) => {
  return (
    <section className='h-full w-full' aria-labelledby={sectionId}>
      <div className='h-full w-full'>
        <h2 id={sectionId} className="heading2  m-4 md:m-9">
          {title}
        </h2>

        <div className="relative flex justify-start items-center overflow-hidden">
          <div className="h-auto w-full flex justify-start items-center gap-4 px-4  mb-4 md:mb-9 md:px-9 cards-container" id={id}>

            <Swiper
              modules={[Navigation, A11y, FreeMode]}
              navigation
              freeMode={false}
              slidesPerView={1}
              spaceBetween={16}
              centeredSlides={false}
              centeredSlidesBounds={true}
              a11y={{
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 14,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 3.7,
                  spaceBetween: 28,
                },
                1536: {
                  slidesPerView: 5,
                  spaceBetween: 32,
                },
              }}
              className="!flex items-stretch"
            >
              {data.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="!h-auto flex items-stretch" // ensures equal height
                >
                  <Cards
                    url={card.url}
                    title={card.title}
                    desc={card.desc}
                    price={card.price}
                    oldPrice={card.oldPrice}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Sections





