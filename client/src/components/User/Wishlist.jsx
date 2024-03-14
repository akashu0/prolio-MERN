import React from "react";
import bagImg from "../../assets/BagImg.png";
import deleteIcon from "../../assets/deleteIcon.png";

const data = [
  {
    image: bagImg,
    productName: "Bag",
    description: "Hai this hai product product  is most wonderfull in the world",
    colour: "Red",
    composition: "100% calf leather"
  },
  {
    image: bagImg,
    productName: "School Bag",
    description: "Hai this hai product is most wonderfull in the world",
    colour: "Red",
    composition: "100% calf leather"
  },
  {
    image: bagImg,
    productName: "Travel Bag",
    description: "Hai this hai product is most wonderfull in the world",
    colour: "Red",
    composition: "100% calf leather"
  },
  {
    image: bagImg,
    productName: "Gym Bag",
    description: "Hai this hai product is most wonderfull in the world",
    colour: "Red",
    composition: "100% calf leather"
  },
];

function Wishlist() {
  return (
    <>
      <div className="ml-20 pt-8">
        <h1 className="text-4xl font-semibold">Wishlist</h1>
      </div>
      <div className="ml-16 w-[1000px] h-[500px] overflow-auto  pb-5 mt-3  rounded-lg  bg-white ">
        <div className=" bg-transparent ml-10 mt-5 gap-5 pt-3 flex flex-wrap ">
         
          {data.map((item, index) => (
            <div key={index} className="w-[450px] h-[200px] flex  rounded-md">
              <div className="rounded-md bg-transparent mt-10 ml-10">
                <img src={item.image} alt="" className="w-32 h-36 rounded-md" />
              </div>
              <div className="pt-6 px-3 w-1/2 flex-grow">
                <h1 className="text-xl font-bold">{item.productName}</h1>
                <p className="text-sm pt-2 line-clamp-5">{item.description}</p>
                <h5 className="pt-3 text-sm">
                  Color: <span>{item.colour}</span>
                </h5>
                <h5 className=" text-sm">
                  Composition: <span>{item.composition}</span>
                </h5>
                {/* Additional dynamic elements can be added here */}
                <div className="flex gap-4 pt-2">
                  <img src={deleteIcon} alt="deleteIcon" />
                  <button className="bg-blue-900 w-28 rounded-lg text-sm text-white">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
