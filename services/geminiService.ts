
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA, PROJECTS, SKILLS, CERTIFICATIONS } from "../constants";

// Corrected initialization using process.env.API_KEY directly as a named parameter
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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

Specific Talking Points:
1. Space & Engineering: Hosny is a Space Navigation Engineer (B.Sc.). He has built CubeSat prototypes (LCTP 2) and autonomous Sumo robots.
2. AI/ML Cred: He is highly certified, with training from Oracle (OCI AI Foundations), Huawei (AI Track 92%), NVIDIA (GenAI), and DeepLearning.AI (Andrew Ng).
3. Data Science: He excels in Power BI, SQL, and Python for business intelligence (EYouth & Udemy bootcamps).
4. NLP: He has 11+ hours of deep learning for NLP training, focusing on Transformers and LLMs.
5. Location: Egypt.

If asked about specific scores, mention 92% in Huawei AI Track, 88% in Deep Learning (NTI), and 82% in IoT & AI (NTI). 
`;

export const chatWithGemini = async (message: string) => {
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
    return "I am currently orbiting outside communication range. Please try again in a moment.";
  }
};
