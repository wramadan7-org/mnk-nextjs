"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderCsr1 from "@/assets/images/slider1.jpg";
import SliderCsr2 from "@/assets/images/slider2.jpg";
import SliderCsr3 from "@/assets/images/slider3.jpg";
import SliderCsr4 from "@/assets/images/slider4.jpg";
import SliderCsr5 from "@/assets/images/slider5.jpg";
import SliderCsr6 from "@/assets/images/slider6.jpg";
import Image from "next/image";

export default function SwiperCsrComponent() {
  return (
    <Swiper
      className="mySwiper"
      slidesPerView={1}
      spaceBetween={0}
      breakpoints={{
        1280: {
          slidesPerView: 3,
        },
        640: { slidesPerView: 2 },
      }}
    >
      <SwiperSlide>
        <Image src={SliderCsr1} width={400} height={400} alt="Slider 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={SliderCsr2} width={400} height={400} alt="Slider 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={SliderCsr3} width={400} height={400} alt="Slider 3" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={SliderCsr4} width={400} height={400} alt="Slider 4" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={SliderCsr5} width={400} height={400} alt="Slider 5" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={SliderCsr6} width={400} height={400} alt="Slider 6" />
      </SwiperSlide>
    </Swiper>
  );
}
