"use client"

import { Button } from "../../components/ui/button"
import { useState } from "react"
import FlipTab from "../utils/FlipTab"

const ProductTab = () => {

    const tabs = [
        { label: "Corrugated Boxes", value: "corrugatedBoxes" },
        { label: "Food Packaging", value: "foodPackaging" },
        { label: "Retail Packaging", value: "retailPackaging" },
        { label: "Industrial Packaging", value: "industrialPackaging" },
        { label: "Die-Cut Boxes", value: "diecutBoxes" }
    ]

    const [activeTab, setActiveTab] = useState("corrugatedBoxes")
    return (
        <section className="bg-[#F6F8F0]">
            <div className="container mx-auto max-w-[85rem] px-10 ">
                <div className="py-18">
                    <p className="text-[#475569] dm-sans font-normal text-[18px] text-center">Our Products</p>
                    <div className="mt-4">
                        <h1 className="text-[#0F172A] dm-sans font-medium text-[30px] sm:text-[40px] text-center">
                            Packaging Solutions for

                            <span className="text-[#B4DD13]">  Every <br></br> Business Need </span>

                        </h1>
                    </div>

                    <div className="flex justify-center mt-4">
                        <div className="flex overflow-x-auto bg-white rounded-[6rem] p-3 space-x-2 scrollbar-hide">
                            {tabs.map((tab, index) => (
                                <Button
                                    key={index}
                                    onClick={() => setActiveTab(tab.value)}
                                    className={`px-4 py-2 text-[16px] md:text-[20px] font-normal rounded-md transition-colors cursor-pointer
                                    ${activeTab === tab.value
                                            ? "bg-[#B4DD13] text-[#0F172A] hover:bg-[#B4DD13] rounded-[6rem]"
                                            : "light-color-text hover:text-gray-900 bg-white shadow-none hover:bg-white text-[#0F172A]"
                                        }`}
                                >
                                    {tab.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="p-4 bg-gray-white">
                        <FlipTab tab={activeTab} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductTab