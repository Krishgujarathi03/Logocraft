import { NextRequest, NextResponse } from "next/server";
import { AIDesignIdea } from "@/configs/AiModel";

export async function POST(req) {
  const { prompt } = await req.json();
  console.log("Received prompt:", prompt);

  try {
    console.log(AIDesignIdea);
    const result = await AIDesignIdea.sendMessage(prompt);
    console.log("Raw AI result:", result);

    const text = result?.response?.text?.();
    console.log("AI text:", text);

    return NextResponse.json(JSON.parse(text));
  } catch (error) {
    console.error("Error in /api/ai-design-ideas:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
