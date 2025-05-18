"use client";
import React, { useState } from "react";
import LogoTitle from "./_component/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LogoDesc from "./_component/LogoDesc";
import LogoColorPalette from "./_component/LogoColorPalette";
import LogoDesign from "./_component/LogoDesign";
import LogoIdea from "./_component/LogoIdea";
import PricingModel from "./_component/PricingModel";

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    console.log(formData);
  };

  return (
    <div className="mt-28 p-10 border rounded-xl w-full">
      {step === 1 ? (
        <LogoTitle
          onHandleInputChange={(v) => onHandleInputChange("title", v)}
          formData={formData}
        />
      ) : step === 2 ? (
        <LogoDesc
          onHandleInputChange={(v) => onHandleInputChange("desc", v)}
          formData={formData}
        />
      ) : step === 3 ? (
        <LogoColorPalette
          onHandleInputChange={(v) => onHandleInputChange("palette", v)}
          formData={formData}
        />
      ) : step === 4 ? (
        <LogoDesign
          onHandleInputChange={(v) => onHandleInputChange("design", v)}
          formData={formData}
        />
      ) : step === 5 ? (
        <LogoIdea
          onHandleInputChange={(v) => onHandleInputChange("idea", v)}
          formData={formData}
        />
      ) : step === 6 ? (
        <PricingModel
          onHandleInputChange={(v) => onHandleInputChange("pricing", v)}
          formData={formData}
        />
      ) : null}
      <div className="flex items-center justify-between mt-10">
        {step !== 1 ? (
          <Button onClick={() => setStep((prev) => prev - 1)} variant="outline">
            <ArrowLeft />
            Previous
          </Button>
        ) : (
          ""
        )}

        <Button
          onClick={() => setStep((prev) => prev + 1)}
          className="bg-[#ed1e61] text-white"
        >
          <ArrowRight /> Continue
        </Button>
      </div>
    </div>
  );
}

export default CreateLogo;
