import React from "react";

function SocialComponent({ data }) {
  return (
    <>
      <div className="w-full  py-3 bg-white ">
        {data?.socialMediaHandles
          ? data.socialMediaHandles.map((handle, index) => (
              <h5 key={index} className="font-semibold text-left bg-white">
                {handle.handle}:
                <span className="font-semibold px-3 underline bg-white">
                  {handle.url}
                </span>
              </h5>
            ))
          : null}
      </div>
    </>
  );
}

export default SocialComponent;
