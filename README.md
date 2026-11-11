# Raifa TK — Data Analyst Portfolio

A premium, editorial-inspired portfolio website for Raifa TK — Data Analyst specialising in Business Intelligence, ERP Analytics and Data Consulting.

**Live:** [raifa-tk.github.io](https://raifa-tk.github.io/)

---

## Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Lucide React** (icons)
- **GitHub Pages** (hosting)

---

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Experience, Projects, Skills, Certifications, Mentorship, Contact
│   └── ui/           # ProjectCard, Timeline, StatCounter, TechTag, ThemeToggle, BackToTop
├── data/             # projects.ts, experience.ts, skills.ts, certifications.ts
├── hooks/            # useTheme, useScrollSpy, useReveal
└── styles/           # globals.css
```

---

## Local Development

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

---

## Customisation

### Add a Resume
Place your resume PDF at:
```
public/assets/resume.pdf
```

### Update Profile Photo
Replace:
```
public/assets/profile.jpg
```

### Update Availability Status
In `src/components/sections/Hero.tsx`, change:
```ts
const AVAILABILITY: 'open' | 'limited' | 'closed' = 'limited';
```

### Add Projects
Edit `src/data/projects.ts` and add project screenshots to `public/assets/projects/`.

### Add Certifications
Edit `src/data/certifications.ts`.

---

## Deployment

Automated via GitHub Actions on push to `main`.

**Manual build:**
```bash
npm run build
```
Output in `dist/`.

---

## Content Accuracy

All project metrics and achievements in this portfolio represent actual work unless explicitly labelled as:
- **Portfolio Prototype** — fictional data, conceptual design
- **Illustrative content** — representative screenshots, not actual system views

---

## Colour Palette

| Token | Value |
|-------|-------|
| Ivory | `#F3F0E8` |
| Charcoal | `#252722` |
| Olive | `#737B55` |
| Forest | `#263B30` |
| Terracotta | `#B96F52` |
| Soft Grey | `#D9D7CE` |
