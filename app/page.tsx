import Image from "next/image";

const technologies = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "TypeScript",
  "JavaScript",
  "MongoDB",
  "PostgreSQL",
  "Redux Toolkit",
  "Tailwind CSS",
  "REST APIs",
  "JWT",
  "RBAC",
  "AWS",
  "Azure",
  "Vercel",
  "Render",
  "Docker",
  "Jest",
  "GitHub",
];

const experiences = [
  {
    period: "Sep 2021 — Apr 2026",
    duration: "4 yrs 8 mos",
    role: "Full Stack Developer",
    company: "Q2AMedia Services Pvt. Ltd.",
    points: [
      "Delivered 3+ production-grade full-stack applications using React.js, Next.js, Node.js, Express.js and MongoDB, serving thousands of daily active users.",
      "Architected a shared UI component library with 20+ reusable React components, reducing duplicate code by 30%.",
      "Designed and maintained scalable RESTful APIs using Node.js and Express.js with MongoDB.",
      "Implemented secure JWT, Bcrypt and Role-Based Access Control (RBAC) authentication.",
      "Improved application performance using lazy loading, code splitting, dynamic imports, image optimization and React memoization, increasing Lighthouse scores by 25+ points.",
      "Migrated application state management to Redux Toolkit, reducing boilerplate by 40%.",
      "Built responsive and cross-browser interfaces using HTML5, CSS3, Bootstrap, CSS Grid and Flexbox.",
      "Worked closely with UI/UX, backend, QA and product teams in Agile/Scrum environments.",
    ],
  },
  {
    period: "Jul 2015 — Oct 2019",
    duration: "",
    role: "Engineer",
    company: "Advance Metering Technology Ltd.",
    points: [
      "Started as Graduate Engineer Trainee in July 2015 and progressed to Engineer.",
      "Worked in a core engineering role before transitioning into professional software development.",
    ],
  },
];

const projects = [
  {
    title: "SarkariResult.rest",
    category: "Production Platform",
    description:
      "A full-stack government job and exam information platform independently designed, built and operated, serving 10,000+ monthly users.",
    image: "/sarkari-result.png",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AWS S3",
      "Vercel",
    ],
    live: "https://sarkariresult.rest",
    github: "https://github.com/abhaysachan232",
  },
  {
    title: "Admin Dashboard",
    category: "Full Stack Application",
    description:
      "A scalable administration platform with analytics, content management, authentication, role-based access and business data management.",
    image: "/admin-dashboard.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redux Toolkit",
    ],
    live: "#",
    github: "https://github.com/abhaysachan232",
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack Application",
    description:
      "A modern e-commerce application with reusable React components, API integration, authentication, product management and responsive interfaces.",
    image: "/ecommerce.png",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "REST API",
    ],
    live: "https://www.bigcmobiles.com/",
    github: "https://github.com/abhaysachan232",
  },
  {
    title: "react-perf-kit",
    category: "Open Source • npm Package",
    description:
      "An open-source React performance optimization package providing ready-to-use utilities based on React.memo, useMemo, useCallback and lazy loading.",
    image: "/admin-dashboard.png",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Performance",
    ],
    live: "https://www.npmjs.com/package/react-perf-kit",
    // github: "https://github.com/abhaysachan232",
  },
  {
    title: "Real-Time Data App",
    category: "React Application",
    description:
      "A real-time data dashboard that fetches, processes and displays live API data with auto-refresh and reusable custom React hooks.",
    image: "/admin-dashboard.png",
    technologies: [
      "React.js",
      "REST API",
      "Custom Hooks",
      "JavaScript",
    ],
    live: "#",
    // github: "https://github.com/abhaysachan232",
  },
];

const stats = [
  {
    number: "4+",
    label: "Years Experience",
  },
  {
    number: "10K+",
    label: "Monthly Users",
  },
  {
    number: "20+",
    label: "Reusable Components",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ================= NAVBAR ================= */}

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#07111f]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

          <a
            href="#home"
            className="text-2xl font-bold tracking-tight text-white"
          >
            A<span className="text-blue-500">S</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="nav-link">
              Home
            </a>

            <a href="#about" className="nav-link">
              About
            </a>

            <a href="#skills" className="nav-link">
              Skills
            </a>

            <a href="#projects" className="nav-link">
              Projects
            </a>

            <a href="#experience" className="nav-link">
              Experience
            </a>

            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            Download Resume
          </a>

        </nav>
      </header>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative overflow-hidden bg-[#07111f] pt-32 text-white"
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(37,99,235,0.18),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 lg:grid-cols-[1fr_520px] lg:px-10 lg:pb-28">

          {/* LEFT */}

          <div className="animate-fade-right">

            <p className="mb-3 text-lg text-slate-200">
              Hi, I&apos;m
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Abhay{" "}
              <span className="text-blue-500">
                Sachan
              </span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">
              Full Stack Developer
            </h2>

            <p className="mt-2 text-lg text-slate-300">
              React Developer | Frontend Engineer | MERN Stack Developer
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              React.js • Next.js • Node.js • TypeScript
            </p>

            <p className="mt-2 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              I build production-grade web applications with a strong focus
              on performance, scalable architecture, reusable components and
              great user experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-500"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-500 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
              >
                Contact Me
              </a>

            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">

              <a
                href="https://github.com/abhaysachan232"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/abhay-sachan"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:sachanabhay492@gmail.com"
                className="transition hover:text-white"
              >
                Email
              </a>

            </div>

          </div>

          {/* PROFILE */}

          <div className="relative flex justify-center lg:justify-end">

            <div className="absolute h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-2xl">

              <Image
                src="/profile.jpg"
                alt="Abhay Sachan - Full Stack Developer"
                width={420}
                height={520}
                priority
                className="h-[430px] w-[350px] object-cover object-top"
              />

            </div>

            {/* STATS */}

            <div className="absolute right-[-125px] top-10 hidden w-[115px] border-l border-slate-700 pl-6 lg:block">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="mb-9 last:mb-0"
                >
                  <p className="text-3xl font-bold text-blue-500">
                    {stat.number}
                  </p>

                  <p className="mt-2 text-sm leading-5 text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="py-20 lg:py-28"
      >

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">

          <div>

            <div className="mb-5 h-1 w-12 bg-blue-500" />

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Me
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              React / MERN Stack Developer with 4+ years of experience
              designing, building and owning production-grade React.js and
              Next.js frontends backed by Node.js, Express.js and MongoDB
              services.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              My core strengths include React performance optimization,
              reusable component architecture, Redux Toolkit, REST API
              development, JWT authentication, RBAC and scalable full-stack
              application development.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              I have hands-on experience with AWS, Azure, Vercel and Render,
              and I regularly use AI-assisted development tools such as
              GitHub Copilot and Claude for coding, debugging, refactoring and
              documentation.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">

              <div>
                <p className="font-semibold">
                  📍 Location
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Noida, India
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  ✉ Email
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  sachanabhay492@gmail.com
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  💼 Focus
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Full Stack Development
                </p>
              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-slate-50 p-8 lg:p-10">

            <div className="text-5xl text-blue-500">
              “
            </div>

            <p className="mt-2 text-xl font-medium leading-8 text-slate-700">
              I focus on building maintainable software that performs well,
              scales reliably and provides a great experience for users.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200 pt-8">

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="text-2xl text-blue-500">
                  ⚡
                </div>

                <p className="mt-2 font-semibold">
                  Performance
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Core Web Vitals & Lighthouse
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="text-2xl text-blue-500">
                  &lt;/&gt;
                </div>

                <p className="mt-2 font-semibold">
                  Clean Code
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Reusable architecture
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="text-2xl text-blue-500">
                  ◉
                </div>

                <p className="mt-2 font-semibold">
                  Scalable Apps
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Full-stack solutions
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="text-2xl text-blue-500">
                  🔐
                </div>

                <p className="mt-2 font-semibold">
                  Secure APIs
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  JWT & RBAC
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="bg-slate-50 py-20 lg:py-24"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-10">

            <div className="mb-5 h-1 w-12 bg-blue-500" />

            <h2 className="text-4xl font-bold">
              Technical Skills
            </h2>

            <p className="mt-3 max-w-2xl text-slate-500">
              Technologies and tools I use to build production-ready
              applications.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">

            {technologies.map((technology) => (
              <div
                key={technology}
                className="flex min-h-20 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm font-medium shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                {technology}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="py-20 lg:py-28"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-12">

            <div className="mb-5 h-1 w-12 bg-blue-500" />

            <h2 className="text-4xl font-bold sm:text-5xl">
              Featured Projects
            </h2>

            <p className="mt-4 max-w-3xl text-slate-500">
              Selected production, open-source and full-stack projects
              demonstrating my experience across frontend, backend,
              performance and deployment.
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative aspect-video overflow-hidden bg-slate-100">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="p-7">

                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                  <div className="mt-7 flex gap-5">

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-blue-600 transition hover:text-blue-500"
                      >
                        Live Project ↗
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-slate-700 transition hover:text-blue-600"
                    >
                      GitHub ↗
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="bg-slate-50 py-20 lg:py-28"
      >

        <div className="mx-auto max-w-5xl px-6 lg:px-10">

          <div className="mb-12">

            <div className="mb-5 h-1 w-12 bg-blue-500" />

            <h2 className="text-4xl font-bold sm:text-5xl">
              Professional Experience
            </h2>

          </div>

          <div className="space-y-12">

            {experiences.map((experience) => (
              <div
                key={`${experience.company}-${experience.role}`}
                className="relative border-l-2 border-blue-200 pl-8"
              >

                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-slate-50" />

                <p className="text-sm font-semibold text-blue-600">
                  {experience.period}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {experience.role}
                </h3>

                <p className="mt-1 font-medium text-slate-500">
                  {experience.company}
                  {experience.duration && (
                    <> • {experience.duration}</>
                  )}
                </p>

                <ul className="mt-6 space-y-3">

                  {experience.points.map((point) => (
                    <li
                      key={point}
                      className="leading-7 text-slate-600"
                    >
                      <span className="mr-2 text-blue-500">
                        •
                      </span>
                      {point}
                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= EDUCATION ================= */}

      <section
        id="education"
        className="py-20 lg:py-24"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-10">

            <div className="mb-5 h-1 w-12 bg-blue-500" />

            <h2 className="text-4xl font-bold">
              Education & Certification
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

              <p className="text-sm font-semibold text-blue-600">
                2011 — 2015
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Bachelor of Technology (B.Tech)
              </h3>

              <p className="mt-2 text-slate-500">
                Mechanical Engineering
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Uttar Pradesh Technical University (UPTU)
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                Transitioned into Full-Stack Web Development through
                professional, self-directed learning and hands-on project
                work.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

              <p className="text-sm font-semibold text-blue-600">
                Jan 2021
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Front-End Web Development Course
              </h3>

              <p className="mt-2 text-slate-500">
                Geekster
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                Professional certification focused on front-end web
                development.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#07111f] py-20 text-white lg:py-28"
      >

        <div className="absolute right-[-150px] top-[-200px] h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-12">

            <div className="mb-5 h-1 w-12 bg-blue-500" />

            <h2 className="text-4xl font-bold sm:text-5xl">
              Let&apos;s Work Together
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Have a project, job opportunity or an interesting idea?
              I&apos;d love to hear from you.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <a
              href="mailto:sachanabhay492@gmail.com"
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-blue-500"
            >
              <p className="text-sm text-slate-400">
                Email
              </p>

              <p className="mt-2 font-semibold">
                sachanabhay492@gmail.com
              </p>
            </a>

            <a
              href="tel:+919807941794"
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-blue-500"
            >
              <p className="text-sm text-slate-400">
                Phone
              </p>

              <p className="mt-2 font-semibold">
                +91 98079 41794
              </p>
            </a>

            <a
              href="https://linkedin.com/in/abhay-sachan"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-blue-500"
            >
              <p className="text-sm text-slate-400">
                LinkedIn
              </p>

              <p className="mt-2 font-semibold">
                abhay-sachan ↗
              </p>
            </a>

          </div>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="mailto:sachanabhay492@gmail.com"
              className="rounded-lg bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-500"
            >
              Get In Touch →
            </a>

            <a
              href="https://github.com/abhaysachan232"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-600 px-7 py-3.5 font-semibold transition hover:border-blue-500 hover:text-blue-400"
            >
              GitHub ↗
            </a>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-800 bg-[#07111f] py-7 text-sm text-slate-500">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 sm:flex-row lg:px-10">

          <p>
            © 2026 Abhay Sachan. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">

            <a
              href="https://github.com/abhaysachan232"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/abhay-sachan"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:sachanabhay492@gmail.com"
              className="transition hover:text-white"
            >
              Email
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Resume
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}