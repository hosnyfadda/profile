
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
    description: 'Developed a real-time Weather & Air Quality Dashboard using Power BI and OpenWeatherMap API. Displayed current conditions, hourly/weekly forecasts, sunrise/sunset times, and AQI metrics.',
    techStack: ['Power BI', 'DAX', 'OpenWeatherMap API', 'Excel'],
    image: 'https://images.unsplash.com/photo-1592210633464-a7db09696211?auto=format&fit=crop&q=80&w=800',
    detailedSpecs: [
      'Real-time API integration with 99.9% uptime',
      'Advanced DAX modeling for multi-source data',
      'Interactive geo-spatial mapping of AQI data'
    ],
    metrics: [
      { label: 'Refresh Rate', value: '15 mins' },
      { label: 'Data Points', value: '10K+' }
    ]
  },
  {
    id: 'pdf-qa',
    title: 'AI-Powered PDF Question Answering',
    role: 'ML Engineer',
    date: 'Sep – Oct 2025',
    description: 'Automated information extraction from PDF documents using NLP and AI. Enabled free-form question answering on document content with a user-friendly interface.',
    techStack: ['Python', 'Hugging Face', 'NLP', 'LLMs', 'Streamlit'],
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800',
    detailedSpecs: [
      'RAG (Retrieval-Augmented Generation) pipeline implementation',
      'Vector database storage for long-document context',
      'Fine-tuned semantic search capabilities'
    ],
    metrics: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Latent Time', value: '0.8s' }
    ]
  },
  {
    id: 'cubesat',
    title: 'CubeSat Prototype & Ground Station',
    role: 'Embedded Systems Engineer',
    date: 'Aug – Oct 2023',
    description: 'Developed CubeSat prototype with hardware, embedded systems, and telemetry. Managed sensors, PCB design, and LabVIEW ground monitoring systems.',
    techStack: ['Arduino', 'C/C++', 'LabVIEW', 'SolidWorks', 'NRF24 Wireless'],
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
    detailedSpecs: [
      'Custom PCB for power management and sensor array',
      'Long-range telemetry link using 2.4GHz transceivers',
      'Real-time orbital parameter simulation'
    ],
    metrics: [
      { label: 'Payload Mass', value: '1.2 KG' },
      { label: 'Telemetry Range', value: '500M' }
    ]
  },
  {
    id: 'opencv-bg',
    title: 'Real-Time Background Replacement',
    role: 'ML Engineer',
    date: 'Oct – Nov 2024',
    description: 'Developed a real-time computer vision application for virtual background replacement using AI-powered semantic segmentation.',
    techStack: ['Python', 'OpenCV', 'CVzone', 'Deep Learning'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    detailedSpecs: [
      'Implemented MediaPipe Holistic model for segmentation',
      'Multi-threaded frame processing for low-latency',
      'Seamless edges with adaptive blending'
    ],
    metrics: [
      { label: 'Frame Rate', value: '30 FPS' },
      { label: 'Processing Lag', value: '<20ms' }
    ]
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
