"use client"
import React from 'react'
import { Button } from "../../components/ui/button"
import Image from 'next/image'
import { img6, l15, l7 } from '../../helpers/imagehelper'
import { features } from '../../helpers/functionhelper'
import { useRouter } from "nextjs-toploader/app";

const WhyChoose = () => {
    const router = useRouter()
    const handleContact = () => {
        router.push('/contact')
    }
    return (
        <section>
            <div className="container mx-auto max-w-[85rem] px-10">
                <div className="py-18">
                    <div className='grid lg:grid-cols-2 gap-4 sm:gap-8'>
                        <div>
                            <h6 className="text-[16px] text-[#475569] dm-sans font-normal">Why Choose Us</h6>
                            <h1 className='dm-sans font-medium text-[#0F172A] text-[20px] sm:text-[38px] xl:text-[44px] mt-1 sm:leading-14 mt-2'>Your Brand Deserves the
                                <br />
                                Best - <span className='text-[#B4DD13]'>Here’s Why We Deliver</span>
                            </h1>
                        </div>

                        <div>
                            <p className='text-[#0F172A] dm-sans font-normal text-[14px] leading-7'> With years of experience in the packaging industry, we specialize in manufacturing durable,
                                customizable, and eco-friendly packing
                                boxes for a wide range of industries — including eCommerce, retail, FMCG,
                                electronics, food & beverages, and more.</p>

                            <div className="flex justify-start mt-4">
                                <Button className="bg-[#BFFF00] hover:bg-[#BFFF00] text-[#0F1419] dm-sans font-normal cursor-pointer text-[17px] py-6 rounded-[6.5rem] transition-all duration-200 hover:scale-105"
                                    onClick={handleContact}>
                                    <span className='px-2 flex items-center'> Enquiry Now
                                        <Image src={l15} width={6} height={6} alt="logo" className="w-[10px] h-[10px] ml-2" />
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse gap-8 items-stretch">
                        <div className="flex w-full">
                            <div className="mt-12 w-full">
                                <Image
                                    src={img6}
                                    width={500}
                                    height={500}
                                    alt="logo"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="flex w-full">
                            <div className="mt-12 rounded-lg border bg-white w-full">
                                <ul className="divide-y">
                                    {features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="grid grid-cols-[72px_1fr] items-center gap-4"
                                        >
                                            <div className="flex items-center justify-center">
                                                <Image
                                                    src={l7}
                                                    width={30}
                                                    height={30}
                                                    alt="logo"
                                                    className="w-[24px] h-[24px]sm:w-[30px] sm:h-[30px]"
                                                />
                                            </div>
                                            <div className="sm:pl-2 sm:pl-4 border-l">
                                                <div className="p-4 md:p-3.5">
                                                    <h3 className="text-[18px] font-normal dm-sans text-[#0F172A]">
                                                        {feature.title}
                                                    </h3>
                                                    <p className="mt-2 text-[14px] font-normal dm-sans text-[#0F172A] leading-7">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default WhyChoose