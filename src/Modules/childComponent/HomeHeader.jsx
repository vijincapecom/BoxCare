"use client"
import { Button } from "../../components/ui/button"
import { img1, l15, logo } from "../../helpers/imagehelper"
import Image from "next/image"
import { useEffect, useState } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../../components/ui/carousel"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { useRouter } from "nextjs-toploader/app";


 const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/product", label: "Product" },
        { href: "/contact", label: "Contact Us" },
    ]

const HomeHeader = ({ pathValue, pathDestructured }) => {
    const router = useRouter()
    const value = pathDestructured === 'about' ? 'About Us' : pathDestructured === 'product' ? 'Product' : pathDestructured === 'contact' ? 'Contact Us' : 'Home'
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [api, setApi] = useState()
    const [current, setCurrent] = useState(0)
    const backgroundImages = [img1, img1, img1]

    const handleEnquiry = () => {
     setIsMobileMenuOpen(false)
      router.push("/contact")
    }

    const handleProduct= () => {
         router.push("/product")
    }

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])



    return (
        <div className="min-h-screen relative">
            {pathValue === "/" ? (

                backgroundImages.map((image, index) => (

                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${current === index ? "opacity-100" : "opacity-0"
                            }`}
                        style={{
                            backgroundImage: `url(${typeof image === "string" ? image : image?.src || "../assets/images/img1.png"})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                ))
            ) : (

                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${img1?.src})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            )
            }


            <section className="relative z-10 ">
                <div className="bg-[#273E3D]/30 h-30 ">
                    <div className="container mx-auto max-w-[85rem] px-4">
                        <header className="flex items-center justify-between px-4 md:px-6 py-4 ">
                            <div className="flex items-center">
                                <div className=" rounded-lg flex items-center justify-center">
                                    <Image src={logo} width={100} height={100} alt="logo" className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" />
                                </div>
                            </div>



                            <div className="flex items-center gap-4 ">

                                <nav className="hidden lg:flex items-center bg-white rounded-full px-2 py-2">
                                    {navItems.map((item) => {
                                        const isActive = pathValue === item.href
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={`px-6 py-2 font-medium text-sm transition-all 
                                               ${isActive
                                                        ? "bg-lime-400 text-black rounded-full"
                                                        : "text-gray-700 hover:text-black"
                                                    }`}
                                            >
                                                {item.label}
                                            </Link>
                                        )
                                    })}
                                </nav>
                                <div className="hidden lg:flex items-center gap-4">
                                    <Button className="bg-[#BFFF00] hover:bg-[#BFFF00] text-[#0F1419] dm-sans font-normal cursor-pointer text-[14px] sm:text-[17px] py-6 rounded-[6.5rem] transition-all duration-200 hover:scale-105" onClick={handleEnquiry}>
                                        <span className='px-2 flex items-center'>Enquiry Now
                                            <Image src={l15} width={6} height={6} alt="logo" className="w-[10px] h-[10px] ml-2" />
                                        </span>
                                    </Button>
                                </div>

                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="lg:hidden w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-105"
                                >
                                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {isMobileMenuOpen ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </header>

                    </div>
                </div>

                <div className="container mx-auto max-w-[85rem] px-4 ">
                    <div
                        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                            }`}
                    >
                        <div
                            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"
                                }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <div
                            className={`absolute top-0 right-0 w-80 h-full bg-white shadow-xl transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                                }`}
                        >
                            <div className="p-6">
                                <div
                                    className={`flex items-center justify-between mb-8 transform transition-all duration-500 delay-100 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                        }`}
                                >
                                    <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <nav className="space-y-4">

                                         {navItems.map((item) => {
                                        const isActive = pathValue === item.href
                                        return (
                                            <Link
                                               onClick={() => setIsMobileMenuOpen(false)}
                                                key={item.href}
                                                href={item.href}
                                                className={`block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transform transition-all duration-500 delay-250
                                                    ${isActive
                                                        ? "bg-lime-400 text-black rounded-full" : "text-gray-700 hover:text-black"}
                                                    ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                                            }`}
                                            >
                                                {item.label}
                                            </Link>
                                        )
                                    })}
                                </nav>

                                <div
                                    className={`mt-8 transform transition-all duration-500 delay-350 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                        }`}
                                >
                                    <Button className="bg-[#BFFF00] hover:bg-[#BFFF00] text-[#0F1419] dm-sans font-normal cursor-pointer text-[14px] sm:text-[17px] py-6 rounded-[6.5rem] transition-all duration-200 hover:scale-105" onClick={handleEnquiry}>
                                        <span className='px-2 flex items-center'>Enquiry Now
                                            <Image src={l15} width={6} height={6} alt="logo" className="w-[10px] h-[10px] ml-2" />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        pathValue !== '/' && (
                            <main className="px-4 md:px-6 pt-12 md:pt-20 pb-16">
                                <div className="max-w-4xl">
                                    <nav className="mb-8">
                                        <div className="flex items-center space-x-2 text-white/80 text-sm">
                                            <Link href="/" className="hover:text-white transition-colors duration-200">
                                                Home
                                            </Link>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                            <span className="text-lime-400 font-medium">{value}</span>
                                        </div>
                                    </nav>

                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{value}</h1>
                                </div>
                            </main>
                        )
                    }

                    {pathValue === "/" && (
                        <Carousel className="w-full" setApi={setApi} opts={{ align: "start", loop: true }}
                            plugins={[Autoplay({
                                delay: 2000,
                            }),]}>
                            <CarouselContent>
                                <CarouselItem>
                                    <main className="px-4 md:px-6 pt-12 md:pt-20 pb-16">
                                        <div className="max-w-2xl">
                                            <h1 className="text-4xl    text-white  mb-6 animate-fade-in leading-relaxed  dm-sans font-medium md:text-[60px]">
                                                Custom Packaging
                                                <br />
                                                Solutions That Deliver
                                            </h1>
                                            <p className="text-white/90 text-base md:text-lg font-normal dm-sans  mb-8 leading-relaxed animate-fade-in-delay">
                                                Strong. Stylish. Sustainable. We create high-quality packaging
                                                <br className="hidden md:block" />
                                                boxes tailored to your brand and business needs
                                            </p>

                                            <Button className="bg-[#B4DD13] hover:bg-[#BFFF00] text-[#0F1419] dm-sans font-normal cursor-pointer text-[14px] sm:text-[17px] py-6 rounded-[6.5rem] transition-all duration-200 hover:scale-105"
                                            onClick={handleProduct}
                                            >
                                                <span className='px-2 flex items-center'> Start Your Order
                                                    <Image src={l15} width={6} height={6} alt="logo" className="w-[10px] h-[10px] ml-2" />
                                                </span>
                                            </Button>
                                        </div>
                                    </main>
                                </CarouselItem>

                                <CarouselItem>
                                    <main className="px-4 md:px-6 pt-12 md:pt-20 pb-16">
                                        <div className="max-w-2xl">
                                            <h1 className="text-4xl    text-white  mb-6 animate-fade-in leading-relaxed  dm-sans font-medium md:text-[60px]">
                                                Eco-Friendly
                                                <br />
                                                Packaging Revolution
                                            </h1>
                                            <p className="text-white/90 text-base md:text-lg font-normal dm-sans  mb-8 leading-relaxed animate-fade-in-delay">
                                                100% Recyclable. Carbon Neutral. Biodegradable materials
                                                <br className="hidden md:block" />
                                                that protect your products and our planet
                                            </p>


                                            <Button className="bg-[#B4DD13] hover:bg-[#BFFF00] text-[#0F1419] dm-sans font-normal cursor-pointer text-[14px] sm:text-[17px] py-6 rounded-[6.5rem] transition-all duration-200 hover:scale-105"
                                             onClick={handleProduct}
                                            >
                                                <span className='px-2 flex items-center'> Go Green Today
                                                    <Image src={l15} width={6} height={6} alt="logo" className="w-[10px] h-[10px] ml-2" />
                                                </span>
                                            </Button>

                                        </div>
                                    </main>
                                </CarouselItem>

                                <CarouselItem>
                                    <main className="px-4 md:px-6 pt-12 md:pt-20 pb-16">
                                        <div className="max-w-2xl">
                                            <h1 className="text-4xl    text-white  mb-6 animate-fade-in leading-relaxed  dm-sans font-medium md:text-[60px]">
                                                Premium Quality
                                                <br />
                                                Meets Innovation
                                            </h1>
                                            <p className="text-white/90 text-base md:text-lg font-normal   mb-8 leading-relaxed animate-fade-in-delay">
                                                Advanced Materials. Precision Engineering. Custom designs
                                                <br className="hidden md:block" />
                                                that elevate your brand and exceed expectations
                                            </p>

                                            <Button className="bg-[#B4DD13] hover:bg-[#BFFF00] text-[#0F1419] dm-sans font-normal cursor-pointer text-[14px] sm:text-[17px] py-6 rounded-[6.5rem] transition-all duration-200 hover:scale-105"
                                              onClick={handleProduct}
                                            >
                                                <span className='px-2 flex items-center'> Explore Premium
                                                    <Image src={l15} width={6} height={6} alt="logo" className="w-[10px] h-[10px] ml-2" />
                                                </span>
                                            </Button>
                                        </div>
                                    </main>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    )
                    }

                    {pathValue === "/" && (
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {backgroundImages.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${current === index ? "bg-lime-400 w-8 " : "bg-white/50 hover:bg-white/70 cursor-pointer"
                                        }`}
                                    onClick={() => api?.scrollTo(index)}
                                />
                            ))}
                        </div>
                    )
                    }
                </div>

            </section>
        </div>
    )
}

export default HomeHeader