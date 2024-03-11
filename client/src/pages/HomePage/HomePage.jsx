import React, { useEffect, useState } from "react";
import CommonNavbar from "../../components/Navbar/CommonNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";

function HomePage() {
  // const navigate = useNavigate();
  // const [cardsData, setCardsData] = useState([]);

  // const apiURL = process.env.REACT_APP_API_URL;
  // useEffect(() => {
  //   const apiUrl = `${apiURL}/product/getall-product`;

  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       console.log(response.data);
  //       setCardsData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  return (
    <>
      <CommonNavbar />
      <div className="mt-16 flex ">
        <div className="w-[230px] bg-blue-800">
          <Sidebar />
        </div>
        <div className="  w-full h-screen">
          <Routes>
            <Route path="/home" element={<LandingPage />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default HomePage;
