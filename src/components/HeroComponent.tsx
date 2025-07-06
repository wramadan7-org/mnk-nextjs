"use client";
// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HomeHero1 from "@/assets/images/home-hero-1.jpg";
import HomeHero2 from "@/assets/images//home-hero-2.jpg";
import HomeHero3 from "@/assets/images//home-hero-3.jpg";

const slides = [HomeHero1, HomeHero2, HomeHero3];

export default function HeroComponent() {
  return (
    <section
      id="hero"
      className="h-[80dvh] w-screen bg-primary overflow-hidden relative"
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.src})`,
              }}
            >
              <div className="w-full h-full bg-black/50 flex items-center justify-center md:justify-start px-4 md:px-20">
                <div className="text-white max-w-lg text-center md:text-left">
                  <p className="text-secondary text-xs sm:text-sm uppercase font-semibold">
                    PT. Multi Nitroma Kimia
                  </p>

                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Safety, Health And Secure Opertaions
                  </h1>

                  <p className="mt-4 text-base md:text-lg">
                    Commited to set high standard of safety in production and
                    operation proccess
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-6 w-fit left-1/2 transform -translate-x-1/2 flex justify-center z-10">
        <div
          id="custom-pagination"
          className="custom-pagination flex gap-2"
        ></div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: white;
          opacity: 0.5;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #ea8225;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
