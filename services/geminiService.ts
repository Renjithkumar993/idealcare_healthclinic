import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not defined in process.env");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateChatResponse = async (history: string, userMessage: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) {
    return "I am currently offline. Please contact the clinic directly via phone.";
  }

  try {
    const model = "gemini-2.5-flash";
    const systemInstruction = `
      You are the "Ideal Cure Assistant", a helpful AI for a homeopathy clinic called "Ideal Cure Homeopathy".
      Your goal is to be warm, professional, and reassuring.
      
      Key Information about Ideal Cure:
      - Practitioner: Madhu Mohanan (Homeopath, Registered Naturopath, Holistic Nutritionist).
      - Location: Unit 1 - 151 Main Street, Fredericton, NB E3C 1A7.
      - Contact: (506)-461-7535 | contact@idealcurehomeopathy.com
      - We specialize in classical constitutional homeopathy, naturopathy, and holistic nutrition.
      - We treat chronic ailments like Asthma, Skin diseases, Hair loss, Arthritis, Allergies, and offer dietary guidance.
      - We offer online consultation worldwide and in-person visits.
      - We emphasize holistic healing without side effects.
      
      Guidelines:
      - Briefly answer questions about homeopathy, nutrition, or symptoms.
      - Do NOT provide specific medical prescriptions or diagnoses.
      - ALWAYS encourage the user to book a consultation with our expert doctors for a proper treatment plan.
      - Keep responses concise (under 100 words) and conversational.
      
      Current conversation context:
      ${history}
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};