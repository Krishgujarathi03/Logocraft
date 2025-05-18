"use client";
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import { useSearchParams } from "next/navigation";

function LogoTitle({ onHandleInputChange }) {
  const searchParam = useSearchParams();
  const tittle = searchParam?.get("title");
  const [title, setTitle] = useState(tittle || "");
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup?.LogoTitle}
        description={Lookup?.LogoTileDesc}
      />

      <input
        className="p-4 border rounded-lg mt-5 w-full outline-none"
        type="text"
        placeholder={Lookup?.InputTitlePlaceholder}
        value={title}
        onChange={(e) => {
          const newValue = e.target.value;
          setTitle(newValue);
          onHandleInputChange(newValue);
        }}
      />
    </div>
  );
}

export default LogoTitle;
