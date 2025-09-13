"use client"

import { aboutValues } from "../../helpers/functionhelper"
import { l7 } from "../../helpers/imagehelper"
import Image from "next/image"

const CoreValues = () => {
    return (
        <section className=" relative z-0">
            <div className="container mx-auto max-w-[85rem] px-10">
                <div className="py-18">
                    <p className="text-[#475569] dm-sans font-normal text-[18px] text-center">Our Core Values</p>
                    <div className="mt-4">
                        <h1 className="text-[#0F172A] dm-sans font-medium text-[30px] sm:text-[40px] text-center">
                            The Principles That

                            <span className="text-[#B4DD13]"> Drive Everything </span>
                            We Do
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {
                            aboutValues.map((value, index) => (
                                <div
                                    key={index}
                                    className="flex items-center bg-[#F6F8F0] rounded-sm 
                                       transform transition-transform duration-300 ease-in-out 
                                       hover:scale-105 hover:shadow-lg"
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
                                                {value.title}
                                            </h3>
                                            <p className="mt-2 text-[14px] font-normal dm-sans text-[#0F172A] leading-7">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}
export default CoreValues