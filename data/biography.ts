export interface BiographyData {
  name: string;
  title: string;
  location: string;
  shortBio: string;
  fullBio: string;
  philosophy: {
    title: string;
    description: string;
  }[];
  mentors: {
    name: string;
    role: string;
    organization: string;
    description: string;
  }[];
  quotes: string[];
}

export const biographyData: BiographyData = {
  name: 'Emmanuel Ahimana',
  title: 'Contemporary Choreographer & Professional Dancer',
  location: 'Kigali, Rwanda',
  shortBio: 'Dance professional with 10+ years of experience, known for innovative choreography that seamlessly blends diverse styles and elevates storytelling. Movement as a dialogue with emotion, resilience, and transformation.',
  fullBio: `Emmanuel Ahimana is a Kigali-based contemporary choreographer and professional dancer with over 10 years of professional dance experience whose work elevates movement into a profound dialogue with human emotion, cultural memory, and national resilience.

His passion for dance traces back to his pre-professional childhood in Rwanda, when he discovered that movement was not merely an art form, but a source of personal wholeness — a gift that felt like a birthright. Starting from local traditional dance gatherings to performing on international stages across Senegal, Kenya, Tanzania, Congo, and Rwanda, Emmanuel has developed a distinctive choreographic language.

Emmanuel’s career highlights include performing his solo piece **IREBE** at the Kenya National Theatre during the Dance Life Festival (2026), serving as assistant choreographer for **Kwibuka 30: The Gift of Time** bringing together 130 dancers to commemorate the Genocide against the Tutsi (2024), choreographing **Les Noces de Suzanne** in collaboration with Compagnie STEIN-LEIN-CHEN and OPERA KIVU (2026), and undertaking an international immersion at the renowned **École des Sables** in Sénégal.

Beyond the stage, Emmanuel is deeply committed to community development. He has led transformative dance training sessions in refugee camps across Rwanda for over 30 instructors and currently serves as a lead dance instructor under L'Espace Kigali, instilling discipline, artistic expression, and cultural pride in the next generation.`,
  philosophy: [
    {
      title: 'Movement as Inner Dialogue',
      description: 'Physical movement is not just execution of technique; it is a sacred conversation with our emotions, breath, and spirit.'
    },
    {
      title: 'Resilience & Renewal',
      description: 'Even in the deepest darkness, dance creates space for healing, bringing light out of tragedy and unifying communities.'
    },
    {
      title: 'Ancestral Rhythms in Space',
      description: 'Fusing traditional Rwandan movement roots with contemporary release technique, ballet discipline, and raw physical resistance.'
    },
    {
      title: 'The Solitude and the Group',
      description: 'Investigating the tension between the individual journey toward an exit and the collective support of the ensemble.'
    }
  ],
  mentors: [
    {
      name: 'Wesley Ruzibiza',
      role: 'Artistic Director & Master Choreographer',
      organization: 'Amizero Dance Company / Kwibuka 30',
      description: 'Venerated artistic director and choreographer who mentored Emmanuel in mass-ensemble composition, contemporary African physical theatre, and co-created landmark works including Kwibuka 30 and MULTITUDE.'
    },
    {
      name: 'Rebecca Davis',
      role: 'Founder & Executive Director',
      organization: 'MindLeaps',
      description: 'Discovered and guided Emmanuel during his foundational dance training, instilling modern dance discipline, classic ballet technique, and dance pedagogy for youth.'
    },
    {
      name: 'Misty Copeland',
      role: 'Principal Dancer',
      organization: 'American Ballet Theatre',
      description: 'Provided guiding artistic vision and inspired technical precision and perseverance.'
    },
    {
      name: 'Royce Zackery',
      role: 'Professor & Choreographer',
      organization: 'Howard University',
      description: 'Mentored in ballet structure, positional awareness, and choreographic composition.'
    },
    {
      name: 'Kirvin Douthit-Boyd',
      role: 'Former Alvin Ailey Dancer / Co-Artistic Director',
      organization: 'COCA St. Louis',
      description: 'Guided Emmanuel during Ubumuntu Art Festival 2021, deepening modern and contemporary expression.'
    },
    {
      name: 'Adonis Nébié',
      role: 'Choreographer',
      organization: 'L’Espace Choreography Residency (Burkina Faso)',
      description: 'Led master choreography workshops pushing physical boundary and spatial architecture.'
    },
    {
      name: 'Abdoulaye Trésor Konaté',
      role: 'Artistic Director',
      organization: 'ATEKA Dance Company (Kivunyika Residence)',
      description: 'Taught approach to executing real-life movement philosophies and physical authenticity.'
    }
  ],
  quotes: [
    'Dance became more than technique; it evolved into a journey of self-discovery, where rhythm and spirit intertwined.',
    'IREBE is a journey of becoming, where, even in the deepest night, light insists on being born.',
    'The Gift of Time brought together 130 dancers in a moving journey carrying three symbolic gifts: healing, unity, and renewal.'
  ]
};
