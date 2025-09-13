"use client"

import { Button } from "../../components/ui/button"
import { socialImages } from "../../helpers/functionhelper"
import { img7, l15 } from "../../helpers/imagehelper"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useRouter } from "nextjs-toploader/app";

const BrandAcross = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleEnquiry = () => {
        router.push('/contact')
    }
    return (
        <section>
            <div className="container mx-auto max-w-[85rem] px-10 ">
                <div className="py-18">
                    <div className='grid lg:grid-cols-2 items-center gap-8'>
                        <div>
                            <h1 className='dm-sans font-medium text-[#0F172A] text-[20px] sm:text-[38px] xl:text-[44px] mt-1 sm:leading-14 mt-2'>Trusted By Leading <br />
                                <span className='text-[#B4DD13]'>Brands Across Industries</span>
                            </h1>
                            <p className='text-[#0F172A] dm-sans font-normal text-[14px] leading-7 mt-2 sm:mt-4'>We’re proud to work with businesses of all sizes — from small startups to well-known brands — providing them with packaging that protects their products and elevates their brand image.</p>
                            <div className="flex justify-start mt-4">
                                <Button className="bg-[#B4DD13] cursor-pointer hover:bg-[#BFFF00] text-[#0F1419] dm-sans font-normal text-[17px] py-3 rounded-[6.5rem] transition-all duration-200 hover:scale-105"
                                    onClick={handleEnquiry}
                                >
                                    <span className='px-2 flex items-center'>Enquiry Now
                                        <Image src={l15} width={6} height={6} alt="logo" className="w-[10px] h-[10px] ml-2" />
                                    </span>
                                </Button>
                            </div>
                        </div>

                        <div>
                            <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-3 gap-8">
                                {
                                    socialImages.map((image, index) => (
                                        <div key={index} className="flex items-center justify-center border border-[#D5D5D5] rounded-sm  transform transition-transform duration-300 ease-in-out 
                                       hover:scale-105 hover:shadow-lg">
                                            <Image src={image?.img} width={100} height={100} alt="logo" className="w-[90px] h-[56px] sm:w-[100px] sm:h-[56px] px-1 " />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {pathname !== "/about" || pathname !== "/contact" && (
                        <div className="py-4 sm:py-8 md:py-12">
                            <div className="bg-[#273E3D] mt-12 rounded-sm py-8 relative ">

                                <h4 className='dm-sans font-medium text-[#FFFFFF] text-[24px] sm:text-[42px] xl:text-[52px] mt-1 sm:leading-18 mt-2  px-4 sm:px-0 sm:ml-18'>Ready to Upgrade Your <br></br> Packaging?</h4>

                                <div className="flex justify-start px-4 sm:px-0 sm:ml-18 mt-4 relative z-10">
                                    <Button className="bg-[#FFFFFF] hover:bg-[#FFFFFF] text-[#000000] dm-sans font-normal cursor-pointer text-[14px] sm:text-[17px] py-6 rounded-[6.5rem] transition-all duration-200 hover:scale-105"
                                    onClick={handleEnquiry}
                                    >
                                        <span className="px-2 flex items-center">
                                            Request a Quote
                                            <Image src={l15} width={6} height={6} alt="logo" className="w-[10px] h-[10px] ml-2" />
                                        </span>
                                    </Button>
                                </div>

                                <div className="absolute inset-0 flex justify-end items-center overflow-hidden opacity-10 z-0">
                                    <Image src={img7} width={600} height={100} alt="logo" className="w-full h-[500px] sm:w-[600px]" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default BrandAcross