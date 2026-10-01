# Arasumani A — Civil Engineering Portfolio

A personal portfolio site built with React + Vite + React Router, styled
as a dark, engineering-focused UI: charcoal background, mineral-white
text, and a single chartreuse/lime accent used sparingly. All personal
content (name, education, experience, skills, contact, achievements) is
pulled from `src/data/`. The resume/brief listed no specific projects,
so all 5 project cards are clearly marked editable placeholders —
nothing was invented.

## 1. Run it in VS Code

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build
npm run preview
```

## 2. Where everything lives

```
src/
├── components/       Navbar, Hero, About, Experience, Education,
│                      Achievements, ProjectCard, Contact, Footer —
│                      plus small helpers: Marquee, MaskText,
│                      StatCounter — each with its own .css file.
├── hooks/
│   ├── useReveal.js     Scroll-triggered fade/slide-in animation.
│   └── useMagnetic.js   Cursor-follow "magnetic" button effect.
├── pages/
│   ├── Home.jsx        Assembles all sections into the home page.
│   └── ProjectDetails.jsx   Renders /projects/project-1 … project-5.
├── data/
│   ├── profile.js      Name, hero text, about copy, focus-area cards,
│   │                    skills, achievements, contact info.
│   ├── education.js    Education Journey cards.
│   ├── experience.js   Experience timeline cards (most-recent-first).
│   └── projects.js     The 5 project cards + detail-page content.
├── App.jsx            Routes (/ and /projects/:projectId).
├── main.jsx            App entry point.
└── index.css           Design tokens (colors, fonts, spacing) + globals.

public/
└── images/
    ├── profile/profile.jpg
    ├── experience/experience1.jpg, experience2.jpg
    └── projects/project1…project5/ (main.jpg, image1.jpg, image2.jpg)
```

## 3. Edit your content

You never need to touch the component files to change text — everything
editable lives in `src/data/`:

| Want to change...          | Edit this file             |
|-----------------------------|-----------------------------|
| Name, hero text, about heading/intro, focus-area cards, skills, contact | `src/data/profile.js` |
| Education entries           | `src/data/education.js`     |
| Work experience (role, company, dates, description, photo) | `src/data/experience.js` |
| Projects (all 5)             | `src/data/projects.js`      |

**Experience entries** support an optional `image` — set it to `null` for a
text-only entry (used for the current role, which has no site photo yet).

## 4. Add your real images

Replace these placeholder files with your own photos, **keeping the
same filenames and paths** so nothing breaks:

- `public/images/profile/profile.jpg` — your profile photo (used in both the Hero and About sections)
- `public/images/experience/experience1.jpg` — Site Surveyor role photo
- `public/images/experience/experience2.jpg` — Junior Engineer role photo
  (the current Technical Trainer role has no photo slot — add one by setting
  `image: "/images/experience/experience3.jpg"` in `src/data/experience.js`
  and dropping a file at that path)
- `public/images/projects/project1/main.jpg`, `image1.jpg`, `image2.jpg` — and the same for `project2` … `project5`

Every placeholder image currently shown is a labeled graphic telling you
exactly which file to replace (e.g. "ADD YOUR PHOTO — replace profile.jpg").

## 5. Add a 6th project later

1. Duplicate one of the project objects in `src/data/projects.js`, set
   `id: "project-6"`, and fill in the fields.
2. Create `public/images/projects/project6/` with `main.jpg`, `image1.jpg`,
   `image2.jpg`.
3. In `src/App.jsx`, add:
   ```jsx
   <Route path="/projects/project-6" element={<ProjectDetails />} />
   ```
   (`ProjectDetails` automatically looks up the right data by the id in the URL, so no new page component is needed.)
4. It will automatically appear in the Projects section since that section
   maps over the `projects` array.

## 6. Change colors and fonts

Open `src/index.css` and edit the `:root { ... }` block at the top:

```css
--bg: #111111;         /* page background */
--accent: #b7ff00;     /* the one accent color — used sparingly */
--text: #f2f2e9;       /* main text color */

--font-display: "Big Shoulders Display", sans-serif; /* headings */
--font-body: "IBM Plex Sans", sans-serif;             /* body text */
```

Changing these variables updates the whole site — no need to hunt through
individual component CSS files. Fonts are loaded from Google Fonts in
`index.html`; swap the `<link>` there if you pick different typefaces.

## 7. Connect the contact form

The contact form (bottom of the page) currently only logs to the browser
console — there's no backend attached. Open `src/components/Contact.jsx`
and look for the comment inside `handleSubmit` for exactly where to plug
in a service like Formspree, EmailJS, or your own API endpoint.

## 8. Notes on content accuracy

Every fact on this site (name, education, GPA/percentages, internship,
skills, certifications) was copied directly from your uploaded resume.
No companies, projects, skills, or achievements were invented. Fields
with no resume data (LinkedIn, GitHub, other social links) were left
empty in `src/data/profile.js` for you to fill in.
