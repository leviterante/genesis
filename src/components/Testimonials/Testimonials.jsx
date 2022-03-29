import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import { AiFillStar } from "react-icons/ai";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import { images } from "../../constants";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Saul Goodman",
      image: images.testimonial1,
      profession: "Ceo & Founder",
      desc: "Sunt adipisicing irure excepteur duis excepteur exercitation consequat ea laboris enim exercitation amet laborum. Eu consequat aliqua laborum duis dolor dolore non sint. Mollit pariatur fugiat deserunt quis sint dolor pariatur laborum culpa aliqua ipsum minim esse ex. Duis aliqua ipsum magna aute fugiat commodo proident enim eiusmod excepteur et ad. Sunt labore commodo ex esse do qui. Amet ipsum tempor consequat laborum consequat do laboris nisi occaecat sint ipsum. Excepteur voluptate dolore ipsum eu magna veniam ea ipsum labore quis.",
    },
    {
      name: "Sarah Wilson",
      image: images.testimonial2,
      profession: "Freelancer",
      desc: "Sunt adipisicing irure excepteur duis excepteur exercitation consequat ea laboris enim exercitation amet laborum. Eu consequat aliqua laborum duis dolor dolore non sint. Mollit pariatur fugiat deserunt quis sint dolor pariatur laborum culpa aliqua ipsum minim esse ex. Duis aliqua ipsum magna aute fugiat commodo proident enim eiusmod excepteur et ad. Sunt labore commodo ex esse do qui. Amet ipsum tempor consequat laborum consequat do laboris nisi occaecat sint ipsum. Excepteur voluptate dolore ipsum eu magna veniam ea ipsum labore quis.",
    },
    {
      name: "Jena Karlis",
      image: images.testimonial3,
      profession: "Singer",
      desc: "Sunt adipisicing irure excepteur duis excepteur exercitation consequat ea laboris enim exercitation amet laborum. Eu consequat aliqua laborum duis dolor dolore non sint. Mollit pariatur fugiat deserunt quis sint dolor pariatur laborum culpa aliqua ipsum minim esse ex. Duis aliqua ipsum magna aute fugiat commodo proident enim eiusmod excepteur et ad. Sunt labore commodo ex esse do qui. Amet ipsum tempor consequat laborum consequat do laboris nisi occaecat sint ipsum. Excepteur voluptate dolore ipsum eu magna veniam ea ipsum labore quis.",
    },
    {
      name: "Matt Brandon",
      image: images.testimonial4,
      profession: "Entrepreneur",
      desc: "Sunt adipisicing irure excepteur duis excepteur exercitation consequat ea laboris enim exercitation amet laborum. Eu consequat aliqua laborum duis dolor dolore non sint. Mollit pariatur fugiat deserunt quis sint dolor pariatur laborum culpa aliqua ipsum minim esse ex. Duis aliqua ipsum magna aute fugiat commodo proident enim eiusmod excepteur et ad. Sunt labore commodo ex esse do qui. Amet ipsum tempor consequat laborum consequat do laboris nisi occaecat sint ipsum. Excepteur voluptate dolore ipsum eu magna veniam ea ipsum labore quis.",
    },
    {
      name: "John Larson",
      image: images.testimonial5,
      profession: "Designer",
      desc: "Sunt adipisicing irure excepteur duis excepteur exercitation consequat ea laboris enim exercitation amet laborum. Eu consequat aliqua laborum duis dolor dolore non sint. Mollit pariatur fugiat deserunt quis sint dolor pariatur laborum culpa aliqua ipsum minim esse ex. Duis aliqua ipsum magna aute fugiat commodo proident enim eiusmod excepteur et ad. Sunt labore commodo ex esse do qui. Amet ipsum tempor consequat laborum consequat do laboris nisi occaecat sint ipsum. Excepteur voluptate dolore ipsum eu magna veniam ea ipsum labore quis.",
    },
  ];
  return (
    <section id="testimonials" className="testimonials">
      <div className="container position-relative">
        <Swiper
          className="testimonials-slider"
          modules={[Pagination, Autoplay]}
          speed={600}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={"auto"}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
        >
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-item">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="testimonial-img"
                  />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.profession}</h4>
                  <div className="stars">
                    <i>
                      <AiFillStar />
                    </i>
                    <i>
                      <AiFillStar />
                    </i>
                    <i>
                      <AiFillStar />
                    </i>
                    <i>
                      <AiFillStar />
                    </i>
                    <i>
                      <AiFillStar />
                    </i>
                  </div>
                  <p>
                    <i>
                      <RiDoubleQuotesL className="quote-icon-left" />
                    </i>
                    {testimonial.desc}
                    <i>
                      <RiDoubleQuotesR className="quote-icon-right" />
                    </i>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-pagination" />
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
