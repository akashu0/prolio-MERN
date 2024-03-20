import React, { useEffect, useState } from "react";
import Soon from "../../assets/Soon.png";
import Loader from "../Re-use/Loader"; // Assuming this is your loader component

function SettingPage() {
  const [isLoading, setIsLoading] = useState(true); 

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-[900px] h-[500px] rounded-2xl bg-white ml-20 mt-10">
          <img src={Soon} alt="" className="rounded-2xl" />
        </div>
      )}
    </>
  );
}

export default SettingPage;
