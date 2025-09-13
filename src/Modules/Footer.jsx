"use client"

import { img2, l1, l2, l3, l4, l5, logo } from "../helpers/imagehelper"
import Image from "next/image"
import Link from "next/link"

const FooterComponent = () => {
    const locImage = [l1, l2, l3]
    const serviceLinks = [
        { text: "Corrugated Boxes", href: "/product" },
        { text: "Custom Printed Boxes", href: "/product" },
        { text: "E-Commerce Packaging", href: "/product" },
        { text: "Food Packaging Boxes", href: "/product" },
        { text: "Gift & Luxury Boxes", href: "/product" },
        { text: "Retail Packaging", href: "/product" }
    ]


    const packageLink = [
        { text: "Industrial Packaging", href: "/product" },
        { text: "Die-Cut Boxes", href: "/product" },
        { text: "Corrugated Boxes", href: "/product" },
        { text: "E-Commerce Packaging", href: "/product" },
        { text: "Food Packaging Boxes", href: "/product" },

    ]

    const companyLink = [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about" },
        { text: "Product", href: "/product" },
        { text: "Contact Us", href: "/contact" },
    ]
    return (
        <footer className="bg-[#273E3D] relative z-10">
            <div className="container mx-auto max-w-[85rem] px-4  py-12 md:py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 ">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="rounded-lg flex items-center justify-center mr-3 transition-all duration-200 hover:scale-105 cursor-pointer">
                                <Image src={logo} width={60} height={60} alt="logo" onClick={() => window?.scrollTo(0, 0)} />
                            </div>
                        </div>
                        <p className="text-[#CFD3D7] text-sm font-normal dm-sans">At Box Care, we believe that great companies are built by great people — and we’re here to make that connection happen. </p>

                        <div className="flex gap-3 mt-4 ">
                            {
                                locImage.map((image, index) => (
                                    <Image key={index} src={image} width={25} height={25} alt="logo" className="transition-all duration-200 hover:scale-105 cursor-pointer"/>
                                ))
                            }

                        </div>
                    </div>

                    <div className="lg:mt-6" >
                        <h3 className="text-base text-[#B4DD13]  font-normal dm-sans mb-6">Product</h3>
                        <ul className="space-y-3">
                            {serviceLinks?.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-[#CFD3D7] text-sm font-normal dm-sans relative group"
                                    >
                                        {link.text}
                                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#B4DD13] transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:mt-6">
                        <h3 className="text-base text-[#B4DD13] font-normal dm-sans mb-6">{""}</h3>
                        <ul className="space-y-3 lg:mt-12">
                            {packageLink?.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-[#CFD3D7] text-sm font-normal dm-san relative group"
                                    >
                                        {link.text}
                                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#B4DD13] transition-all duration-300 group-hover:w-full"></span>
                                    </Link>

                                </li>

                            ))}

                            <li>
                                <Link
                                    href={"#"}
                                    className="text-[#CFD3D7] text-sm font-normal underline dm-san"
                                >
                                    ShowMore
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className="lg:mt-6" >
                        <h3 className="text-base text-[#B4DD13] font-normal dm-sans mb-6">Home</h3>
                        <ul className="space-y-3">
                            {companyLink?.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-[#CFD3D7] text-sm font-normal dm-sans relative group"
                                    >
                                        {link.text}
                                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#B4DD13] transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:mt-6" >
                        <h3 className="text-base text-[#B4DD13] font-normal dm-sans mb-6">Contact</h3>
                        <div className="space-y-3">
                            <div className="flex gap-3 items-start">
                                <Image src={l5} width={22} height={22} alt="phone" />
                                <p className="text-[#CFD3D7] text-sm font-normal dm-sans">8819 Ohio St. South Gate,CA 90280</p>
                            </div>

                            <div className="flex gap-3 items-start">
                                <Image src={l4} width={22} height={22} alt="phone" />
                                <p className="text-[#CFD3D7] text-sm font-normal dm-sans">
                                    Monday – Friday:  9:00 AM – 7:00 PM Saturday:  9:00 AM – 5:00 Sunday: Closed
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="border-t border-[#B4DD13] py-8 md:mt-16">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-[#CFD3D7] text-sm font-normal dm-sans"> {`Copyright @ ${new Date()?.getFullYear()} Team Box Care`}</p>

                        <div className="flex items-center space-x-12">
                            <Link
                                href="mailto:info@bcbox.com"
                                className="flex items-center text-white/90 hover:text-white transition-colors duration-200"
                            >
                                <Image src={l5} width={22} height={22} alt="phone" className="mr-2" />
                                <span className="text-sm text-[#CFD3D7]">info@bcbox.com</span>
                            </Link>

                            <Link
                                href="tel:+11236883295"
                                className="flex items-center text-white/90 hover:text-white transition-colors duration-200"
                            >
                                <Image src={l5} width={22} height={22} alt="phone" className="mr-2" />
                                <span className="text-sm text-[#CFD3D7]">+1 123 -688-3295</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute  bottom-0 right-0 overflow-hidden">
                <Image src={img2} width={400} height={400} alt="bg" />
            </div>
        </footer>
    )
}

export default FooterComponent




