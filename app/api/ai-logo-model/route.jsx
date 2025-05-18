import { AILogoPrompt } from "@/configs/AiModel";
import { db } from "@/configs/FirebaseConfig";
import axios from "axios";
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt, email, title, desc } = await req.json();

  try {
    const AiPromptResult = await AILogoPrompt.sendMessage(prompt);

    const AIPrompt = JSON.parse(AiPromptResult.response.text()).prompt;
    console.log(AIPrompt);

    const BASE_URL = "https://aigurulab.tech";
    const response = await axios.post(
      BASE_URL + "/api/generate-image",
      {
        width: 1024,
        height: 1024,
        input: "self-portrait of a woman, lightning in the background",
        model: "sdxl", //'flux'
        aspectRatio: "1:1", //Applicable to Flux model only
      },
      {
        headers: {
          "x-api-key": process.env.AIGURULAB_API_KEY, // Your API Key
          "Content-Type": "application/json", // Content Type
        },
      }
    );

    console.log("API image data:", response.data.image);
    const imageUrl = response.data.image;

    // Add the logo data to the user's document in Firebase
    const logoData = {
      image: imageUrl,
      title: title,
      desc: desc,
      id: Date.now(),
    };

    const userDocRef = doc(db, "users", email);

    // Check if the user document exists
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      // Create the document if it doesn't exist
      await setDoc(userDocRef, { logos: [logoData] });
    } else {
      // Update the document if it exists
      await updateDoc(userDocRef, {
        logos: arrayUnion(logoData),
      });
    }

    return NextResponse.json({
      image: imageUrl,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message });
  }
}
