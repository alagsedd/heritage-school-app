import styles from "../styles/Slider.module.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import p1 from "../assets/freshers/p1.jpeg";
import p2 from "../assets/freshers/p2.jpeg";
import p3 from "../assets/freshers/p3.jpeg";
import nur1 from "../assets/others/nur1.jpeg";
import lib1 from "../assets/others/lib1.jpeg";
import group1 from "../assets/others/group1.jpeg";
import gra1 from "../assets/graduation-images/grad1.webp";
import InfoCard from "../cards/InfoCard";

const Slider = () => {

  const infoCards = [
    {
      id: 1,
      header: "WELCOME FRESHERS",
      buttonInfo: "Enroll now",
      image: p1,
      desc: "New students at Heritage Christian University College bring energy and curiosity to campus life. Engaging in orientation, connecting with peers, and exploring academics, they thrive in a supportive environment, setting the stage for a transformative higher education experience.",
    },
    {
      id: 2,
      header: "Discover Excellence in Nursing Education",
      nur1: "Read more",
      buttonInfo: "Read more",
      image: nur1,
      desc: " Explore a dynamic community of dedicated students at our nursing school. Engage in hands-on learning, cutting-edge research, and compassionate patient care. Join us in shaping the future of healthcare excellence.",
    },
    {
      id: 3,
      header: "WELCOME FRESHERS",
      buttonInfo: "Read more",
      image: p2,
      desc: "New students at Heritage Christian University College bring energy and curiosity to campus life. Engaging in orientation, connecting with peers, and exploring academics, they thrive in a supportive environment, setting the stage for a transformative higher education experience.",
    },
    {
      id: 4,
      buttonInfo: "Apply Now",
      image: gra1,
      header: "JANUARY 2024 ADMISSIONS",
      desc: "Admissions Open! Join us for an enriching academic experience. Apply now.",
    },
    {
      id: 5,
      buttonInfo: "Apply Now",
      image: lib1,
      header: "Immerse in Academic Excellence",
      desc: "Our state-of-the-art library offers a tranquil haven for students, fostering a conducive learning environment. Dive into a world of knowledge, research, and academic exploration as you embark on your educational journey with us.",
    },
    {
      id: 6,
      buttonInfo: "Apply Now",
      image: group1,
      header: "Community of Achievers",
      desc: "Capturing a moment of unity and camaraderie, our students celebrate shared aspirations and accomplishments. Together, we form a vibrant community where each individual contributes to the collective success of our academic family.",
    },

    {
      id: 7,
      buttonInfo: "Apply Now",
      image: p3,
      header: "WELCOME FRESHERS",
      desc: "New students at Heritage Christian University College bring energy and curiosity to campus life. Engaging in orientation, connecting with peers, and exploring academics, they thrive in a supportive environment, setting the stage for a transformative higher education experience.",
    },
  ];

  return (
    <>
      <div className={styles.parent}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          // navigation

          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 5000,
          }}
        >
          {infoCards.map((item, index) => (
            <SwiperSlide key={index}>
              {
                <InfoCard
                  title={item.header}
                  key={item.id}
                  buttonInfo={item.buttonInfo}
                  desc={item.desc}
                  image={item.image}
                />
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
