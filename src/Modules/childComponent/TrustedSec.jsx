"use client"

import { img3 } from "../../helpers/imagehelper"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useRouter } from "nextjs-toploader/app";
import { Button } from "../../components/ui/button"

const TrustedSec = () => {
      const router = useRouter()
    const handleAbout = () => {
      router.push('/about')
    }
    return (
        <section className="container mx-auto max-w-[85rem] px-10">
        <div className="relative z-10 py-12">
            <div className="grid lg:grid-cols-2 mb-12">
                <div className="relative lg:mb-0">
                    <Image src={img3} width={300} height={100} alt="logo"   className="w-[180px] h-auto sm:w-[300px]" />

                    <div className="absolute  inset-0 top-20 left-30 sm:top-40 sm:left-50">
                        <h6 className="text-[16px] text-[#475569] dm-sans font-normal">Who We Are</h6>
                        <h4 className="dm-sans font-medium text-[#0F172A] text-[20px] sm:text-[40px] xl:text-[46px]">Your Trusted</h4>
                        <h4 className="text-[#B4DD13] dm-sans font-medium  text-[20px] sm:text-[38px] xl:text-[44px]">Packaging Partner</h4>
                    </div>
                </div>
                <div className="space-y-6 mt-4 sm:mt-0">
                    <p className="text-[#0F172A] dm-sans font-normal text-[16px] leading-8">
                        With years of experience in the packaging industry, we specialize in manufacturing durable, customizable, and eco-friendly packing
                        boxes for a wide range of industries — including eCommerce, retail, FMCG, electronics, food & beverages, and more.
                    </p>
                    <p className="text-[#0F172A] dm-sans font-normal text-[16px] leading-8">
                        With over 5 years in the packaging industry, we’ve delivered millions of boxes across sectors — helping brands improve their packaging experience while cutting costs.
                        No two businesses are the same — and neither should their packaging be. Whether you need branded boxes, protective corrugated packaging,
                        or luxury rigid boxes, we’ll customize it to your exact specifications.
                    </p>

                    <div>
                        <Button
                            href="#"
                            onClick={handleAbout}
                            className="group inline-flex items-center gap-1 text-[#0F172A] dm-sans font-normal text-[16px] relative bg-white hover:bg-white shadow-none cursor-pointer"
                        >
                            More About Us
                            <ArrowUpRight className="w-6 h-4" />
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#B4DD13] transition-all duration-300 group-hover:w-full"></span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )

}

export default TrustedSec