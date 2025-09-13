"use client"
import { processData } from "../../helpers/functionhelper"
import { img6 } from "../../helpers/imagehelper"
import Image from "next/image"

const OurProcess = () => {
    return (
        <section className="relative z-10">
            <div className="container mx-auto max-w-[85rem] px-10 ">
                <div className="py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <Image src={img6} width={500} height={800} alt="logo" className="w-[100%] lg:w-[85%] h-full" />
                        </div>

                        <div >
                            <h6 className="text-[16px] text-[#475569] dm-sans font-normal">Why Choose Us</h6>

                            <h1 className='dm-sans font-medium text-[#0F172A] text-[20px] sm:text-[38px] xl:text-[44px] mt-1 sm:leading-14 mt-2'>The Way We Build <span className='text-[#B4DD13]'>Your Packaging </span>
                            </h1>
                            <div className="mt-10 relative">
                                <ol className="relative space-y-8 sm:space-y-10 md:space-y-12 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-5 md:before:left-6 before:border-l-2 before:border-dashed before:border-[#8E98A8]">
                                    {processData.map((process, i) => (
                                        <li key={i} className="relative pl-20">
                                            <span
                                                aria-hidden="true"
                                                className="absolute left-0 top-0 z-10 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-md bg-[#B4DD13] text-[#0F0A0A] text-sm md:text-base  font-normal"
                                            >
                                                {String(i + 1).padStart(2, "0")}
                                            </span>

                                            <div className="pt-0.5">
                                                <h3 className="text-[20px] dm-sans font-normal text-[#0F172A]">{process.title}</h3>
                                                <p className="text-[16px] text-[#0F0A0A]/70 dm-sans font-normal mt-2 leading-6">
                                                    {process.description}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default OurProcess