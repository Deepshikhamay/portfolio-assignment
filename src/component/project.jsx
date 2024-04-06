import React from "react";

function Project({ apiData }) {
  return (
    <div className="bg-slate-900 pb-10 px-[5%] pt-[10%] md:pt-[4%]">
      <hi className="font-bold text-2xl text-white">My Porftolio</hi>
      <div className="h-1 bg-gray-500 w-full mt-3"></div>
      <hi className="font-semibold text-xl text-white mt-3 flex justify-end ml-[30%]">
        My Projects
      </hi>

      {/* Projects section */}

      <div className="md:flex md:justify-between">
        <div className=" left-column mr-0 mt-3 md:w-full w-[100%]">
          {apiData?.projects.slice(0, 7).map((item, id) => (
            <div key={id} className="my-8 hover:shadow-2xl shadow-[#636f7e]">
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  height: "400px",
                }}
              >
                <img
                  src={item.image.url}
                  alt="skillsImage"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                  height={3000}
                  width={3000}
                />
              </div>
              <div className="border border-[#120f26] bg-[#152638] px-6 rounded-md">
                <div className="text-slate-200 text-[12px] pt-[3%]">
                  {" "}
                  {item.techStack}{" "}
                </div>
                <div className="text-slate-200 mt-[3%]"> {item.title} </div>
                <div className="text-slate-200 mt-[3%]">
                  {" "}
                  {item.description}{" "}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="right-column mr-0 mt-3 md:w-full w-[100%] ml-[3%]">
          {apiData?.projects.slice(7, 14).map((item, id) => (
            <div key={id} className="my-8 hover:shadow-2xl shadow-[#636f7e]">
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  height: "400px",
                }}
              >
                <img
                  src={item.image.url}
                  alt="skillsImage"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                  height={3000}
                  width={3000}
                />
              </div>
              <div className="border border-[#120f26] bg-[#152638] px-6 rounded-md">
                <div className="text-slate-200 text-[12px] pt-[3%]">
                  
                  {item.techStack}
                </div>
                <div className="text-slate-200 mt-[3%]"> {item.title} </div>
                <div className="text-slate-200 mt-[3%]">
                  
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
