
import { GoogleGenAI, Type } from "@google/genai";
import { Quote, DoctrineInsight } from "../types";

export const generateDoctrine = async (quotes: Quote[]): Promise<DoctrineInsight> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const quoteTexts = quotes.map(q => `"${q.text}" - ${q.author}`).join('\n');
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Based on these quotes from my personal armory, synthesize a single core "Doctrine of the Day". It should be hard-hitting, masculine, and action-oriented.
    
    My Armory:
    ${quoteTexts}
    
    Provide the response in JSON format.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "A bold title for the doctrine" },
          content: { type: Type.STRING, description: "A paragraph-length synthesis of the core lesson" },
          callToAction: { type: Type.STRING, description: "A single, direct command to execute today" }
        },
        required: ["title", "content", "callToAction"]
      }
    }
  });

  try {
    const text = response.text || '{}';
    return JSON.parse(text.trim()) as DoctrineInsight;
  } catch (e) {
    return {
      title: "STAY VIGILANT",
      content: "The armory is your refuge, but the field is where you are tested.",
      callToAction: "Execute the hardest task on your list first."
    };
  }
};

export const suggestTags = async (quoteText: string): Promise<string[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze this quote and suggest 2-4 tags from this list: Discipline, Suffering, War, Fatherhood, Legacy, Strength, Philosophy, Grit, Leadership. 
    Quote: "${quoteText}"
    Return only a JSON array of strings.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: { type: Type.STRING }
      }
    }
  });

  try {
    const text = response.text || '[]';
    return JSON.parse(text.trim());
  } catch (e) {
    return ["Grit"];
  }
};

export const parseBulkQuotes = async (rawText: string): Promise<Partial<Quote>[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Extract all meaningful quotes from this raw text. For each quote, identify the text, the author, and a source if available. 
    Tags should be chosen from: Discipline, Suffering, War, Fatherhood, Legacy, Strength, Philosophy, Grit, Leadership, Silence, Resilience, Honor, Chaos, Order, Brotherhood, Solitude, Truth, Sacrifice, Mortality, Stoicism.
    
    RAW TEXT:
    ${rawText}
    
    Return as a JSON array of objects.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            text: { type: Type.STRING },
            author: { type: Type.STRING },
            source: { type: Type.STRING },
            tags: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["text", "author", "tags"]
        }
      }
    }
  });

  try {
    const text = response.text || '[]';
    return JSON.parse(text.trim());
  } catch (e) {
    console.error("Bulk parse failed", e);
    return [];
  }
};
