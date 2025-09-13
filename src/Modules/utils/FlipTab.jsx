"use client";

import { Button } from "../../components/ui/button";
import { flipCardData } from "../../helpers/functionhelper";
import { img14, l15 } from "../../helpers/imagehelper";
import Image from "next/image";
import { useState } from "react";

const FlipTab = ({ tab }) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleFlip = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  const filteredData = flipCardData.filter((item) => item.type === tab);

  if (filteredData.length === 0) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <p className="text-lg dm-sans sm:text-xl md:text-2xl font-medium text-[#0F172A]">
          No data available
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-16 mt-12">
      {filteredData.map((data) => (
        <div
          key={data.id}
          className="relative h-[400px] w-full bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div
            className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] 
              ${activeCard === data.id ? "[transform:rotateX(180deg)]" : ""}`}
          >
            {/* Front Side */}
            <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-hidden h-[80%]">
                <img
                  src={data?.image?.src}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <h3 className="text-[18px] sm:text-[24px] md:text-[28px] dm-sans font-normal text-[#0F172A]">
                  {data.title}
                </h3>
                <Button
                  onClick={() => handleFlip(data.id)}
                  size="sm"
                  className="dm-sans font-normal cursor-pointer text-[#0F172A] 
                    bg-[#B4DD13] hover:bg-[#B4DD13] rounded-full w-8 h-8 p-0 
                    flex items-center justify-center transform transition-transform 
                    duration-200 hover:scale-110"
                >
                  <Image
                    src={l15}
                    width={10}
                    height={10}
                    alt="logo"
                    className="w-[10px] h-[10px]"
                  />
                </Button>
              </div>
            </div>

            {/* Back Side */}
            <div
              className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateX(180deg)] bg-white rounded-lg shadow-lg"
            >
              <div
                className="h-full p-6 flex flex-col justify-between text-white rounded-lg"
                style={{
                  backgroundImage: `url(${img14.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div>
                  <div className="flex items-center justify-end mb-3">
                    <Button
                      onClick={() => handleFlip(data.id)}
                      size="sm"
                      className="dm-sans font-normal cursor-pointer text-[#0F172A] 
                        bg-[#B4DD13] hover:bg-[#B4DD13] rounded-full w-8 h-8 p-0 
                        flex items-center justify-center transform transition-transform 
                        duration-200 hover:scale-110"
                    >
                      <Image
                        src={l15}
                        width={10}
                        height={10}
                        alt="logo"
                        className="w-[10px] h-[10px]"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={data?.image?.src}
                      alt={data.title}
                      className="w-full max-w-[180px] h-[150px] object-contain mx-auto"
                    />
                    <div className="mt-2">
                      <h3 className="text-[18px] sm:text-[24px] md:text-[28px] font-normal">
                        {data.title}
                      </h3>
                      <p className="dm-sans font-normal text-[14px] sm:text-[16px] mt-1">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipTab;
