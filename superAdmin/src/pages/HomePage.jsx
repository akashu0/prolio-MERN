import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

import Navpage from "../components/Navpage";

function HomePage() {
  return (
    <div>
      <NavBar />
      <section className="flex">
        <div className="col-span-2 bg-gray-200 h-screen pl-2 md:col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 h-screen pl-2 md:col-span-10">
          <Navpage />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
