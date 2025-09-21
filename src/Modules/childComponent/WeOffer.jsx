"use client"

import { materials } from "../../helpers/functionhelper"
import { img7, l7 } from "../../helpers/imagehelper"
import Image from "next/image"


const WeOffer = () => {
    return (
        <section className="bg-[#273E3D] relative z-10">
            <div className="container mx-auto max-w-[75rem] px-10 ">
                <div className="py-12">

                    <h1 className="dm-sans font-medium text-center text-[#FFFFFF] text-[20px] sm:text-[38px] xl:text-[44px]">
                        We Offer Quality, With The
                        <span className="text-[#B4DD13]">{" "}Best <br /> Materials And Service</span>
                    </h1>
                    <div className="bg-white mt-12 rounded-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {materials.map((material, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 border border-[#D5D5D580] rounded-none"
                                >
                                    <div className="p-6 w-full">
                            
                                        <div className="inline-flex items-center justify-center bg-white p-2 rounded-lg shadow-md mb-4">
                                            <Image
                                                src={l7}
                                                width={30}
                                                height={30}
                                                alt="logo"
                                                className="w-[30px] h-[30px]"
                                            />
                                        </div>

                                        <div className="pr-2 sm:pr-4 md:pr-6 lg:pr-8">
                                            <h3 className="text-[18px] font-normal dm-sans text-[#0F172A]">
                                                {material.title}
                                            </h3>
                                            <p className="mt-2 text-[14px] font-normal dm-sans text-[#0F172A] leading-7">
                                                {material.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className="absolute flex justify-end  inset-0   bottom-0  overflow-hidden opacity-10">
                <Image src={img7} width={600} height={100} alt="logo" className="w-full h-[500px] sm:w-[600px]" />
            </div>
        </section>
    )
}

export default WeOffer