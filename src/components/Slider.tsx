import styles from "../styles/Slider.module.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useColorMode } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// Your image imports
import p1 from "../assets/freshers/p1.jpeg";
import p2 from "../assets/freshers/p2.jpeg";
import p3 from "../assets/freshers/p3.jpeg";
import nur1 from "../assets/others/nur1.jpeg";
import lib1 from "../assets/others/lib1.jpeg";
import group1 from "../assets/others/group1.jpeg";
import gra1 from "../assets/graduation-images/grad1.webp";

import InfoCard from "../cards/InfoCard"; // Ensure InfoCard is correctly imported

const Slider = () => {
  const { colorMode } = useColorMode();

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
      buttonInfo: "Read more",
      image: nur1,
      desc: "Explore a dynamic community of dedicated students at our nursing school. Engage in hands-on learning, cutting-edge research, and compassionate patient care. Join us in shaping the future of healthcare excellence.",
    },
    {
      id: 3,
      header: "VIBRANT CAMPUS LIFE",
      buttonInfo: "Explore Now",
      image: p2,
      desc: "Experience a campus buzzing with diverse activities, clubs, and events. Our vibrant community fosters personal growth, strong friendships, and unforgettable memories for every student.",
    },
    {
      id: 4,
      buttonInfo: "Apply Now",
      image: gra1,
      header: "JANUARY 2024 ADMISSIONS",
      desc: "Admissions Open! Join us for an enriching academic experience. Apply now for our upcoming January intake.",
    },
    {
      id: 5,
      buttonInfo: "Learn More",
      image: lib1,
      header: "Immerse in Academic Excellence",
      desc: "Our state-of-the-art library offers a tranquil haven for students, fostering a conducive learning environment. Dive into a world of knowledge, research, and academic exploration as you embark on your educational journey with us.",
    },
    {
      id: 6,
      buttonInfo: "Join Us",
      image: group1,
      header: "Community of Achievers",
      desc: "Capturing a moment of unity and camaraderie, our students celebrate shared aspirations and accomplishments. Together, we form a vibrant community where each individual contributes to the collective success of our academic family.",
    },
    {
      id: 7,
      buttonInfo: "View Programs",
      image: p3,
      header: "SUCCESS STORIES",
      desc: "Our alumni are making a significant impact globally, a testament to the rigorous education and holistic development they received at Heritage Christian University College.",
    },
  ];

  return (
    <section className={styles.sliderSection} data-theme={colorMode}>
      <h2 className={styles.sectionHeader}>
        <span>What's Happening at Heritage!</span>
      </h2>

      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
          spaceBetween={20} // Added default space between slides
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 4000, // Slightly faster autoplay
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 25, // Adjusted spacing
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 35, // Adjusted spacing
            },
          }}
        >
          {infoCards.map((item) => (
            <SwiperSlide key={item.id}>
              {/* No need to pass colorMode if InfoCard uses useColorMode internally */}
              <InfoCard
                title={item.header}
                buttonInfo={item.buttonInfo}
                desc={item.desc}
                image={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
