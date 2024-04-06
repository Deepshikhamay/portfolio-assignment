import React from "react";

function Footer({ apiData }) {
  return (
    <div className="bg-slate-900 pb-10">
      <div>
        {apiData?.social_handles.map((item, id) => (
          <div key={id}>
            <div className="flex py-3 ml-[30%]">
              <img
                src={item.image.url}
                alt="socialplatform "
                height={30}
                width={30}
              />
              <div className="text-white font-semibold px-6">
                {item.platform}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
