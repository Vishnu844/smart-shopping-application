import React from "react";
import { stats } from "@/constants";
import about from "../../../public/images/about-image.jpg";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <Layout>
        <section className="overflow-hidden sm:grid sm:grid-cols-2">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                About Smart Shopping
              </h2>

              <p className="hidden text-gray-500 md:mt-4 md:block">
                Welcome to Smart Shopping, your one-stop shop for all your
                needs. From groceries to furniture and electronics to clothes,
                we provide you the best quality and services from our end. We
                carefully curate our selection to bring you the best on the
                market.
              </p>

              <div className="mt-4 md:mt-8">
                <Link
                  href="/"
                  className="inline-block rounded bg-black px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-black"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>

          <Image
            alt="about-image"
            src={about}
            className="h-56 w-full object-cover sm:h-full"
          />
        </section>
        <section className="pt-8">
          <div className="max-w-screen-xl mx-auto p-12 rounded text-gray-600 gap-x-12 justify-around md:px-8 lg:flex">
            <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
              <h3 className="text-3xl font-bold text-gray-900 md:text-4xl">
                We do our best to make customers always happy
              </h3>
              <p className="mt-3 max-w-xl mx-auto lg:mx-0">
                When you shop with us, you're not just buying a product – you're
                investing in quality, supporting ethical business practices, and
                joining a community of like-minded individuals who deserves the
                best.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <ul className="flex flex-col items-start gap-x-12 justify-center divide-y sm:divide-y-0 sm:flex-row lg:grid lg:grid-cols-2">
                {stats.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-center w-full px-4 py-6 sm:w-auto lg:py-4"
                  >
                    <h4 className="text-4xl text-yellow-500 font-semibold">
                      {item.data}
                    </h4>
                    <p className="mt-3 font-medium">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Want updates on latest Arrivals??
              </h2>

              <p className="hidden text-gray-500 sm:mt-4 sm:block">
                Make sure to subscribe the newsletter, so that we won't let you
                miss out on anything.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-xl">
              <form action="#" className="sm:flex sm:gap-4">
                <div className="sm:flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-gray-100"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-black px-5 py-3 text-white transition focus:outline-none focus:ring hover:bg-gray-800 focus:ring-black sm:mt-0 sm:w-auto"
                >
                  <span className="text-sm font-medium"> Sign Up </span>
                  <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
