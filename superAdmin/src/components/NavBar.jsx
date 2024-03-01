import React from "react";

function NavBar() {
  return (
    <div className="">
      <div className="antialiased bg-blue-800 dark-mode:bg-gray-900">
        <div className="w-full text-white bg-blue-800 dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex items-center p-4">
              <a
                href="#"
                className="text-lg font-semibold tracking-widest text-white  rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                Prolio
              </a>
              <div className="relative">
                <button className="flex items-center px-6 py-2  text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  <span>Category</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {/* Category dropdown menu */}
              </div>
            </div>
            <div className="flex items-center justify-center flex-grow">
              <div className="relative mx-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 mt-2 border w-full text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                />
                {/* Search icon */}
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button className="px-4 py-2 mt-2 mr-4 text-sm font-semibold  rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 text-gray-900 focus:text-gray-900 bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Join Prolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
