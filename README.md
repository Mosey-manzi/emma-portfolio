# Emmanuel Ahimana — Choreographic Portfolio

An immersive, dynamic web portfolio for **Emmanuel Ahimana**, contemporary choreographer, soloist, and dance instructor based in Kigali, Rwanda.

---

## 🚀 Quick Start Guide for Developers

### Prerequisites
- **Node.js**: `v18.x` or higher recommended
- **Package Manager**: `npm` or `yarn` / `pnpm`

### Local Development
To launch the local development server:

```bash
# Install project dependencies
npm install

# Start local Next.js development server (runs on http://localhost:3000)
npm run dev
```

### Production Build & Static Export
To compile and test the production bundle locally:

```bash
# Type check & build production bundle
npm run build

# Preview the built production application
npm run start
```

---

## 📁 Repository Architecture & Folder Structure

```text
emma-portfolio/
├── app/                        # Next.js App Router (Pages & API Routes)
│   ├── layout.tsx              # Root HTML layout, font setup, navigation header & footer
│   ├── page.tsx                # Homepage (Hero, Artistic Manifesto, Featured Choreographies)
│   ├── projects/
│   │   ├── page.tsx            # Full Choreographic Repertoire listing & category filters
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic Project Detail page (Narrative, Credits Panel, Lightbox)
│   ├── about/                  # Biography & Artistic Statement page
│   ├── gallery/                # Full Visual Documentation gallery & lightbox
│   ├── resume/                 # CV, Experience timeline & Workshop history page
│   ├── contact/                # Booking & collaboration contact form
│   └── api/
│       └── contact/route.ts    # Contact form API endpoint (Resend / Email dispatch)
├── components/                 # Reusable UI & Animation components
│   ├── animations/             # Framer Motion text reveals, image parallax & smooth transitions
│   └── ui/                     # Buttons, modals, and container shells
├── data/                       # Centralized Data Layer (TypeScript data models)
│   ├── projects.ts             # Projects data schema, descriptions & collaborator credits
│   ├── biography.ts            # Artistic bio, philosophy pillars & press quotes
│   └── resume.ts               # Experience timeline, workshops, skills & education
├── public/                     # Static media assets & images
│   ├── images/                 # Project images sorted by project slug (e.g. irebe, kwibuka30)
│   └── resume/                 # Downloadable CV PDF file
└── project additional photos/  # Raw source photo archives for client expansion
```

---

## 🛠️ Data Maintenance & Adding New Projects

All project data is stored in `data/projects.ts`. To add a new choreographic work or update credits for an existing piece:

### 1. Project Interface Schema (`data/projects.ts`)
```typescript
export interface ProjectCredit {
  role: string; // Credit title (e.g., 'Photo', 'Music', 'Choreographer', 'Costume Design')
  name: string; // Name of person or entity (e.g., 'Wesley Ruzibiza', 'Eye Films')
}

export interface Project {
  id: string;            // Unique numeric ID string (e.g., '8')
  slug: string;          // URL slug (e.g., 'new-piece-2026')
  title: string;         // Project title
  subtitle: string;      // Secondary descriptor line
  year: string;          // Premiere year (e.g., '2026')
  category: 'Solo Works' | 'Commemorative' | 'Opera & Collaboration' | 'Residencies';
  theme: string;         // Core artistic themes
  location: string;      // Premiere venue or tour locations
  duration: string;      // Performance length (e.g., '30 Minutes')
  collaborators: string[]; // High-level list of key partners
  role?: string;         // Emmanuel's exact role (e.g., 'Assistant Choreographer & Dancer')
  credits?: ProjectCredit[]; // Structured team attribution list for credits card
  tags: string[];        // Performance tags (e.g., ['Solo Piece', 'Contemporary'])
  summary: string;       // Short card description
  concept: string;       // Detailed choreographic narrative text
  quote?: string;        // Highlight quote
  heroImage: string;     // Cover image path (e.g., '/images/new-piece/hero.jpg')
  gallery: string[];     // Gallery image paths
  featured: boolean;     // True to show on Homepage featured section
}
```

### 2. Standard Credit Attribution Formatting
When updating project credits:
- **Emmanuel's Role**: Always fill the `role` field accurately (e.g., `Assistant Choreographer & Dancer` or `Dancer / Performer`) so Emmanuel's specific role is transparent.
- **Credit List**: Include all team credits in `credits`:
  ```typescript
  credits: [
    { role: 'Photo', name: 'Photographer Name' },
    { role: 'Music', name: 'Composer Name' },
    { role: 'Choreographer', name: 'Lead Choreographer Name' },
    { role: 'Production', name: 'Company Name' }
  ]
  ```

---

## 🎨 Design System & Styling

- **CSS Framework**: Tailwind CSS with custom global CSS tokens in `app/globals.css`
- **Color Palette**: Dark stage aesthetic with Gold accent (`#c8a96e`), warm off-white text (`#f5f4f0`), and glassmorphism panel backdrops (`glass-panel`).
- **Typography**: Playfair Display (Serif) for headings, Inter (Sans) for UI body copy.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory for contact form dispatches:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_RECIPIENT_EMAIL=emmanuelahimana01@gmail.com
```

---

## 📄 License & Ownership

All choreographic concepts, performance documentation, and photography assets are property of **Emmanuel Ahimana** and credited collaborators.
