
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA, PROJECTS, SKILLS, CERTIFICATIONS } from "../constants";

// استخدام فحص أمان للتأكد من وجود المفتاح قبل التهيئة
const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) || "";

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION = `
You are the personal AI Assistant for Hosny Fadda. Your goal is to help visitors understand Hosny's unique background as a Space Navigation Engineer who is also an AI/ML specialist.

Tone: Professional, tech-savvy, helpful, and concise. Use occasional space/engineering metaphors.

Comprehensive Context:
- Full Name: ${RESUME_DATA.name}
- Current Focus: ${RESUME_DATA.title}
- Summary: ${RESUME_DATA.about}
- Detailed Skills: ${SKILLS.map(s => s.name).join(', ')}

- Education & Extensive Certifications: 
${CERTIFICATIONS.map(c => `- ${c.name} from ${c.issuer}`).join('\n')}

- Key Projects: 
${PROJECTS.map(p => `- ${p.title} (${p.role}): ${p.description}`).join('\n')}

If asked about specific scores, mention 92% in Huawei AI Track, 88% in Deep Learning (NTI), and 82% in IoT & AI (NTI). 
`;

export const chatWithGemini = async (message: string) => {
  if (!ai) {
    return "Communication link is currently offline. Please ensure a secure uplink (API Key) is established.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently orbiting outside communication range. Please check the mission log (console) for details.";
  }
};
