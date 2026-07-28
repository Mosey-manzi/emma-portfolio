export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights?: string[];
}

export interface WorkshopItem {
  period: string;
  title: string;
  ledBy: string;
  organization: string;
  location: string;
}

export interface ResumeData {
  contactInfo: {
    name: string;
    title: string;
    phone: string;
    email: string;
    instagram: string;
    location: string;
    pdfPath: string;
  };
  summary: string;
  experience: ExperienceItem[];
  workshops: WorkshopItem[];
  skills: {
    technical: string[];
    choreographic: string[];
    soft: string[];
  };
  education: {
    institution: string;
    degree: string;
    details: string;
  }[];
  languages: string[];
}

export const resumeData: ResumeData = {
  contactInfo: {
    name: 'Emmanuel Ahimana',
    title: 'Professional Dancer | Contemporary Choreographer',
    phone: '+250 780 615 144',
    email: 'emmanuelahimana01@gmail.com',
    instagram: 'https://instagram.com/emmymario8',
    location: 'Kigali, Rwanda',
    pdfPath: '/resume/Emmanuel_CV.pdf'
  },
  summary: 'Dance professional known for innovative choreography that seamlessly blends various styles and elevates storytelling. Solid expertise in contemporary dance, classic ballet, traditional African rhythms, and mass-ensemble composition.',
  experience: [
    {
      period: 'July 2026',
      role: 'Soloist & Choreographer — "IREBE"',
      company: 'Dance Life Festival',
      location: 'Kenya National Theatre, Nairobi',
      description: 'Performed solo dance piece IREBE exploring theme of emergence and resilience through movement.'
    },
    {
      period: 'May 2026',
      role: 'Choreographer — "INGOMANSHYA"',
      company: 'Ingomanshya Company',
      location: 'Kigali & East African Tour',
      description: 'Choreographed new touring production fusing traditional drum heritage with contemporary dance.'
    },
    {
      period: 'Feb – March 2026',
      role: 'Choreographer & Performer — "Les Noces de Suzanne"',
      company: 'Compagnie STEIN-LEIN-CHEN & OPERA KIVU',
      location: 'Rwanda & DRC',
      description: 'Choreographed operatic dance piece inspired by Mozart’s Le Nozze di Figaro with Congolese-Rwandan cast.'
    },
    {
      period: 'Oct 2025',
      role: 'Traditional Dancer',
      company: 'ISHYAKA ry’Intore Traditional Dance Troop',
      location: 'Kigali, Rwanda',
      description: 'Performed in the annual cultural concert NZAZICUNDIRA.'
    },
    {
      period: 'April 2024',
      role: 'Assistant Choreographer & Performer — "The Gift of Time"',
      company: 'Kwibuka 30 Commemoration',
      location: 'Kigali, Rwanda',
      description: 'Co-choreographed and performed with 130 dancers in the official 30th Genocide against Tutsi commemoration.'
    },
    {
      period: 'Feb & April 2024',
      role: 'Performer — "MULTITUDE"',
      company: 'Amizero Dance Company & Muda Africa',
      location: 'Tanzania & Kigali Triennial Festival',
      description: 'Performed in out-of-residence piece by Wesley Ruzibiza exploring solitude and connection.'
    },
    {
      period: 'Aug – Oct 2023',
      role: 'Lead Dance Trainer — Refugee Camps Initiative',
      company: 'MindLeaps / UNHCR Partner Program',
      location: '3 Refugee Camps, Rwanda',
      description: 'Trained 30+ dance instructors in ballet, contemporary, and trauma-informed movement pedagogy.'
    },
    {
      period: '2022 – Present',
      role: 'Assistant Dance Instructor & Youth Mentor',
      company: 'MindLeaps & L’Espace Dance Program',
      location: 'Kigali, Rwanda',
      description: 'Instructs youth classes in modern dance, ballet, and contemporary composition.'
    },
    {
      period: '2021',
      role: 'Performer & Workshop Fellow',
      company: 'Ubumuntu Art Festival',
      location: 'Kigali, Rwanda',
      description: 'Trained by Kirvin Douthit-Boyd (Alvin Ailey / COCA) for festival mainstage performance.'
    }
  ],
  workshops: [
    {
      period: 'July – August 2024',
      title: 'International Internship — Black Urban & Contemporary Dances',
      ledBy: 'Germaine Acogny Technique Masters',
      organization: 'École des Sables',
      location: 'Toubab Dialaw, Sénégal'
    },
    {
      period: 'May 2025',
      title: 'Master Choreography Workshop',
      ledBy: 'Adonis Nébié',
      organization: 'L’Espace Kigali',
      location: 'Kigali, Rwanda'
    },
    {
      period: 'January 2025',
      title: 'Kivunyika Residence',
      ledBy: 'Abdoulaye Trésor Konaté',
      organization: 'ATEKA Dance Company',
      location: 'Rwanda'
    }
  ],
  skills: {
    technical: [
      'Contemporary Dance',
      'Classical Ballet',
      'Traditional African Dance (Intore)',
      'Afro-Contemporary Fusion',
      'Hip-Hop & Urban Movement',
      'Jazz Technique'
    ],
    choreographic: [
      'Mass Ensemble Direction (100+ Dancers)',
      'Dance Composition & Improvisation',
      'Spatial Architecture',
      'Rhythmic Structure & Musicality',
      'Storytelling through Movement',
      'Cross-Cultural Collaboration'
    ],
    soft: [
      'Arts Leadership & Directing',
      'Trauma-Informed Dance Instruction',
      'Creative Problem Solving',
      'Physical Endurance & Control',
      'Communication & Team Mentorship'
    ]
  },
  education: [
    {
      institution: 'Mount Kigali University',
      degree: 'Bachelor of Business Management',
      details: 'Currently Pursuing — Strategic Management & Creative Industry Leadership'
    },
    {
      institution: 'École des Sables',
      degree: 'International Professional Certificate',
      details: 'Danses urbaines et contemporaines noires (Toubab Dialaw, Senegal, 2024)'
    },
    {
      institution: 'White Dove Global Prep',
      degree: 'High School / College Diploma',
      details: 'Computer Science, Mathematics and Economics'
    }
  ],
  languages: ['English (Fluent)', 'Kinyarwanda (Native)', 'Swahili (Fluent)']
};
