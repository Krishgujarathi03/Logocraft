"use client";
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import LogoDesig from "@/app/_data/LogoDesig";
import Image from "next/image";

function LogoDesign({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.design?.title);

  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {LogoDesig.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
            className={`p-1 hover:border-2 border-[#ed1e61] rounded-xl cursor-pointer ${
              selectedOption == design.title
                ? "border-2 rounded-lg border-[#ed1e61]"
                : ""
            }`}
          >
            <Image
              src={design.image}
              alt={design.title}
              width={300}
              height={200}
              className="w-full rounded-xl h-[200px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoDesign;
