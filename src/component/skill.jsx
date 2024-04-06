import React from "react";

function Skill({ apiData }) {
  return (
    <div className="bg-slate-900 pb-10 px-[5%] pt-[10%] md:pt-[2%]">
      <hi className="font-bold text-2xl text-white">My Skills</hi>
      <div className="h-1 bg-red-500 w-[25vw] md:w-[8.5vw]"></div>

      {/* skill section */}

      <div className="md:flex md:justify-between">
        <div className=" left-column mr-10 mt-3 border md:w-[60%] w-[100%]  border-[#120f26] bg-[#152638] py-8 px-10 gap-10 rounded-md shadow-sm shadow-black">
          {apiData?.skills.slice(0, 10).map((item, id) => (
            <div key={id}>
              <div className="flex py-2 ml-[30%]">
                <img
                  src={item.image.url}
                  alt="skillsImage"
                  height={30}
                  width={30}
                />
                <div className="text-white ml-10"> {item.name} </div>
              </div>
            </div>
          ))}
        </div>

        <div className="right-column border md:w-[60%] w-[100%] mt-[10%] md:mt-[1%] border-[#120f26] bg-[#152638] py-8 px-10 gap-10 rounded-md shadow-sm shadow-black">
          {apiData?.skills.slice(10, 20).map((item, id) => (
            <div key={id}>
              <div className="flex py-2 ml-[30%]">
                <img
                  src={item.image.url}
                  alt="skillsImage"
                  height={30}
                  width={30}
                />
                <div className="text-white ml-10"> {item.name} </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
