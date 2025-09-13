"use client"

import Image from "next/image"
import { Button } from "../../components/ui/button"
import { l15 } from "../../helpers/imagehelper"
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./MapComponent"), {
  ssr: false,
});


const ContactThree = () => {

    return (
        <section>
            <div className="container mx-auto max-w-[85rem] px-10">
                <div className="py-2 pb-18">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div>
                            <h1 className="text-[#0F172A] dm-sans font-nomral text-[20px] sm:text-[38px] text-center lg:text-start">
                                Our Office <span className="text-[#B4DD13]">Location
                                    <br></br>
                                    and Directions</span>  on Map</h1>
                            <div className="flex justify-center sm:justify-start mt-4">
                                <a
                                    href="https://maps.app.goo.gl/3fNFXW9Ro9nrTLuP6" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button className="bg-[#BFFF00] hover:bg-[#BFFF00] text-[#0F1419] dm-sans font-normal cursor-pointer text-[14px] sm:text-[17px] py-4 sm:py-6 rounded-[6.5rem] transition-all duration-200 hover:scale-105">
                                        <span className="px-2 flex items-center">
                                            View our Direction
                                            <Image
                                                src={l15}
                                                width={6}
                                                height={6}
                                                alt="logo"
                                                className="w-[10px] h-[10px] ml-2"
                                            />
                                        </span>
                                    </Button>
                                </a>
                            </div>
                        </div>

                        <div className="w-full mt-8 lg:mt-0">
                            <LeafletMap />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactThree