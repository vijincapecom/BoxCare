"use client"

import Image from "next/image"
import { img7, l19, l20, l21 } from "../../helpers/imagehelper"

const ContactTwo = () => {
    return (
        <section>
            <div className="container mx-auto max-w-[85rem] px-10">
                <div className="py-8 sm:py-12">
                    <div className="bg-[#273E3D] relative">
                        <div className="py-8 px-8 flex flex-col lg:flex-row items-center">
                            <div className="w-full lg:w-[35%] xl:w-[25%] mb-4 lg:mb-0">
                                <h1 className="text-[#FFFFFF] dm-sans font-nomral text-[20px] sm:text-[38px] text-center lg:text-start">
                                    Our <span className="text-[#B4DD13]">Contact
                                        <br></br>
                                        Details</span> </h1>
                            </div>

                            <div className="hidden lg:block h-20 border-l border-gray-300 px-4"></div>

                            <div className="flex flex-col md:flex-row md:space-x-8 text-white xl:gap-4 space-y-2 md:space-y-0 ">
                                <div className="flex flex-col items-center lg:items-start lg:space-x-2 space-y-2 md:space-y-0">
                                    <Image src={l19} alt="logo" width={50} height={50} className="w-[46px] h-[46px]  transform transition-transform duration-300 ease-in-out 
                                       hover:scale-105 " />
                                    <p className="text-[#FFFFFF] font-medium dm-sans text-center sm:text-start text-[14px] lg:text-[16px]">P.O.BOX 27922, DUBAI, UNITED ARAB EMIRATES</p>
                                </div>
                                <div className="flex flex-col items-center lg:items-start lg:space-x-2 space-y-2 md:space-y-0">
                                    <Image src={l20} alt="logo" width={50} height={50} className="w-[46px] h-[46px]  transform transition-transform duration-300 ease-in-out 
                                       hover:scale-105" />
                                    <p className="text-[#FFFFFF] font-medium dm-sans  text-center sm:text-start text-[14px] lg:text-[16px]">BAUTECH@EMIRATES.NET.AE</p>
                                </div>
                                <div className="flex  flex-col items-center lg:items-start lg:space-x-2 space-y-2 md:space-y-0 ">
                                    <Image src={l21} alt="logo" width={50} height={50} className="w-[46px] h-[46px]  transform transition-transform duration-300 ease-in-out hover:scale-105 " />
                                    <p className="text-[#FFFFFF] font-medium dm-sans  text-center sm:text-start  text-[14px] lg:text-[16px]">+971 04 451 9495</p>
                                </div>
                            </div>

                        </div>

                        <div
                            className="absolute flex justify-end inset-0 bottom-0 overflow-hidden opacity-10 pointer-events-none z-0"
                            aria-hidden="true"
                        >
                            <Image
                                src={img7}
                                width={600}
                                height={100}
                                alt=""
                                className="w-full h-[300px] sm:w-[300px] "
                            />
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default ContactTwo