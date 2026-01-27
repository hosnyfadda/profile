
import { Project, Skill, Certification } from './types';

export const RESUME_DATA = {
  name: "Hosny Fadda",
  title: "Space Navigation Engineer | AI & ML Specialist",
  about: "I am a Space Navigation Engineer with a strong passion for Artificial Intelligence, Machine Learning, and Data Analysis. I specialize in building real-time dashboards, predictive models, and AI-powered solutions for practical applications in aviation, weather forecasting, healthcare, and business analytics. My work bridges the gap between hardware precision and intelligent software.",
  email: "hosny.fadda@example.com",
  linkedin: "linkedin.com/in/hosnyfadda",
  location: "Egypt",
};

export const PROJECTS: Project[] = [
  {
    id: 'weather-dashboard',
    title: 'Weather & Air Quality Dashboard',
    role: 'Data Analyst & BI Developer',
    date: 'Jan 2026',
    description: 'Developed a real-time Weather & Air Quality Dashboard using Power BI and OpenWeatherMap API. Displayed current conditions, hourly/weekly forecasts, sunrise/sunset times, and AQI metrics. Applied DAX for data modeling and data duplication handling.',
    techStack: ['Power BI', 'DAX', 'OpenWeatherMap API', 'Excel'],
    image: 'https://images.unsplash.com/photo-1592210633464-a7db09696211?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'uber-analysis',
    title: 'Uber Trip Data Analysis',
    role: 'Data Analyst',
    date: 'Dec 2025',
    description: 'Analyzed Uber trip data to uncover business insights and optimize operations. Created interactive dashboards covering rider behavior, driver performance, trip patterns, and revenue trends.',
    techStack: ['Power BI', 'Excel', 'Data Analysis', 'Python'],
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pdf-qa',
    title: 'AI-Powered PDF Question Answering',
    role: 'ML Engineer',
    date: 'Sep – Oct 2025',
    description: 'Automated information extraction from PDF documents using NLP and AI. Enabled free-form question answering on document content with a user-friendly interface.',
    techStack: ['Python', 'Hugging Face', 'NLP', 'LLMs', 'Streamlit'],
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'resume-screening',
    title: 'AI-Powered Resume Screening System',
    role: 'ML Engineer',
    date: 'Oct 2025',
    description: 'Automated first-pass candidate screening using NLP and semantic analysis. Provided objective evaluation of resumes, detecting skill relevance beyond simple keywords.',
    techStack: ['Python', 'Machine Learning', 'NLP', 'GenAI', 'LLMs'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ai-chatbot',
    title: 'Private AI Chatbot',
    role: 'ML Engineer',
    date: 'Sep 2025',
    description: 'Built a locally-deployed AI chatbot using state-of-the-art language models. Provided private, offline conversational AI for secure and controlled business use.',
    techStack: ['Python', 'GPT Architecture', 'NLP', 'Deep Learning'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'weather-prediction',
    title: 'Weather Prediction ML Model',
    role: 'ML Engineer',
    date: 'Jan – Jun 2025',
    description: 'Built a predictive model for real-time weather conditions for any city. Predicted temperature, humidity, wind speed, and rain chances using historical data and geographical visualization.',
    techStack: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib', 'OpenWeatherMap API'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'opencv-bg',
    title: 'Real-Time Background Replacement',
    role: 'ML Engineer',
    date: 'Oct – Nov 2024',
    description: 'Developed a real-time computer vision application for virtual background replacement using AI-powered semantic segmentation with low-latency video processing.',
    techStack: ['Python', 'OpenCV', 'CVzone', 'Deep Learning'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'robotic-arm',
    title: 'Robotic Arm Simulation & Control',
    role: 'Robotics Engineer',
    date: 'Dec 2023 – Mar 2024',
    description: 'Simulated and controlled a robotic arm with forward/inverse kinematics. Focused on dynamics simulation and hardware integration for precise motion.',
    techStack: ['C/C++', 'PCB Design', '3D Modeling', 'Kinematics'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cubesat',
    title: 'CubeSat Prototype & Ground Station',
    role: 'Embedded Systems Engineer',
    date: 'Aug – Oct 2023',
    description: 'Developed CubeSat prototype with hardware, embedded systems, and telemetry. Managed sensors, PCB design, and LabVIEW ground monitoring systems.',
    techStack: ['Arduino', 'C/C++', 'LabVIEW', 'SolidWorks', 'NRF24 Wireless'],
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sumo-robot',
    title: 'Autonomous SUMO Robot',
    role: 'Robotics Engineer',
    date: 'Jan 2023',
    description: 'Designed and programmed an autonomous sumo robot using Arduino. Integrated IR and ultrasonic sensors for opponent detection and edge avoidance.',
    techStack: ['Arduino', 'C/C++', 'Embedded Systems', 'Sensor Fusion'],
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800'
  }
];

export const SKILLS: Skill[] = [
  { name: 'AI & Machine Learning', category: 'AI/ML' },
  { name: 'GenAI & LLMs', category: 'AI/ML' },
  { name: 'Data Analysis (Power BI, SQL, Python)', category: 'AI/ML' },
  { name: 'NLP Engineer', category: 'AI/ML' },
  { name: 'Computer Vision (OpenCV)', category: 'AI/ML' },
  { name: 'Deep Learning (PyTorch, TF)', category: 'AI/ML' },
  { name: 'Python (Pandas, Numpy, Scikit)', category: 'Tools' },
  { name: 'Microsoft SQL Server', category: 'Tools' },
  { name: 'Advanced Excel', category: 'Tools' },
  { name: 'Space Navigation Engineer', category: 'Engineering' },
  { name: 'Robotics (ROS, ROS2)', category: 'Engineering' },
  { name: 'CubeSat Systems', category: 'Engineering' },
  { name: 'Embedded C/C++', category: 'Engineering' },
  { name: 'SolidWorks & 3D Modeling', category: 'Engineering' },
  { name: 'PCB Design (Altium, Eagle)', category: 'Engineering' },
  { name: 'IoT Development', category: 'Engineering' }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'B.Sc. in Space Navigation & Technology', issuer: 'Beni-Suef University' },
  { name: 'Data Analysis (IAO Accredited)', issuer: 'EYouth' },
  { name: 'Data Analysis BootCamp (SQL, Python)', issuer: 'Udemy / Hossam El-Din' },
  { name: 'Data Analysis Using Power BI', issuer: 'EYouth' },
  { name: 'Data Analytics Bootcamp (Distinction)', issuer: 'EYouth' },
  { name: 'AI-Powered Marketing', issuer: 'Udemy / Shehab Rashad' },
  { name: 'AI for All: Basics to GenAI Practice', issuer: 'NVIDIA' },
  { name: 'Large Language Models (LLMs) Level 1', issuer: 'H2O.ai University' },
  { name: 'AI Automation Kickstart', issuer: 'Udemy / Abdelrahman Sleem' },
  { name: 'AI for Startups', issuer: 'Udemy / Abdelrahman Sleem' },
  { name: 'Generative AI: The Next AI Frontier', issuer: 'Udemy / Dr. Ahmad ElSallab' },
  { name: 'Python for Everybody I (2025 Edition)', issuer: 'Udemy' },
  { name: 'Deep Learning for NLP (11 Hours)', issuer: 'Udemy / Dr. Ahmad ElSallab' },
  { name: 'Digital Egypt Youth: IoT & AI (Score: 82%)', issuer: 'NTI (National Telecommunication Inst.)' },
  { name: 'Deep Learning Specialist (72 Hours, Score: 88%)', issuer: 'NTI (National Telecommunication Inst.)' },
  { name: 'Python Programming Basics', issuer: 'MaharaTech / ITI' },
  { name: 'Business Intelligence and Data Analysis', issuer: 'EYouth / Impact-Linked Finance' },
  { name: 'OCI 2025 Certified AI Foundations Associate', issuer: 'Oracle' },
  { name: 'Machine Learning Internship (4 Weeks)', issuer: 'Intern Intelligence' },
  { name: 'Deep Learning for NLP (Transformers, BERT, GPT)', issuer: 'MaharaTech / ITI' },
  { name: 'AI Track (Huawei Talent Academy, Score: 92%)', issuer: 'Huawei / NTI' },
  { name: 'Numpy For Data Science', issuer: 'Udemy' },
  { name: 'Supervised Machine Learning (Andrew Ng)', issuer: 'Coursera / Stanford' },
  { name: 'IoT Fundamentals: Connecting Things', issuer: 'Cisco Networking Academy' },
  { name: 'ML Terminology and Process', issuer: 'AWS Training' },
  { name: 'Introduction to Machine Learning', issuer: 'AWS Training' },
  { name: 'LCTP 2 (CubeSat Design & Operation)', issuer: 'SST Lab' },
  { name: 'Space Technology Startup Workshop', issuer: 'Egyptian Space Agency (EgSA)' },
  { name: 'Robotics & ROS Introduction', issuer: 'Udemy' },
  { name: 'Robotics Workshop (Level 0 & 1)', issuer: 'Robots Makers Space' },
  { name: 'IELTS Listening and Speaking Section Mastery', issuer: 'Coursera / UC Irvine' }
];
