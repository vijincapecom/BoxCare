
"use client"
import Image from "next/image"
import { img7 } from "../../helpers/imagehelper"
import { Carousel, CarouselContent, CarouselItem } from "../../components/ui/carousel"
import { industries } from "../../helpers/functionhelper"
import { useRef, useState, useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"


const Industeries = () => {


  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)



  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])


  return (
    <section className="bg-[#273E3D] relative z-0">
      <div className="container mx-auto max-w-[85rem] px-10">
        <div className="py-12">
          <h6 className="text-[16px] text-[#FFFFFF] text-center dm-sans font-normal">Industries We Serve</h6>
          <h1 className="dm-sans font-medium text-center text-[#FFFFFF] text-[20px] sm:text-[38px] xl:text-[44px] mt-4">
            Serving Businesses
            <span className="text-[#B4DD13]">
              {" "}
              Across <br /> All Sectors
            </span>
          </h1>

          <div className="mt-8 relative z-10">
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({
                delay: 2000,
              }),]}

              className="w-full"
              orientation="horizontal"
              setApi={setApi}

            >
              <CarouselContent>
                {industries.map((item, index) => (
                  <CarouselItem key={index} className="basis-[100%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="flex items-center justify-center relative z-10 transition-all duration-200 hover:scale-105">
                      <Image
                        src={item?.image?.src}
                        width={400}
                        height={400}
                        alt="logo"
                        className="w-full h-auto "
                      />
                      <div className="absolute bottom-3 left-4 w-full h-full flex items-end justify-start">
                        <h1
                          className="dm-sans font-normal text-start text-[#FFFFFF] text-[20px] sm:text-[24px] xl:text-[28px]"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {item?.description}
                        </h1>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-center gap-2 mt-4">
              {industries.map((item, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-3 w-3 rounded-full transition-colors cursor-pointer ${current === index ? "bg-[#B4DD13]" : "bg-gray-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

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
    </section>
  )
}
export default Industeries
