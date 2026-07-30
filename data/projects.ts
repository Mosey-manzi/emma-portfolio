/**
 * Represents an individual creative team attribution credit.
 * Used for transparent collaborator recognition across all portfolio projects.
 */
export interface ProjectCredit {
  /** The specific role (e.g., 'Photo', 'Music', 'Choreographer', 'Costume Design') */
  role: string;
  /** The credited individual or entity name */
  name: string;
}

/**
 * Main project data model for Emmanuel Ahimana's choreographic portfolio.
 */
export interface Project {
  /** Unique project identifier */
  id: string;
  /** URL slug for dynamic project routing (/projects/[slug]) */
  slug: string;
  /** Primary title of the choreographic piece */
  title: string;
  /** Subtitle or short tagline */
  subtitle: string;
  /** Year of premiere or production */
  year: string;
  /** Primary category filter */
  category?: 'Solo Works' | 'Commemorative' | 'Opera & Collaboration' | 'Residencies';
  /** Core thematic description */
  theme: string;
  /** Venue, festival, or geographic location */
  location: string;
  /** Duration of performance */
  duration: string;
  /** List of main key collaborators or ensemble groups */
  collaboratorsLabel?: string;
  collaborators?: string[];
  /** Emmanuel Ahimana's explicit role (e.g., 'Assistant Choreographer & Dancer', 'Soloist & Choreographer') */
  role?: string;
  /** Full structured team attribution credits list */
  credits?: ProjectCredit[];
  /** Tags for performance style and composition */
  tags: string[];
  /** Short summary snippet for project cards */
  summary: string;
  /** Full choreographic concept narrative */
  concept: string;
  /** Featured artistic quote */
  quote?: string;
  /** Absolute URL path to primary cover image */
  heroImage: string;
  /** Array of absolute URL paths for image gallery */
  gallery: string[];
  /** Whether piece is featured on the Homepage */
  featured: boolean;
}

/**
 * Choreographic Repertoire Registry
 * Contains all performance data, concept narratives, and team attributions.
 */
export const projectsData: Project[] = [
  {
    id: '1',
    slug: 'irebe',
    title: 'IREBE',
    subtitle: 'A Solo Journey of Emergence & Transformation',
    year: '2026',
    category: 'Solo Works',
    theme: 'Resilience, Inner Spark & Transformation',
    location: 'Kenya National Theatre, Nairobi',
    duration: '25 Minutes',
    collaboratorsLabel: "Choreographer",
    collaborators: ['Emmanuel Ahimana (Soloist)'],
    role: 'Soloist & Choreographer',
    credits: [
      { role: 'Photo', name: 'in.nairobi' },
      { role: 'Festival', name: 'Dance Life Festival' },
      { role: 'Coaching', name: 'Amizero Dance Company' },
      { role: 'Music', name: 'Kiwe Music' },
      { role: 'Soloist & Choreographer', name: 'Emmanuel Ahimana' }
    ],
    tags: ['Solo Piece', 'Contemporary Dance', 'Festival Premiere'],
    summary: 'Beneath the surface, a body listens. Buried in silence, something flickers — a fragile light waiting to emerge between fear and desire.',
    concept: `Beneath the surface, a body listens. Buried in silence, something flickers a fragile light waiting to emerge. Between fear and desire, the body descends, confronts, resists.

Darkness becomes a space of transformation, where breath is rediscovered and limits are challenged. Like a water lily rising through uncertain depths, a quiet force persists. It catches the smallest spark, protects it, and lets it grow.

“IREBE is a journey of becoming, where, even in the deepest night, light insists on being born”.`,
    quote: 'Even in the deepest night, light insists on being born.',
    heroImage: '/images/irebe/P1305365.jpg',
    gallery: [
      '/images/irebe/IMG_9966.jpg',
      '/images/irebe/P1305365.jpg',
      '/images/irebe/IMG_9955.jpg',
      '/images/irebe/IMG_0002.jpg',
      '/images/irebe/IMG_0005.jpg',
      '/images/irebe/IMG_0006.jpg',
      '/images/irebe/IMG_0007.jpg',
      '/images/irebe/IMG_0009.jpg',
      '/images/irebe/IMG_0014.jpg',
      '/images/irebe/IMG_0017.jpg',
      '/images/irebe/IMG_0024.jpg',
      '/images/irebe/IMG_0025.jpg',
      '/images/irebe/IMG_0028.jpg',
      '/images/irebe/IMG_0029.jpg',
      '/images/irebe/IMG_9930.jpg',
      '/images/irebe/IMG_9934.jpg',
      '/images/irebe/IMG_9936.jpg',
      '/images/irebe/IMG_9939.jpg',
      '/images/irebe/IMG_9940.jpg',
      '/images/irebe/IMG_9942.jpg',
      '/images/irebe/IMG_9949.jpg',
      '/images/irebe/IMG_9954.jpg',
      '/images/irebe/IMG_9957.jpg',
      '/images/irebe/IMG_9962.jpg',
      '/images/irebe/IMG_9975.jpg',
      '/images/irebe/P1305363.jpg',
      '/images/irebe/background.jpeg',
      '/images/irebe/great one.jpeg'
    ],
    featured: true
  },
  {
    id: '2',
    slug: 'kwibuka-30',
    title: 'Kwibuka 30 — The Gift of Time',
    subtitle: 'Monumental Commemorative Choreography for 130 Dancers',
    year: '2024',
    category: 'Commemorative',
    theme: 'Healing, Unity, Renewal & National Resilience',
    location: 'BK Arena & Kigali Amphitheatre, Rwanda',
    duration: '45 Minutes',
    collaboratorsLabel: "Lead Choreographer",
    collaborators: ['Wesley Ruzibiza'],
    role: 'Assistant Choreographer & Dancer',
    credits: [
      { role: 'Choreographer & Artistic Direction', name: 'Wesley Ruzibiza' },
      { role: 'Artistic Programming & Coordination', name: 'Didacienne Nibagwire' },
      { role: 'Music', name: 'Herve Twahirwa & Samuel Kamanzi' },
      { role: 'Costume Design', name: 'Cedric Mizero' },
      { role: 'Assistant Choreographer & Dancer', name: 'Emmanuel Ahimana' }
    ],
    tags: ['Commemorative', 'Mass Ensemble', 'Cultural Memory'],
    summary: 'A monumental choreographic work bringing together 130 dancers in a moving journey from past to future, carrying three symbolic gifts: healing, unity, and renewal.',
    concept: `Kwibuka 30 — Genocide against Tutsi commemoration: The Gift of Time

I was honored to contribute as both assistant choreographer and dancer in Kwibuka 30, a powerful commemorative performance created to honor the lives lost during the Genocide Against the Tutsi in 1994. The Gift of Time brought together 130 dancers in a moving journey from past to future, carrying three symbolic gifts: healing, unity, and renewal.

This choreographic work reflects the resilience of a nation — healing wounds, rebuilding trust, and uniting people through art. It embodies the promise of renewal, envisioning a future where every individual has a place, rooted in strength and hope, ensuring that such atrocities will never happen again.`,
    quote: 'Carrying three symbolic gifts: healing, unity, and renewal.',
    heroImage: '/images/kwibuka30/IMG_3752.JPG',
    gallery: [
      '/images/kwibuka30/IMG_0501.JPG',
      '/images/kwibuka30/IMG_0502.JPG',
      '/images/kwibuka30/IMG_0503.JPG',
      '/images/kwibuka30/IMG_0504.JPG',
      '/images/kwibuka30/IMG_0505.JPG',
      '/images/kwibuka30/IMG_0506.JPG',
      '/images/kwibuka30/IMG_3752.jpg'
    ],
    featured: true
  },
  {
    id: '3',
    slug: 'les-noces-de-suzanne',
    title: 'Les Noces de Suzanne',
    subtitle: 'Operatic Dance Fusion Inspired by Mozart',
    year: '2026',
    category: 'Opera & Collaboration',
    theme: 'Cross-Border Storytelling, Love & Social Tension',
    location: 'Kigali - Institut Français du Rwanda',
    duration: '60 Minutes',
    collaboratorsLabel: "",
    collaborators: [],
    role: 'Choreographer & Performer',
    credits: [
      { role: 'Photo', name: 'Thomas Freteur' },
      { role: 'Music', name: 'Mariska Le Moing & Lucia Zarcone' },
      { role: 'Singers', name: 'Opera du Kivu' },
      { role: 'Choreography & Performance', name: 'Emmanuel Ahimana' }
    ],
    tags: ['Opera Fusion', 'International Collaboration', 'Cross-Border'],
    summary: 'A choreographic creation inspired by Mozart’s Le Nozze di Figaro, celebrating cross-border unity and storytelling through classical and contemporary African movement.',
    concept: `During the residency in Rwanda, I had the privilege of choreographing and performing in Les Noces de Suzanne, a production inspired by Mozart’s Le Nozze di Figaro. 

This project embodied a profound celebration of artistry, collaboration, and storytelling through movement, realized through the dedication and talent of our Congolese and Rwandan team. I am deeply grateful for the opportunity to contribute to this creation, which stands as a testament to the power of dance to unite communities and bring visionary projects to life.`,
    quote: 'A testament to the power of dance to unite communities across borders.',
    heroImage: '/images/les-noces/IMG_3774.jpg.jpeg',
    gallery: [
      '/images/les-noces/IMG_3775.jpg.jpeg',
      '/images/les-noces/IMG_3776.jpg.jpeg',
      '/images/les-noces/IMG_3777.jpg.jpeg',
      '/images/les-noces/IMG_3778.jpg.jpeg',
      '/images/les-noces/IMG_3779.jpg.jpeg',
      '/images/les-noces/IMG_3780.jpg.jpeg',
      '/images/les-noces/IMG_3781.jpg.jpeg',
      '/images/les-noces/IMG_3782.jpg.jpeg',
      '/images/les-noces/IMG_3783.jpg.jpeg',
      '/images/les-noces/IMG_3784.jpg.jpeg'
    ],
    featured: true
  },
  {
    id: '4',
    slug: 'multitude',
    title: 'MULTITUDE',
    subtitle: 'Exploring Human Connection, Solitude & Loss',
    year: '2024',
    category: 'Residencies',
    theme: 'Solitude, Support, Collective Memory & Traumatic Healing',
    location: 'Muda Africa (Tanzania) & Kigali Triennial (Rwanda)',
    duration: '40 Minutes',
    collaboratorsLabel: "Choreographer",
    collaborators: ['Wesley Ruzibiza'],
    role: 'Dancer / Performer',
    credits: [
      { role: 'Production', name: 'Amizero Dance Company' },
      { role: 'Choreographer', name: 'Wesley Ruzibiza' },
      { role: 'Photo', name: 'Eye Films' },
      { role: 'Light Design', name: 'Ari' },
      { role: 'Music', name: 'Olivier Tarpaga' },
      { role: 'Peformers', name: 'Emmanuel Ahimana - Diana Odhiambo -\n Haloback Kabango -\n Kateregga Umar Nafi' }
    ],
    tags: ['Residency', 'East Africa Tour', 'Physical Theatre'],
    summary: 'Exploring the perpetual journey forward through themes of connection, solitude, loss, and mutual support between the individual and the group.',
    concept: `Around the themes of connection, solitude, support, loss, and trauma, Multitude explores the human experience of continually moving forward, no matter the challenges faced. 

In this perpetual journey toward what is believed to be an exit, stories emerge and intertwine in a back-and-forth between the individual and the group. Performed at Muda Africa in Tanzania and the Kigali Triennial Festival in Rwanda.`,
    quote: 'Stories emerge and intertwine in a back-and-forth between the individual and the group.',
    heroImage: '/images/multitude/IMG_3748.jpg',
    gallery: [
      '/images/multitude/IMG_0490.JPG',
      '/images/multitude/IMG_0491.JPG',
      '/images/multitude/IMG_0492.JPG',
      '/images/multitude/IMG_0493.JPG',
      '/images/multitude/IMG_0494.JPG',
      '/images/multitude/IMG_0495.JPG',
      '/images/multitude/IMG_0496.JPG',
      '/images/multitude/IMG_0497.JPG',
      '/images/multitude/IMG_0498.JPG',
      '/images/multitude/IMG_1318.jpg',
      '/images/multitude/IMG_1319.jpg',
      '/images/multitude/IMG_3732.jpg'
    ],
    featured: true
  },
  {
    id: '5',
    slug: 'miti-miti',
    title: 'MITI MITI',
    subtitle: 'Dance of Resistance & Survival',
    year: '2026',
    category: 'Solo Works',
    theme: 'Rebellion, Survival & Dual Worlds',
    location: 'Congo & Institut Français du Bukavu',
    duration: '30 Minutes',
    collaboratorsLabel: "Ensemble",
    collaborators: ['Emmanuel.A & Haloback.K', 'Emmanuel Ahimana'],
    role: 'Choreographer & Performer',
    credits: [
      { role: 'Ensemble: ', name: 'Emmanuel Ahimana & Haloback Kabango' },
      { role: 'Residency Host', name: 'Mot\'Art' },
      { role: 'Choreographer', name: 'Emmanuel & Haloback' },
    ],
    tags: ['Physical Resistance', 'Duet / Solo', 'Raw Kinetic Force'],
    summary: 'A fierce dance of resistance depicting the intense struggle between art and survival, asking whether existence itself demands constant battle.',
    concept: `Miti Miti is a dance of resistance and survival, portraying rebellion and ferocity between two worlds — art and everyday life. It unfolds as an intense competition between two beings bound by love yet driven by the need to endure within a landscape of chaos and creation. 

At its heart lies the struggle to meet basic needs, raising the question of whether existence itself demands constant battle. Ultimately, only one choice remains: Miti Miti — to stay rooted, to resist, to give the best of oneself, or to surrender and disappear.`,
    quote: 'To stay rooted, to resist, to give the best of oneself, or to disappear.',
    heroImage: '/images/miti-miti/IMG_0507.JPG',
    gallery: [
      '/images/miti-miti/IMG_0508.JPG',
      '/images/miti-miti/IMG_0509.JPG',
      '/images/miti-miti/IMG_0510.JPG',
      '/images/miti-miti/IMG_0511.JPG',
      '/images/miti-miti/IMG_0512.JPG',
      '/images/miti-miti/IMG_0513.JPG',
      '/images/miti-miti/IMG_0514.JPG',
      '/images/miti-miti/IMG_0515.JPG',
      '/images/miti-miti/IMG_0516.JPG',
      '/images/miti-miti/IMG_0517.JPG',
      '/images/miti-miti/IMG_0518.JPG'
    ],
    featured: false
  },
  {
    id: '6',
    slug: 'ecole-des-sables',
    title: 'École des Sables — Toubab Dialaw',
    subtitle: 'International Immersion in Black Urban & Contemporary Dances',
    year: '2024',
    category: 'Residencies',
    theme: 'Rhythm as Dialogue, African Contemporary Lineage',
    location: 'Toubab Dialaw, Sénégal',
    duration: '1 Month Immersion',
    collaboratorsLabel: "Ensemble",
    collaborators: ['École des Sables', 'Germaine Acogny Technique Center', 'International Masters'],
    role: 'Participant / Resident Artist',
    credits: [
      { role: 'Institution', name: 'École des Sables (Sénégal)' },
      { role: 'Technique Masters', name: 'Germaine Acogny Technique Center' },
      { role: 'Participant', name: 'Emmanuel Ahimana' }
    ],
    tags: ['Sénégal Immersion', 'Acogny Technique', 'African Diaspora Movement'],
    summary: 'Transformative international internship at the legendary École des Sables, cultivating physical movement as a spiritual dialogue with emotion.',
    concept: `It has been an honour to participate in an international professional internship at École des Sables in Sénégal, a world-renowned centre for dance and cultural exchange. 

This transformative experience allowed the body to embrace rhythm while connecting deeply with the inner self — cultivating physical movement as a dialogue with our emotions and a pathway to peacefulness. Through this immersion, dance became more than technique; it evolved into a journey of self-discovery, where rhythm and spirit intertwined to nurture artistic growth and inner harmony.`,
    quote: 'Cultivating physical movement as a dialogue with our emotions and a pathway to peacefulness.',
    heroImage: '/images/ecole-des-sables/1b78a41b-0c80-4447-a11c-295bef533aca.jpg',
    gallery: [
      '/images/ecole-des-sables/class senegal.jpeg',
      '/images/ecole-des-sables/IMG_3733.jpg'
    ],
    featured: false
  },
  {
    id: '7',
    slug: 'ingomanshya',
    title: 'INGOMANSHYA',
    subtitle: 'Coaching Choreographic Work with Ingomanshya Company',
    year: '2026',
    theme: 'Percussive Body Movement & Heritage Revival',
    location: 'Canada -Brazil tour',
    duration: '50 Minutes',
    collaboratorsLabel: "Ensemble",
    collaborators: ['Ingomanshya Company', 'Emmanuel Ahimana (Coaching)'],
    role: 'Coaching',
    credits: [
      { role: 'Production', name: 'Ingomanshya Company' },
      { role: 'Coaching', name: 'Emmanuel Ahimana & Kwizera Samuel' }
    ],
    tags: ['Touring Production', 'Company Choreography', 'Percussive Dance'],
    summary: 'Choreographed for Ingomanshya Company, blending deep Rwandan traditional drum rhythms with contemporary spatial exploration.',
    concept: `Ingomanshya represents an extraordinary synthesis of traditional drum heritage and modern contemporary choreographic vocabulary. Choreographed by Emmanuel Ahimana for Ingomanshya Company's flagship touring production in 2026, the piece explores how ancestral heartbeat translates into bodily resistance and forward momentum.`,
    quote: 'Translating ancestral heartbeat into bodily resistance and forward momentum.',
    heroImage: '/images/ingomanshya/IMG_0532.JPG',
    gallery: [
      '/images/ingomanshya/IMG_0532.JPG'
    ],
    featured: false
  }
];
