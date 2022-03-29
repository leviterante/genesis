import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";

import { images } from "../../constants";

const Events = () => {
  const events = [
    {
      title: "Birthday Parties",
      price: "$189",
      image: images.birthdays,
      desc1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      desc2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      points: [
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
    },
    {
      title: "Private Parties",
      price: "$389",
      image: images.privates,
      desc1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      desc2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      points: [
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
    },
    {
      title: "Custon Parties",
      price: "$289",
      image: images.customs,
      desc1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      desc2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      points: [
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
    },
  ];
  return (
    <section id="events" className="events">
      <div className="container">
        <div className="section-title">
          <h2>
            Organize Your <span>Events</span> in our Restaurant
          </h2>
        </div>
        <Swiper
          className="events-slider swiper"
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
            {events.map((event, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img src={event.image} alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>{event.title}</h3>
                    <div className="price">
                      <p>
                        <span>{event.price}</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      {event.points.map((point, index) => (
                        <li key={index}>
                          <i>
                            <AiOutlineCheckCircle />
                          </i>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
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

export default Events;
