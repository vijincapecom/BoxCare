"use client"

import { Button } from "../../components/ui/button"
import { l15 } from "../../helpers/imagehelper"
import Image from "next/image"
import { useRouter } from "nextjs-toploader/app";

const ProductDesign = () => {
     const router = useRouter()

    const handleEnquiry = () => {
      router.push('/enquiry')
    }
    return (
        <section>
            <div className="container mx-auto max-w-[85rem] px-10 ">
                <div className="py-12 sm:py-18">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
                        <h1 className="dm-sans font-normal text-[#0F172A] text-[20px] sm:text-[40px] xl:text-[44px]">
                            Packaging Designed to Protect Your
                            <span className="text-[#B4DD13]"> Products and Built </span>
                            to Impress Your Customers
                        </h1>
                        <div >
                            <p className="font-normal text-[16px] dm-sans text-[#0F172A] leading-8 mt-2">
                                At Box Care, we believe packaging is more than just protection — it’s the first impression your product makes.
                                We are a leading manufacturer of custom
                                packaging boxes dedicated to helping businesses showcase their products with strength, style, and sustainability.
                            </p>

                            <div className="flex items-center mt-4">
                                <Button className="bg-[#BFFF00] hover:bg-[#BFFF00] text-[#0F1419] dm-sans font-normal cursor-pointer text-[14px] sm:text-[17px] py-6 rounded-[6.5rem] transition-all duration-200 hover:scale-105"
                                 onClick={handleEnquiry}
                                >
                                    <span className='px-2 flex items-center'>Enquiry Now
                                        <Image src={l15} width={6} height={6} alt="logo" className="w-[10px] h-[10px] ml-2" />
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDesign