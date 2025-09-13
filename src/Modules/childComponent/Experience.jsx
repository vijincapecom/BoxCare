"use client"
import {l18 } from "../../helpers/imagehelper"
import Image from "next/image"

const Experience = () => {
    return (
        <section className="bg-[#F6F8F0] relative z-0">
            <div className="container mx-auto max-w-[85rem] px-10">
                <div className="py-18">
                    <h1 className="dm-sans font-nomral text-start text-[#0F172A] text-[20px] sm:text-[38px] xl:text-[44px] mt-4">
                        Who We Are – Delivering
                        <span className="text-[#B4DD13]">
                            {" "}
                            Quality Packaging Solutions
                        </span>
                        <br></br>
                        That Protect, Impress, and Inspire
                    </h1>

                    <p className="dm-sans font-normal text-start text-[#0F172A] text-[16px] mt-4 sm:w-[90%] md:w-[90%] lg:[70%] leading-8">At Box Care, we believe packaging is more than just protection — it’s
                        the first impression your product makes. We are a leading manufacturer
                        of custom packaging boxes dedicated to helping businesses showcase their products
                        with strength, style, and sustainability.</p>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 items-center mt-6 sm:mt-12">

                       <div className="flex flex-col items-center sm:items-start text-center transition-transform duration-200 hover:scale-105">
                           <Image src={l18} width={500} height={150} alt="logo" className="w-full h-full"/>
                      </div>
                   
                      <div>
                        <h4 className="dm-sans font-normal text-[20px] sm:text-[24px] lg:text-[28px] text-[#0F172A]">Our Mission</h4>

                        <p className="dm-sans font-normal text-[14px] text-[#0F172A] leading-8 mt-3">To become the most trusted packaging partner for businesses worldwide by combining innovation, 
                            sustainability, and reliability in every box we make.</p>
                      </div>

                              <div>
                        <h4 className="dm-sans font-normal text-[20px] sm:text-[24px] lg:text-[28px] text-[#0F172A]">Our vision</h4>

                        <p className="dm-sans font-normal text-[14px] text-[#0F172A] leading-8 mt-3">To become the most trusted packaging partner for businesses worldwide by combining innovation,
                             sustainability, and reliability in every box we make.</p>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience