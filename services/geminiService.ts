
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA, PROJECTS, SKILLS, CERTIFICATIONS } from "../constants";

// وظيفة آمنة لجلب مفتاح API من البيئات المختلفة
const getApiKey = () => {
  try {
    return process.env.API_KEY || (window as any).process?.env?.API_KEY || "";
  } catch (e) {
    return "";
  }
};

const apiKey = getApiKey();
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
  // محاولة إعادة التهيئة إذا كان المفتاح قد تم تعيينه لاحقاً
  let currentAi = ai;
  if (!currentAi) {
    const key = getApiKey();
    if (key) {
      currentAi = new GoogleGenAI({ apiKey: key });
    }
  }

  if (!currentAi) {
    return "Communication link is offline. Please establish a secure uplink (API Key) to enable AI assistance.";
  }

  try {
    const response = await currentAi.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error?.message?.includes("API_KEY_INVALID")) {
      return "Mission Error: Invalid Uplink Credentials. Please verify the API key.";
    }
    return "I am currently orbiting outside communication range. Please check the logs.";
  }
};
