import React from "react";
import "./Review.css";
import Avtar1 from "../../pic/avatar2.jpg";
import Avtar2 from "../../pic/avatar5.jpg";
import Avtar3 from "../../pic/avatar3.jpg";
import Avtar4 from "../../pic/avatar4.jpg";

import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    avatar: Avtar1,
    name: "Mostafa Mancy",
    review:
      "lorem ipsum dolor sit amet, consectetur adip non pro id el elementum et just ei dui element ullamcorper mag nunc sed diam non pro id elit et just ei dui element ullamcorper mag nunc sed diam non pro id elit et just e i dui element u ll  amet, consectetur!",
  },
  {
    avatar: Avtar2,
    name: "Ehab Nabil",
    review:
      "lorem ipsum dolor sit amet, consectetur adip non pro id el elementum et just ei dui element ullamcorper mag nunc sed diam non pro id elit et just ei dui element ullamcorper mag nunc sed diam non pro id elit et just e i dui element u ll  amet, consectetur!",
  },
  {
    avatar: Avtar4,
    name: "Mohamed Zakaria",
    review:
      "lorem ipsum dolor sit amet, consectetur adip non pro id el elementum et just ei dui element ullamcorper mag nunc sed diam non pro id elit et just ei dui element ullamcorper mag nunc sed diam non pro id elit et just e i dui element u ll  amet, consectetur!",
  },
  {
    avatar: Avtar3,
    name: "Mai Ashraf",
    review:
      "lorem ipsum dolor sit amet, consectetur adip non pro id el elementum et just ei dui element ullamcorper mag nunc sed diam non pro id elit et just ei dui element ullamcorper mag nunc sed diam non pro id elit et just e i dui element u ll  amet, consectetur!",
  },
];

const Review = () => {
  return (
    <section id="reviews">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container" 
      loop={true}
      modules={[Pagination]}     
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avtar1" />
              </div>
              <h5 className="client_review">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Review;
