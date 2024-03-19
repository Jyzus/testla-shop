"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import "./slideshow.css";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

const ProductMobileSlildeshow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{ height: "500px" }}
        pagination
        navigation={true}
        autoplay={{ delay: 7000 }}
        modules={[FreeMode, Navigation, Autoplay, Pagination]}
        className="mySwiper2 bg-red-300"
      >
        {images.map((img) => (
          <SwiperSlide key={img} className="">
            <Image
              src={`/products/${img}`}
              alt={title}
              width={300}
              height={300}
              className="object-fill "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductMobileSlildeshow;
