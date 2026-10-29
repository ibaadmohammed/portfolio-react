// Edit this file to update the whole site.
export const profile = {
  name: "Mohammed Mohtashim Ibaad",
  role: "Frontend developer and IT student",
  headline: "I build clean, responsive web apps that people can actually use.",
  summary:
    "I'm a 4th-year Information Technology student in Hyderabad. I write React interfaces and structured backend logic, practise Data Structures & Algorithms daily, and I'm growing into Data Science, Machine Learning and Generative AI.",
  email: "160423737020@mjcollege.ac.in",
  phone: "+91 89772 50192",
  location: "Hyderabad, Telangana",
  github: "https://github.com/ibaadmohammed",
  linkedin: "https://www.linkedin.com/in/ibaad-mohammed-20a998333",
  resume: "/Mohammed_Mohtashim_Ibaad_CV.pdf",
  photo: "/photo.jpg.jpeg", // put your picture in the public folder with this exact name. Set to "" to hide.
};

export const skills = [
  { group: "Languages", items: ["JavaScript", "Python", "Java", "C++"] },
  { group: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { group: "Backend and data", items: ["Node.js", "MySQL", "Firebase Realtime DB", "Firebase Auth"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel"] },
  { group: "Fundamentals", items: ["Data Structures & Algorithms", "Object-Oriented Programming"] },
  { group: "Learning now", items: ["Machine Learning", "Data Science", "Generative AI"] },
];

export const internship = {
  title: "AI Driven Software Development Intern",
  org: "Pantech Solutions India Pvt. Ltd., with SVNIT Surat",
  when: "29 Apr 2026 to 28 May 2026",
  text: "One-month internship applying AI techniques across the software development lifecycle. Certificate ID PANCH26-INV-00384, verified by Pantech Solutions and SVNIT Surat faculty.",
};

export const featured = {
  name: "CivicOS",
  stack: ["React.js", "TypeScript", "HTML", "CSS"],
  blurb:
    "An AI-powered civic accountability platform built to tackle urban infrastructure failures that affect 50 million citizens. I built the complete React frontend and UI design.",
  points: [
    "Geo-tagged issue reporting with photo proof",
    "Live AI danger-zone heatmap of Hyderabad",
    "AI Smart Routing that suggests safer roads by avoiding active complaint areas",
    "Performance leaderboard tracking 543 MLAs on real civic delivery data",
    "One citizen dashboard replacing 15 to 20 fragmented municipal systems across 500 municipalities",
  ],
  live: "https://civicos-web.vercel.app/",
  code: "https://github.com/ibaadmohammed/civic-os",
};

export const projects = [
  {
    name: "MJCET Attendance Portal",
    stack: ["HTML5", "CSS3", "JavaScript", "Firebase"],
    blurb:
      "Attendance management for MJCET with separate portals for admins, teachers and students. Firebase Realtime Database and Auth sync attendance live, so students see their records and percentage the moment a teacher marks them.",
    live: "https://project-rho-taupe.vercel.app/",
    code: "https://github.com/ibaadmohammed/mjcetattendance",
  },
  {
    name: "Personal Finance Dashboard",
    stack: ["HTML5", "CSS3", "JavaScript"],
    blurb:
      "Tracks income and expenses in INR by category, with a live balance, monthly budgets, financial goals, and analytics for savings rate and top expense category.",
    live: "https://personal-finanace-dashboard.vercel.app/",
    code: "https://github.com/ibaadmohammed/Personal-Finanace-Dashboard",
  },
  {
    name: "AI Interview Preparation Tool",
    stack: ["HTML5", "CSS3", "JavaScript"],
    blurb:
      "Practice questions across Technical, Behavioral, Situational, Leadership and System Design, with difficulty filters, favorites, keyboard shortcuts, and a timed mock mode of 5 to 20 questions with a score summary.",
    live: "https://interview-preparation-tool.vercel.app/",
    code: "https://github.com/ibaadmohammed/Interview-Preparation-Tool",
  },
];

export const achievements = [
  { title: "Hack Revolution 2025", text: "Shortlisted among the top 30 teams out of 600+." },
  { title: "Envisage 2025", text: "Participated in MJCET's annual technical fest." },
  { title: "Competitive programming", text: "Solving problems on LeetCode and GeeksforGeeks." },
  { title: "OneRoadmap certifications", text: "English, Java, SQL and CSS (Sep 2025)." },
];

export const education = [
  { school: "Muffakham Jah College of Engineering and Technology", detail: "B.E. in Information Technology, CGPA 8.12 / 10", when: "2023 to 2027 (expected)" },
  { school: "Sri Chaitanya Junior College", detail: "Intermediate (MPC), 84%", when: "2021 to 2023" },
  { school: "Iqbalia International School", detail: "CBSE Secondary, GPA 9.0 / 10", when: "2015 to 2021" },
];
