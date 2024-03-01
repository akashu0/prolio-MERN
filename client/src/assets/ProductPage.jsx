import React from 'react'
import { Icon } from '@iconify-icon/react';
import '../index.css'
const DropDownList = ["Product Details", "Social Media Handles", "Business Booster", "Pricing", "Reviews"]
const MoreProducts = [
    {   name: "Stainless Steel",  company: "Anish Industries",   Price: "72"  },
    {   name: "Stainless Steel",  company: "Anish Industries",   Price: "72"  },
    {   name: "Stainless Steel",  company: "Anish Industries",   Price: "72"  },
    {   name: "Stainless Steel",  company: "Anish Industries",   Price: "72"  },
    {   name: "Stainless Steel",  company: "Anish Industries",   Price: "72"  },
    
]

const ProductPage = () => {
    return (

        <div className='w-full h-max flex bg-slate-600'>
            <div className='w-4/5 flex flex-col gap-y-4'>

                {/*############ Section 1 ############## */}
                <div className='w-full flex bg-white flex-col px-6 py-3 justify-center items-center gap-4'>
                    <div className='w-full h-auto   '>
                        <div className='w-full grid grid-flow-col border-[1px] rounded-md '>
                            {DropDownList.map((value, key) => {
                                return (
                                    <button key={key} type='button' className='border-x-[1px] py-2 text-gray-600 font-semibold'> {value}</button>
                                )
                            })}
                        </div>


                        <div className='w-full flex py-1'>
                            <span className='font-semibold text-left'>Product Name : <span className='font-normal'>Casual Shirt </span></span>
                        </div>

                        <div className='w-full flex py-1'>
                            <span className='font-semibold text-left'>Brand Name : <span className='font-normal'>Arrow </span></span>
                        </div>

                        <div className='w-full flex py-1'>
                            <span className='font-semibold text-left'>product ID : <span className='font-normal'>ABDVUDBI </span></span>
                        </div>

                        <div className='w-full flex py-1'>
                            <span className='font-semibold text-left'>Description 1 : <span className='font-normal'>ABDVUDBI </span></span>
                        </div>

                        <div className='w-full flex py-1'>
                            <span className='font-semibold text-left'>Description  : <span className='font-normal'>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has. Lorem Ipsum has </span></span>
                        </div>

                        <div className='w-full flex py-1'>
                            <span className='font-semibold text-left'>Key features <span className='font-normal'>Car air Freshner</span></span>
                        </div>

                        <div className='w-full flex py-1'>
                            <span className='font-semibold text-left'>Product Specifications <span className='font-normal'>Car air Freshner</span></span>
                        </div>

                        <div className='w-full flex py-1'>
                            <span className='font-semibold text-left'>Importer <span className='font-normal'>Aravind Fasshion Ltd</span></span>
                        </div>

                        <div className='w-full flex py-1'>
                            <span className='font-semibold text-left'>Warranty <span className='font-normal'>2 Years</span></span>
                        </div>

                        <div className='w-full flex py-1'>
                            <span className='font-semibold text-left'>Speciality/Uniqueness <span className='font-normal'>Car air Freshner</span></span>
                        </div>

                        <div className='w-full flex py-1'>
                            <span className='font-semibold text-left'>Benefits to user <span className='font-normal'>Car air Freshner</span></span>
                        </div>

                        <div className='w-full flex py-1'>
                            <span className='font-semibold text-left'>What kind of finishes it can make? <span className='font-normal'>Car air Freshner</span></span>
                        </div>

                    </div>

                </div>


                {/*############ Section 2 ############## */}

                <div className='w-full h-auto bg-white px-6 py-3 ' >
                    <h1 className='text-left font-bold'> Products Buying Guide</h1>

                    <div className='w-full flex py-1'>
                        <span className='font-semibold text-left'>Tip: <span className='font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has. Lorem Ipsum has</span></span>
                    </div>
                    <div className='w-full flex py-1'>
                        <span className='font-semibold text-left'>Tip: <span className='font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has. Lorem Ipsum has</span></span>
                    </div>

                    <div className='w-full h-7 flex gap-4'>
                        <input className='w-[90%] ' type="search" name="" id="" placeholder='Add tips about the product Offers users more information' />
                        <button className='px-4 bg-lightBlue-800 text-white rounded-md'>Send</button>
                    </div>
                </div>


                {/*############ Section 3 ############## */}

                <div className='w-full  h-[250px] bg-white pl-6 py-3 flex'>

                    <div className='w-2/5 border-r-[1px] pr-2 flex flex-col gap-y-2'>
                        <h1 className='text-left font-bold'>Opportunities</h1>

                        <div className='w-full flex items-center gap-2'>
                            <div className='w-[95%] border-2 py-3 px-2  border-blue-800 rounded-xl flex justify-between items-center'>
                                <h1 className='text-sm font-bold px-1'>Become an authorized Specialist</h1>
                                <button className='px-3 py-1 text-sm  bg-lightBlue-800 text-white rounded-md'>Apply</button>
                            </div>
                            <div className='w-[20px] h-[20px] border-[1px] border-black flex justify-center items-center rounded-full'>i </div>
                        </div>

                        <div className='w-full flex items-center gap-2'>
                            <div className='w-[95%] border-2 py-3 px-2  border-blue-800 rounded-xl flex justify-between items-center'>
                                <h1 className='text-sm font-bold px-1'>Become a supplier</h1>
                                <button className='px-3 py-1 text-sm  bg-lightBlue-800 text-white rounded-md'>Apply</button>
                            </div>
                            <div className='w-[20px] h-[20px] border-[1px] border-black flex justify-center items-center rounded-full'>i </div>
                        </div>

                        <div className='w-full flex items-center gap-2'>
                            <div className='w-[95%] border-2 py-3 px-2  border-blue-800 rounded-xl flex justify-between items-center'>
                                <h1 className='text-sm font-bold px-1'>Become an Dealer/Reseller</h1>
                                <button className='px-3 py-1 text-sm  bg-lightBlue-800 text-white rounded-md'>Apply</button>
                            </div>
                            <div className='w-[20px] h-[20px] border-[1px] border-black flex justify-center items-center rounded-full'>i </div>
                        </div>

                    </div>



                    <div className='contain w-3/5 px-2 h-full overflow-y-scroll  '>

                        <div className='w-full flex just items-center gap-2'>
                            <h1 className='text-left text-black font-semibold text-sm'>Product Question & Answer</h1>
                            <input className='h-4 py-3 rounded-md' type="search" name="" id="" placeholder='Search' />
                            <button className='px-3 py-1 text-sm  bg-lightBlue-800 text-white rounded-md'>Search</button>

                        </div>

                        <div className='flex justify-between items-center mt-2 '>
                            <span className='text-xs'> Didn't get the right answer you were </span>
                            <button className='px-3 py-1 text-sm  bg-lightBlue-800 text-white rounded-md'>Post Question</button>
                        </div>

                        <div className='w-full text-left flex flex-col border-b-[1px] border-b-slate-900 py-2'>

                            <span className='font-semibold text-left'>Q: <span className='font-normal text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has  text ever </span> <span className='font-normal text-xs'>?</span></span>

                            <span className='font-semibold text-left'>A: <span className='font-medium text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </span> <span className='font-normal text-xs'>?</span></span>

                            <span className='text-xs text-gray-600 flex items-center gap-2'> <Icon icon="ci:octagon-check" /> certified Seller</span>
                        </div>
                        <div className='w-full text-left flex flex-col border-b-[1px] border-b-slate-900 py-2'>

                            <span className='font-semibold text-left'>Q: <span className='font-normal text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has  text ever </span> <span className='font-normal text-xs'>?</span></span>

                            <span className='font-semibold text-left'>A: <span className='font-medium text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </span> <span className='font-normal text-xs'>?</span></span>

                            <span className='text-xs text-gray-600 flex items-center gap-2'> <Icon icon="ci:octagon-check" /> certified Seller</span>
                        </div>



                    </div>
                </div>

                {/*############ Section 4 ############## */}


                <div className='w-full px-2 h-auto'>
                    <div className='w-full  bg-white rounded-lg '>
                    <h1 className='text-left text-black font-semibold text-xl py-4 px-3'>More Products From the seller</h1>
                       
                        
                       
                        <div className='scrollcontainer w-[870px] overflow-x-scroll grid grid-flow-col gap-4 px-3 ' >
                       
                            {MoreProducts.map((value, key) => {
                                return (
                                    <div key={key} className='w-[300px] h-[350px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                        <div className='w-full h-1/2 bg-green-500 rounded-t-xl' ></div>

                                        <div className='w-full h-1/2 px-6 ' >
                                            <h1 className='text-left text-xl font-bold pt-4 pb-9'>{value.name}</h1>
                                            <h1 className='text-left text-base font- text-midnight '>By {value.company}</h1>
                                            <h1 className='text-left text-base font-bold text-midnight '>Price ₹{value.Price} / Piece</h1>
                                        <button className='w-full bg-midnight text-white py-2 rounded-md text-sm font-semibold'> Send Enquiry</button>
                                        </div>
                                    </div>
                                    )
                            })}

                        </div>

                    </div>
                </div>



            </div>
            <div className='w-2/5 '>


            </div>
        </div>
    )
}

export default ProductPage