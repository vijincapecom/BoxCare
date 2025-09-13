"use client"
import React from 'react';
import SlotCounter from 'react-slot-counter';
import { img7 } from "../../helpers/imagehelper"
import Image from "next/image"

const Achievement = () => {
    return (
        <section className="bg-[#273E3D] relative z-10">
            <div className="container mx-auto max-w-[85rem] px-10">
                <div className="py-18">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-[18px] font-normal uppercase dm-sans text-[#FFFFFF]">OUR SUCCESS</p>
                                <h2 className='dm-sans font-medium text-[#FFFFFF] text-[20px] sm:text-[38px] xl:text-[44px] mt-1 sm:leading-14'>
                                    Our <span className="text-[#B4DD13]">Achievement</span>
                                </h2>
                            </div>
                            <p className="dm-sans font-normal text-start text-[#FFFFFF] text-[16px] leading-7">
                                Over the years, we've grown from a small packaging unit into a trusted partner for businesses across
                                industries. Our commitment to quality, innovation, and customer satisfaction has earned us recognition and
                                long-lasting relationships.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 md:gap-8 sm:pl-12">
                            <div className="space-y-2 border-l-2 border-white/70 pl-4">
                                <div className="text-[24px] font-normal  text-white md:text-[28px] lg:text-[32px] dm-sans">
                                    <SlotCounter
                                        startValue={0}
                                        value={"10+"}
                                        duration={2}
                                        animateOnVisible
                                    />
                                </div>
                                <p className="dm-sans font-normal text-start text-[#FFFFFF] text-[16px]">Years of Experience</p>
                            </div>
                            <div className="space-y-2  border-l-2 border-white/70 pl-4">
                                <div className="text-[24px] font-normal text-white md:text-[28px] lg:text-[32px] dm-sans">
                                    <SlotCounter
                                        startValue={0}
                                        value={"500 +"}
                                        duration={2}
                                        animateOnVisible
                                    />
                                    
                                </div>
                                <p className="dm-sans font-normal text-start text-[#FFFFFF] text-[16px]">Happy Clients</p>
                            </div>

                            <div className="space-y-2  border-l-2 border-white/70 pl-4">
                                <div className="text-[24px] font-normal  text-white md:text-[28px] lg:text-[32px] dm-sans">
                                     <SlotCounter
                                        startValue={0}
                                        value={"1M +"}
                                        duration={2}
                                        animateOnVisible
                                    />
                                    </div>
                                <p className="dm-sans font-normal text-start text-[#FFFFFF] text-[16px]">Boxes Delivered</p>
                            </div>

                            <div className="space-y-2  border-l-2 border-white/70 pl-4">
                                <div className="text-[24px] font-normal  text-white md:text-[28px] lg:text-[32px] dm-sans">
                                    <SlotCounter
                                        startValue={0}
                                        value={"10 +"}
                                        duration={2}
                                        animateOnVisible
                                    />
                                </div>
                                <p className="dm-sans font-normal text-start text-[#FFFFFF] text-[16px]">Years of Experience</p>
                            </div>
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

export default Achievement