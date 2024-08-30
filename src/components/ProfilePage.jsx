"use client";

import Link from "next/link";
import { FaPenSquare } from "react-icons/fa";
import React from "react";
import Layout from "./Layout";
import axios from "axios";
import { BASE_URL } from "@/constants";

const ProfilePage = () => {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const response = await axios.get(BASE_URL + "/api/user");
        setUser(response.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchLoggedInUser();
  }, []);

  console.log(user);
  return (
    <Layout>
      <div>
        <div className="px-20 py-8">
          <figure className="flex items-center">
            <div className="inline-block">
              <label htmlFor="image" className="cursor-pointer">
                <span className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                  <img
                    src={user.photo}
                    className="w-12 h-12 rounded-full"
                    alt={user.userName}
                  />
                </span>
                <input
                  type="file"
                  id="image"
                  accept="image/png, image/jpg, image/jpeg"
                  className="absolute top-4 right-14 hidden"
                />
              </label>
            </div>
            <figcaption className="ml-4">
              <h6 className="text-lg font-semibold">{user.username}</h6>
              <p>
                {/* User details */}
                <Link href="/profilesetting" className="px-2">
                  <FaPenSquare />
                </Link>
              </p>
            </figcaption>
          </figure>
          <hr className="my-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <article className="bg-gray-100 p-4 rounded">
                <b className="mx-2 text-gray-500">
                  <i className="fa fa-map-marker-alt"></i>
                </b>
                Moscow city, Street name, Building lenin, House 77
              </article>
            </div>
          </div>
          <Link
            href="/profilesetting"
            className="btn bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            <i className="mr-2 fa fa-plus"></i> Add new address
          </Link>

          <hr className="my-8" />
          <h5 className="text-xl font-semibold mb-4"> Your orders </h5>

          <article className="border border-blue-500 rounded-lg">
            <div className="p-6">
              <header className="flex flex-col lg:flex-row justify-between">
                <div>
                  <h6 className="mb-0">
                    Order ID: 9088 <i className="dot"></i>
                    <span className="text-red-500"> pending</span>
                  </h6>
                  <span className="text-gray-500">Date: 16 December 2018</span>
                </div>
                <div className="mt-4 lg:mt-0">
                  <Link
                    href="#"
                    className="btn border border-red-500 text-red-500 hover:bg-red-500 hover:text-white mr-2"
                  >
                    Cancel order
                  </Link>
                  <Link
                    href="#"
                    className="btn bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Track order
                  </Link>
                </div>
              </header>
              <hr className="my-4" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <p className="mb-0 text-gray-500">Contact</p>
                  <p className="m-0">
                    Mike Johnatan <br /> Phone: 371-295-9131 <br /> Email:
                    info@mywebsite.com
                  </p>
                </div>
                <div className="lg:border-l lg:pl-6">
                  <p className="mb-0 text-gray-500">Shipping address</p>
                  <p className="m-0">
                    United States <br />
                    3601 Old Capitol Trail, Unit A-7, Suite 170777, Wilmington,
                    DE 19808
                  </p>
                </div>
                <div className="lg:border-l lg:pl-6">
                  <p className="mb-0 text-gray-500">Payment</p>
                  <p className="m-0">
                    <span className="text-green-500"> Visa **** 4216 </span>{" "}
                    <br />
                    Shipping fee: $56 <br />
                    Total paid: $456
                  </p>
                </div>
              </div>
              <hr className="my-4" />
              <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <li>
                  <figure className="flex mb-4">
                    <div className="mr-4">
                      <img
                        width="72"
                        height="72"
                        src="images/items/10.jpg"
                        className="w-18 h-18 rounded border"
                        alt=""
                      />
                    </div>
                    <figcaption>
                      <p className="font-semibold">
                        T-shirts with multiple colors
                      </p>
                      <strong> 2x = $339.90 </strong>
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <figure className="flex mb-4">
                    <div className="mr-4">
                      <img
                        width="72"
                        height="72"
                        src="images/items/11.jpg"
                        className="w-18 h-18 rounded border"
                        alt=""
                      />
                    </div>
                    <figcaption>
                      <p className="font-semibold">Gaming Headset 32db Black</p>
                      <strong> 2x = $339.90 </strong>
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <figure className="flex mb-4">
                    <div className="mr-4">
                      <img
                        width="72"
                        height="72"
                        src="images/items/7.jpg"
                        className="w-18 h-18 rounded border"
                        alt=""
                      />
                    </div>
                    <figcaption>
                      <p className="font-semibold">
                        Apple Watch Series 4 Space Gray
                      </p>
                      <strong> 2x = $339.90 </strong>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
