import styles from "../styles/Slider.module.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
// import p1 from "../assets/graduation-images/grad1.webp";
import p2 from "../assets/freshers/p10.jpeg";
import p3 from "../assets/freshers/p2.jpeg";
import p4 from "../assets/freshers/p3.jpeg";
import p5 from "../assets/freshers/p4.jpeg";
import p6 from "../assets/freshers/p5.jpeg";
import p7 from "../assets/freshers/p6.jpeg";
import p8 from "../assets/freshers/p7.jpeg";
import p9 from "../assets/freshers/p8.jpeg";
import p10 from "../assets/freshers/p9.jpeg";

const Slider = () => {
  const slides = [p5, p4, p2, p3, p6, p7, p8, p9, p10];

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.slide1}>
          <h1 className={styles.header}>
            <span>Welcome freshers</span>
          </h1>
          <p>
            At Heritage Christian University College, freshmen bring a fresh
            energy and curiosity to campus life. As they navigate their first
            year, these students engage in orientation activities, connect with
            their peers, and explore academic pursuits. The university is
            committed to providing a supportive environment where freshmen can
            thrive academically and personally, setting the stage for a
            transformative higher education experience
          </p>
        </div>
        <div className={styles.slide2}>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 4000,
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                {" "}
                <img
                  key={index}
                  className={styles.image}
                  src={item}
                  alt="Your browser doesn't support this image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider;
