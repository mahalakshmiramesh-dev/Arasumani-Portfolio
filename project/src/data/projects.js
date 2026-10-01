// ============================================================
// PROJECTS DATA
// Your resume did not list any specific projects, so all 5
// slots below are editable placeholders — nothing here was
// invented as fact. Replace the placeholder text and images
// with your real project details whenever you're ready.
//
// HOW TO EDIT A PROJECT
// - title, description, technologies: plain text/array, edit directly.
// - overview / problem / role / outcome: shown on the project's
//   detail page (/projects/project-1 etc).
// - features: short bullet list shown on the detail page.
// - image: main card + hero image. Replace the file at the path
//   given (e.g. /public/images/projects/project1/main.jpg).
// - gallery: extra images shown on the detail page. Replace the
//   files at the given paths.
//
// HOW TO ADD A 6th PROJECT LATER
// 1. Copy one of the objects below, change the "id" to
//    "project-6" and fill in the fields.
// 2. Add a folder public/images/projects/project6/ with
//    main.jpg, image1.jpg, image2.jpg.
// 3. In src/App.jsx, add a route:
//    <Route path="/projects/project-6" element={<ProjectDetails />} />
//    (ProjectDetails automatically looks up data by the id in the URL.)
// ============================================================

const projects = [
  {
    id: "project-1",
    isPlaceholder: true,
    number: "01",
    title: "Add your first project title",
    description:
      "This is an editable placeholder. Replace this text in src/data/projects.js with a short description of a real project you've worked on — coursework, site work, a design exercise, or personal study.",
    technologies: [],
    image: "/images/projects/project1/main.jpg",
    gallery: [
      "/images/projects/project1/image1.jpg",
      "/images/projects/project1/image2.jpg",
    ],
    overview: "Add a 2–3 sentence overview of this project here.",
    problem: "Describe the problem or brief this project addressed.",
    features: ["Add a feature or scope item", "Add another feature or scope item"],
    role: "Describe your role and contribution.",
    outcome: "Describe the result or outcome of the project.",
  },
  {
    id: "project-2",
    isPlaceholder: true,
    number: "02",
    title: "Add your second project title",
    description:
      "This is an editable placeholder. Replace this text in src/data/projects.js with a short description of a real project you've worked on.",
    technologies: [],
    image: "/images/projects/project2/main.jpg",
    gallery: [
      "/images/projects/project2/image1.jpg",
      "/images/projects/project2/image2.jpg",
    ],
    overview: "Add a 2–3 sentence overview of this project here.",
    problem: "Describe the problem or brief this project addressed.",
    features: ["Add a feature or scope item", "Add another feature or scope item"],
    role: "Describe your role and contribution.",
    outcome: "Describe the result or outcome of the project.",
  },
  {
    id: "project-3",
    isPlaceholder: true,
    number: "03",
    title: "Add your third project title",
    description:
      "This is an editable placeholder. Replace this text in src/data/projects.js with a short description of a real project you've worked on.",
    technologies: [],
    image: "/images/projects/project3/main.jpg",
    gallery: [
      "/images/projects/project3/image1.jpg",
      "/images/projects/project3/image2.jpg",
    ],
    overview: "Add a 2–3 sentence overview of this project here.",
    problem: "Describe the problem or brief this project addressed.",
    features: ["Add a feature or scope item", "Add another feature or scope item"],
    role: "Describe your role and contribution.",
    outcome: "Describe the result or outcome of the project.",
  },
  {
    id: "project-4",
    isPlaceholder: true,
    number: "04",
    title: "Add your fourth project title",
    description:
      "This is an editable placeholder. Replace this text in src/data/projects.js with a short description of a real project you've worked on.",
    technologies: [],
    image: "/images/projects/project4/main.jpg",
    gallery: [
      "/images/projects/project4/image1.jpg",
      "/images/projects/project4/image2.jpg",
    ],
    overview: "Add a 2–3 sentence overview of this project here.",
    problem: "Describe the problem or brief this project addressed.",
    features: ["Add a feature or scope item", "Add another feature or scope item"],
    role: "Describe your role and contribution.",
    outcome: "Describe the result or outcome of the project.",
  },
  {
    id: "project-5",
    isPlaceholder: true,
    number: "05",
    title: "Add your fifth project title",
    description:
      "This is an editable placeholder. Replace this text in src/data/projects.js with a short description of a real project you've worked on.",
    technologies: [],
    image: "/images/projects/project5/main.jpg",
    gallery: [
      "/images/projects/project5/image1.jpg",
      "/images/projects/project5/image2.jpg",
    ],
    overview: "Add a 2–3 sentence overview of this project here.",
    problem: "Describe the problem or brief this project addressed.",
    features: ["Add a feature or scope item", "Add another feature or scope item"],
    role: "Describe your role and contribution.",
    outcome: "Describe the result or outcome of the project.",
  },
];

export default projects;
