import React from "react";
import "./testimonails.css";
import AVT1 from "../../Assets/assets/avatar1.jpeg";
import AVT2 from "../../Assets/assets/avatar2.jpeg";
import AVT3 from "../../Assets/assets/avatar3.jpeg";
import AVT4 from "../../Assets/assets/avatar4.jpeg";
import AVT5 from "../../Assets/assets/avatar5.jpeg";

// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVT1,
    name: "Abhishek Singh",
    review:
      "The projects, document or webpage detailing the previous projects that we've worked.",
  },
  {
    avatar: AVT2,
    name: "Prince Singh",
    review:
      "The projects, document or webpage detailing the previous projects that we've worked.",
  },
  {
    avatar: AVT3,
    name: "Ankit Shuukla",
    review:
      "The projects, document or webpage detailing the previous projects that we've worked.",
  },
  {
    avatar: AVT4,
    name: "Shivam shukla",
    review:
      "The projects, document or webpage detailing the previous projects that we've worked.",
  },
  {
    avatar: AVT5,
    name: "Tina Snow",
    review:
      "The projects, document or webpage detailing the previous projects that we've worked.",
  },
];
const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from peoples</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt=" Avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
