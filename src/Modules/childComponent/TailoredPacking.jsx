"use client"
import { Button } from "../../components/ui/button"
import * as React from "react"
import { cn } from "../../lib/utils"
import { Carousel, CarouselContent, CarouselItem } from "../../components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { products } from "../../helpers/functionhelper"
import { l15, l16, l17 } from "../../helpers/imagehelper"
import Image from "next/image"
import { useRouter } from "nextjs-toploader/app";

const TailoredPacking = () => {
  const router = useRouter()
  const [api, setApi] = React.useState(null)
  const [activeIndex, setActiveIndex] = React.useState(2)
  const [progress, setProgress] = React.useState(0)
  
      const handleProduct= () => {
         router.push("/product")
    }
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap())
    }

    const onScroll = () => {
      const snaps = api.scrollSnapList()
      const selected = api.selectedScrollSnap()
      setProgress((selected + 1) / snaps.length)
    }

    api.on("select", onSelect)
    api.on("scroll", onScroll)

    onSelect()
    onScroll()
    return () => {
      api.off("select", onSelect)
      api.off("scroll", onScroll)
    }
  }, [api])

  const scrollPrev = () => {
    api?.scrollPrev()
  }

  const scrollNext = () => {
    api?.scrollNext()
  }

  return (
    <section className="bg-[#F6F8F0]">
      <div className="container mx-auto max-w-[85rem] px-10 ">
        <div className="py-18">
          <p className="text-[#475569] dm-sans font-normal text-[18px] text-center">OUR PRODUCTS</p>
          <div className="mt-4">
            <h1 className="text-[#0F172A] dm-sans font-medium text-[30px] sm:text-[40px] text-center">
              Tailored Packaging for
              <span className="text-[#B4DD13]"> Every Need</span>
            </h1>
          </div>

          <div className="flex justify-center mt-4">
            <Button className="bg-[#B4DD13] cursor-pointer hover:bg-[#BFFF00] text-[#0F1419] dm-sans font-normal text-[17px] py-3 rounded-[6.5rem] transition-all duration-200 hover:scale-105"
             onClick={handleProduct}
            >
              <span className='px-2 flex items-center'> View all Products
                <Image src={l15} width={6} height={6} alt="logo" className="w-[10px] h-[10px] ml-2" />
              </span>
            </Button>
          </div>

          <div>
            <Carousel
              setApi={setApi}
              plugins={[autoplay.current]}
              opts={{ align: "center", loop: true }}
              className="w-full mt-12"
            >
              <CarouselContent>
                {products.map((p, i) => (
                  <CarouselItem
                    key={p.id}
                    className="basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                    onClick={() => setActiveIndex(i)}
                  >
                    <div
                      className={cn(
                        "h-full w-full rounded-2xl p-6 border transition-colors",
                        i === activeIndex
                          ? "bg-lime-50 border-lime-300 "
                          : "bg-transparent border border-[#D5D5D5]"
                      )}
                    >
                      <div className="aspect-[4/3] w-full  items-center justify-center">
                        <img
                          src={p.img?.src || "/placeholder.svg"}
                          alt={p.title}
                          className="h-full w-auto object-contain "
                          crossOrigin="anonymous"
                        />
                      </div>
                      <p
                        className={cn(
                          "mt-4 text-center text-base font-normal md:text-[18px] dm-sans ",
                          i === activeIndex ? "text-lime-700" : "text-foreground "
                        )}
                      >
                        {p.title}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex items-center justify-center mt-8">
              <div className="mt-3 flex items-center justify-center w-[80%] ">
                <button
                  type="button"
                  aria-label="Previous products"
                  onClick={scrollPrev}
                  className="inline-flex h-8 w-8 items-center justify-center "
                >
                   <Image src={l16} width={10} height={10} alt="logo" className="w-[20px] h-[20px] cursor-pointer" />
                </button>

                <div className="relative mx-4 flex-1">
                  <div className="h-[2px] w-full bg-muted" />
                  <div
                    className="absolute left-0 top-0 h-[2px] bg-lime-500 transition-[width]"
                    style={{ width: `${progress * 100}%` }}
                    aria-hidden="true"
                  />
                </div>

                <button
                  type="button"
                  aria-label="Next products"
                  onClick={scrollNext}
                  className="inline-flex h-8 w-8 items-center justify-center"
                >
                   <Image src={l17} width={10} height={10} alt="logo" className="w-[20px] h-[20px] cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TailoredPacking
