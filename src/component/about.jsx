import React from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import desktop from "../image/pic1.jpg";
import laptop from "../image/pic2.jpg";
function About({ apiData }) {
  console.log("apiData ", apiData);
  return (
    <div className="bg-slate-900 pb-10">
      <div className="md:flex">
        <div className="h-[300px] md:h-[700px] w-[100%] md:w-[50%]">
          {/* desktop img*/}
          <div className="hidden md:block">
            <img
              src={apiData?.about.avatar.url}
              alt="aboutImage "
              style={{ height: "90vh", width: "50vw" }}
            />
          </div>
          {/* mobile img*/}
          <div className="block md:hidden">
            <img
              src={apiData?.about.avatar.url}
              alt="aboutImage "
              style={{ height: "63vh", width: "100%" }}
            />
          </div>
        </div>
        {/* user about desc */}
        <div className="md:mx-[8%] mx-[6%] md:mt-[15%] mt-[60%] w-[100%] md:w-[45%] text-slate-200 ">
          <h1 className="py-[20px] text-2xl font-semibold">
            {apiData?.about.title}
          </h1>
          <h1 className=" text-4xl md:text-6xl font-extrabold">
            {apiData?.about.name}
          </h1>
          <p className="mt-[5%] font-medium mr-[60px] ">
            {apiData?.about.description}
          </p>
          <button
            className="bg-slate-800 text-slate-200 px-5 text-xl m-5 border-2
             border-orange-600 hover:text-red-500 rounded-md "
          >
            Contact
          </button>
        </div>
      </div>
      {/* about service section */}
      <div className="mt-[5%] px-[5%] text-white">
        <hi className="font-bold  text-2xl">What I Do</hi>
        <div className="h-1 bg-red-500 w-[25vw] md:w-[7.5vw]"></div>

        <div>
          <div className="md:flex md:justify-between">
            <div className="left-column mr-10">
              {apiData?.services.slice(0, 3).map((item, id) => (
                <div
                  key={id}
                  className="mt-10 text-white font-extrabold text-xl"
                >
                  <div className="flex">
                    <div className="mt-2">
                      <IoStorefrontOutline className="h-10 w-10" />
                    </div>
                    <div className="ml-10">
                      {item.name}
                      <div className="mt-2 font-thin">{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="right-column md:ml-10">
              {apiData?.services.slice(3, 6).map((item, id) => (
                <div
                  key={id}
                  className="mt-10 text-white font-extrabold text-xl"
                >
                  <div className="flex">
                    <div className="mt-2">
                      <IoStorefrontOutline className="h-10 w-10" />
                    </div>
                    <div className="ml-10">
                      {item.name}
                      <div className="mt-2 font-thin">{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* about Testimonial section */}
        <div className="mt-[6%]">
          <hi className="font-bold text-2xl">Testimonials</hi>
          <div className="h-1 bg-red-500 w-[27vw] md:w-[9.5vw]"></div>

          <div className="md:flex md:justify-center md:gap-10">
            {/* image 1 */}
            <div className="mt-10 border border-[#120f26] bg-[#152638] py-8 flex gap-10 rounded-md shadow-sm shadow-black">
              <div className="w-[20%] ml-8">
                <img
                  className="rounded-full h-[85px] w-[85px]"
                  src={desktop}
                  alt=" author-img"
                />
               <div className="mt-3">
                  <div> John Doe </div>
                  <div>Web&nbsp;Development</div>
                </div>
              </div>
              <div className="mt-[5%] mr-[4%] -ml-[8%]">
                <p>
                  Nam tempor commodo mi id sodales. Aenean sit amet nibh nec
                  sapien consequat porta a sit amet diam.
                </p>
              </div>
            </div>

            {/* image 2 */}
            <div className="mt-10 border border-[#120f26] bg-[#152638] py-8 flex gap-10 rounded-md shadow-sm shadow-black">
              <div className="w-[20%] ml-8">
                <img
                  className="rounded-full h-[85px] w-[85px]"
                  src={laptop}
                  alt=" author-img"
                />
                <div className="mt-3">
                  <div> John Doe </div>
                  <div>Web&nbsp;Development</div>
                </div>
              </div>

              <div className="mt-[5%] mr-[4%] -ml-[8%]">
                <p>
                  Nam tempor commodo mi id sodales. Aenean sit amet nibh nec
                  sapien consequat porta a sit amet diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
