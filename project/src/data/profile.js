// ============================================================
// PROFILE DATA
// Edit the values below to update your personal information.
// Fields left as an empty string ("") or empty array ([]) mean
// no data was available yet — fill them in whenever you're ready.
// ============================================================

const profile = {
  name: "Arasumani A",

  // Small label above the hero heading.
  heroEyebrow: "Civil Engineering Portfolio",

  // Shown as two lines under the hero name.
  roleLines: ["Civil Engineer &", "Technical Trainer"],

  // Hero description paragraph.
  heroIntro:
    "Civil Engineering professional with experience in technical training, architectural drafting, BIM modelling, site surveying and engineering-related workflows.",

  // About section — two-line stylised heading.
  aboutHeading: ["About", "Me"],

  // About section intro line — your name is rendered in bold automatically,
  // this is just the text that comes after it.
  aboutIntroSuffix:
    ", a Civil Engineer and Architectural Draughtsman with a strong interest in architectural planning, drafting and technical design.",
  about: [
    "I focus on creating accurate 2D working drawings, detailed plans and 3D models with attention to precision, functionality and design.",
  ],

  // Numbered focus-area cards shown in the About section.
  aboutDetails: [
    {
      number: "01",
      title: "Civil Engineering",
      description:
        "Strong foundation in civil engineering, planning and construction-related design.",
    },
    {
      number: "02",
      title: "BIM / Drafting",
      description:
        "Architectural plans, elevations, interior layouts and BIM-based models using industry-standard software.",
    },
    {
      number: "03",
      title: "Technical Training",
      description:
        "Delivering hands-on civil technical training, covering practical and industry-oriented project standards.",
    },
  ],

  // Path to your profile photo — used in the Hero and About sections.
  // Replace the file at this path, keeping the same filename.
  profileImage: "/images/profile/profile.jpg",

  contact: {
    email: "arasumanidass@gmail.com",
    phone: "+91 9750498343",
    location: "Therkupoigainallur, Nagapattinam",
  },

  // Add objects like { label: "LinkedIn", url: "https://linkedin.com/in/..." }
  socialLinks: [
    // { label: "LinkedIn", url: "" },
    // { label: "GitHub", url: "" },
  ],

  skills: [
    {
      name: "AutoCAD",
      description:
        "Proficient in creating detailed 2D and 3D designs, drafting blueprints, and modifying existing plans for various engineering projects.",
    },
    {
      name: "Microsoft Office",
      description:
        "Skilled in Word, Excel, and PowerPoint for documentation, data analysis, and creating professional presentations.",
    },
    {
      name: "Construction Management",
      description:
        "Understanding of construction processes, safety regulations, and quality control measures. Experienced in supervising construction activities, conducting site inspections, and ensuring compliance with design specifications.",
    },
  ],

  achievements: [
    {
      title: "Volleyball — Anna University Zonal Winner",
      description:
        "Awarded for outstanding performance and teamwork in the zonal level volleyball competition organized by Anna University.",
    },
    {
      title: "L&D Workshop on Building Information Modeling (BIM)",
      description:
        "Attended a comprehensive workshop on BIM, enhancing knowledge in integrating and managing building data using Revit and other BIM tools.",
    },
  ],
};

export default profile;
