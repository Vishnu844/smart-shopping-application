"use client";

import { slides } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full h-96">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.img}
            alt={slide.title}
            priority
            fill
            sizes="100%"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-xl mb-4">{slide.description}</p>
              <Link
                href={slide.url}
                className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black shadow dark:hover:bg-gray-200"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        «
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        »
      </button>
    </div>
  );
};

export default Carousel;
