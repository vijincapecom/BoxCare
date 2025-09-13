"use client"

import * as React from "react"
import { testimonials } from "../../helpers/functionhelper"
import { img7, l14 } from "../../helpers/imagehelper"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Testimonials = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <section className="bg-[#F6F8F0] relative z-10">
            <div className="container mx-auto max-w-[85rem] px-10 ">
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center">
                                <Image src={l14} width={100} height={150} alt="logo" className="w-[80px] h-[100px] sm:w-[100px] sm:h-[130px]" />
                                <Image src={l14} width={100} height={150} alt="logo" className="w-[80px] h-[100px] sm:w-[100px] sm:h-[130px]" />
                            </div>
                            <h1 className="dm-sans font-normal mt-8 text-[#0F172A] text-[20px] sm:text-[38px] xl:text-[43px]">
                                Discover How We’re Making a <br></br>Difference for Our Clients <br></br>
                                <span className="text-[#B4DD13]">{" "}Every Day</span>
                            </h1>
                        </div>
                        <div>

                            <div className="bg-[#273E3D] rounded-lg p-4 md:p-8 relative">
                                <Carousel
                                    plugins={[plugin.current]}
                                    className="w-full"
                                    onMouseEnter={plugin.current.stop}
                                    onMouseLeave={plugin.current.reset}
                                >
                                    <CarouselContent>
                                        {testimonials.map((item, index) => (
                                            <CarouselItem key={index}>
                                                <div className="flex flex-col items-start justify-center px-4 sm:px-10 py-8 sm:py-12">
                                                    <h4 className="dm-sans font-normal text-[#FFFFFF] text-[16px] sm:text-[20px] xl:text-[24px] leading-relaxed">
                                                        {item.description}
                                                    </h4>
                                                    <p className="text-[16px] mt-4 font-normal dm-sans text-[#FFFFFF]/70">
                                                        • {item.title}
                                                    </p>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div className="flex justify-center mt-4 sm:mt-0 sm:block">
                                        <CarouselPrevious className="relative sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2 bg-white text-[#003645] rounded-full shadow-md hover:bg-gray-100" />
                                        <CarouselNext className="relative sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 bg-white text-[#003645] rounded-full shadow-md hover:bg-gray-100" />
                                    </div>
                                </Carousel>

                                <div
                                    className="absolute flex justify-end inset-0 bottom-0 overflow-hidden opacity-10 pointer-events-none z-0"
                                    aria-hidden="true"
                                >
                                    <Image
                                        src={img7}
                                        width={600}
                                        height={100}
                                        alt=""
                                        className="w-full h-[500px] sm:w-[600px]"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Testimonials
