import Image from "next/image";

const skillCategories = [
  {
    title: "Core Languages & Platforms",
    skills: [
      { name: "Kotlin", level: 95 },
      { name: "Android Development", level: 95 },
      { name: "Java", level: 85 },
      { name: "XML", level: 95 },
    ],
  },
  {
    title: "Architecture & Design Patterns",
    skills: [
      { name: "MVVM Architecture", level: 92 },
      { name: "Clean Architecture", level: 90 },
      { name: "Modular Architecture", level: 85 },
    ],
  },
  {
    title: "UI / UX",
    skills: [
      { name: "Jetpack Compose", level: 90 },
      { name: "Responsive UI/UX Design", level: 88 },
      { name: "Material Design", level: 90 },
      { name: "Navigation Component", level: 90 },
    ],
  },
  {
    title: "Jetpack & Android Libraries",
    skills: [
      { name: "Android Jetpack Libraries", level: 90 },
      { name: "LiveData & State Management", level: 90 },
      { name: "Data Binding & View Binding", level: 88 },
      { name: "Paging 3", level: 82 },
      { name: "WorkManager", level: 85 },
    ],
  },
  {
    title: "Backend & Networking",
    skills: [
      { name: "Retrofit & REST APIs", level: 90 },
      { name: "API Integration", level: 92 },
      { name: "JSON Parsing", level: 90 },
      { name: "Third-Party SDK Integration", level: 92 },
    ],
  },
  {
    title: "Database & Storage",
    skills: [
      { name: "Room Database", level: 88 },
      { name: "SQLite", level: 85 },
      { name: "Firebase", level: 88 },
    ],
  },
  {
    title: "Async & Background Processing",
    skills: [
      { name: "Coroutines & Kotlin Flow", level: 87 },
      { name: "Background Services", level: 88 },
      { name: "Hilt Dependency Injection", level: 88 },
    ],
  },
  {
    title: "Firebase & Notifications",
    skills: [
      { name: "Firebase Cloud Messaging (FCM)", level: 88 },
      { name: "Push Notifications", level: 90 },
    ],
  },
  {
    title: "Monetization & Play Store",
    skills: [
      { name: "Google AdMob Integration", level: 92 },
      { name: "Ads Optimization & Mediation", level: 90 },
      { name: "Google Play Console", level: 92 },
      { name: "Play Store Policy Compliance", level: 90 },
      { name: "App Deployment & Publishing", level: 92 },
    ],
  },
  {
    title: "Advanced & AI Features",
    skills: [
      { name: "ExoPlayer", level: 85 },
      { name: "ML Kit", level: 82 },
    ],
  },
  {
    title: "Performance & Security",
    skills: [
      { name: "Performance Optimization", level: 90 },
      { name: "Crash & ANR Optimization", level: 88 },
      { name: "Memory Leak Fixing", level: 82 },
      { name: "App Security & Data Protection", level: 80 },
    ],
  },
  {
    title: "Tools, DevOps & Soft Skills",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "CI/CD Concepts", level: 75 },
      { name: "Debugging & Testing", level: 90 },
      { name: "Agile Development Workflow", level: 82 },
      { name: "Problem Solving", level: 92 },
      { name: "Team Collaboration", level: 90 },
    ],
  },
];

const experiences = [
  {
    period: "Dec 2025 – Present",
    role: "Senior Android Developer",
    company: "Bitzone Technology",
    location: "Rawalpindi, Pakistan",
    points: [
      "Strategic Leadership & Project Ownership: End-to-end ownership of the development lifecycle for new Android applications, from initial conceptualization and architectural design to successful Play Store deployment.",
      "Legacy Modernization: Managing and scaling a portfolio of 20+ existing applications, refactoring legacy codebases into modern Clean Architecture and MVVM patterns to enhance maintainability.",
      "Team Mentorship & Management: Leading a team of developers, conducting rigorous code reviews, and assigning technical tasks to ensure high-quality output and timely project delivery.",
      "UI/UX Excellence: Architecting high-performance, responsive user interfaces using Jetpack Compose and Material 3 design principles.",
      "Performance Engineering: Spearheading efforts to optimize app stability and speed, utilizing CPU profiling and memory leak detection to ensure a seamless experience for millions of users.",
      "Integration & Scalability: Implementing complex REST APIs, Firebase services (Analytics, Cloud Messaging, Remote Config), and third-party SDKs to drive user engagement and app functionality.",
    ],
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture", "Firebase", "REST APIs"],
  },
  {
    period: "Mar 2024 – Dec 2025",
    role: "Android App Developer",
    company: "Funprime Technology",
    location: "Islamabad, Pakistan",
    points: [
      "High-Impact Development: Directed the development of production-grade utility and AI-driven applications catering to a global user base of millions.",
      "Stability Optimization: Achieved a 99% crash-free rate by implementing robust error handling and optimizing background processing with Coroutines and WorkManager.",
      "Monetization Excellence: Engineered advanced Google AdMob and Mediation strategies, optimizing ad placements and refresh rates to maximize Target ROAS without compromising user experience.",
      "Compliance & Security: Managed full Google Play policy compliance reviews, ensuring all applications met evolving privacy and security standards for uninterrupted service.",
    ],
    tags: ["Kotlin", "Coroutines", "WorkManager", "AdMob", "Google Play", "AI Integration"],
  },
  {
    period: "Jan 2022 – Feb 2024",
    role: "Junior Android Developer",
    company: "Bitzone Technology",
    location: "Rawalpindi, Pakistan",
    points: [
      "Application Development & Lifecycle Support: Supported the development of new Android applications with involvement in architectural design and Play Store deployment processes.",
      "Codebase Refactoring & Code Quality: Participated in refactoring and modernizing existing applications using Clean Architecture and MVVM design patterns.",
      "Collaborative Development & Code Review: Worked within development teams, participated in code reviews, and assisted with technical task assignments.",
      "User Interface Development & Design Implementation: Developed responsive and performant user interfaces using Jetpack Compose and Material Design 3.",
      "App Performance Optimization & Stability: Contributed to performance improvements and bug fixes using profiling tools and memory leak detection techniques.",
      "API Integration & Third-Party Services: Worked on integrating REST APIs, Firebase services, and third-party SDKs into Android applications.",
    ],
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Android SDK", "Firebase", "REST APIs"],
  },
  {
    period: "Jul 2021 – Jan 2022",
    role: "Android Developer Intern",
    company: "Apptrick Technologies",
    location: "Rawalpindi, Pakistan",
    points: [
      "Technical Foundation: Assisted senior developers in building and testing Android applications, gaining deep expertise in the Android SDK and UI development.",
      "Quality Assurance: Focused on debugging techniques and foundational performance optimization to ensure app reliability.",
    ],
    tags: ["Android SDK", "Kotlin", "Java", "Debugging", "UI Development"],
  },
];

const projects = [
  {
    emoji: "🎬",
    title: "ReelMax Video Player AllFormat",
    description: "Developed a modern Android video player application with HD playback, multi-format media support, TV casting, and smooth media management features. Focused on performance optimization, responsive UI, and scalable app architecture for an enhanced user experience.",
    liveLink: "https://play.google.com/store/apps/details?id=com.Reelmax.vidplay.save",
    tags: ["Kotlin", "XML", "Firebase", "Room Database", "Retrofit", "ExoPlayer", "MVVM", "REST APIs"],
  },
  {
    emoji: "📡",
    title: "4G Network & WiFi Tools",
    description: "Developed an Android network utility application that allows users to switch and lock mobile networks to 4G/5G modes, monitor signal strength, analyze WiFi performance, and access advanced network tools. Focused on smooth UI, fast performance, and optimized connectivity management.",
    liveLink: "https://play.google.com/store/apps/details?id=com.ForceLteonly.Fourgnetworkspeed.wifitools",
    tags: ["Kotlin", "XML", "Android SDK", "Retrofit", "Firebase", "Network Monitoring", "MVVM"],
  },
  {
    emoji: "📞",
    title: "Caller Announcer - Call Themes",
    description: "Developed a smart Android caller announcer application that announces caller names, SMS notifications, and battery alerts using voice assistance features. Integrated customizable call themes, voice settings, and notification tools with a smooth and user-friendly interface.",
    liveLink: "https://play.google.com/store/apps/details?id=com.smart.ai.call.name.announcer",
    tags: ["Kotlin", "XML", "Firebase", "Text-to-Speech", "MVVM", "Notification Services", "REST APIs"],
  },
  {
    emoji: "🧭",
    title: "Smart Qibla Compass & Tracker",
    description: "Developed an Islamic utility Android application featuring accurate Qibla direction, digital compass, GPS location tracking, weather updates, and navigation tools with a clean and user-friendly interface. Focused on real-time location accuracy and modern UI/UX.",
    liveLink: "https://play.google.com/store/apps/details?id=com.ai.smart.qibla.compass.tracker",
    tags: ["Kotlin", "XML", "Firebase", "Google Maps", "GPS", "MVVM", "Weather APIs"],
  },
  {
    emoji: "📤",
    title: "SendEase – Easy File Transfer",
    description: "Developed an all-in-one Android file sharing and utility application that enables fast transfer of photos, videos, apps, and documents with additional features like video downloading, status saving, and built-in media playback. Designed with optimized performance and smooth file management.",
    liveLink: "https://play.google.com/store/apps/details?id=com.sendease.ai.smartutility",
    tags: ["Kotlin", "XML", "Firebase", "Retrofit", "Room Database", "ExoPlayer", "File Sharing APIs"],
  },
  {
    emoji: "🎨",
    title: "Gen AI Photo Editor Pro",
    description: "Developed a creative Android photo editing application featuring AI background remover, neon effects, collage maker, blur effects, stickers, filters, and advanced image editing tools. Designed with optimized performance and real-time photo processing with social media sharing.",
    liveLink: "https://play.google.com/store/apps/details?id=com.background.remover.collagemaker.neonphotoeditor",
    tags: ["Kotlin", "XML", "Firebase", "AI Background Removal", "Image Processing", "MVVM", "REST APIs"],
  },
  {
    emoji: "🎵",
    title: "4K Video Player & Music Player",
    description: "Developed a modern multimedia Android application with 4K video playback, video downloading, audio conversion, WhatsApp status saver, screen casting, and music player functionality. Built using Jetpack Compose with clean modern UI and optimized media performance.",
    liveLink: "https://play.google.com/store/apps/details?id=com.fourk.videoplayer.music.audioplayer",
    tags: ["Jetpack Compose", "Kotlin", "Firebase", "Retrofit", "ExoPlayer", "Media3 APIs", "MVVM"],
  },
  {
    emoji: "🎥",
    title: "VideoHub – Video Downloader & Player",
    description: "Developed a modern multimedia Android application featuring HD/4K video downloading, built-in video player, private media storage, background downloading, and offline playback support. Built with Jetpack Compose for a smooth and responsive user experience.",
    liveLink: "https://play.google.com/store/apps/details?id=com.videohub.video.downloader.player",
    tags: ["Jetpack Compose", "Kotlin", "Firebase", "Retrofit", "ExoPlayer", "Room Database", "MVVM"],
  },
  {
    emoji: "📹",
    title: "HD Video Downloader & Video Player",
    description: "Developed a modern multimedia Android application with HD/4K video playback, fast video downloading, background playback, private media storage, and file management tools. Built using Jetpack Compose with responsive modern UI and optimized media handling.",
    liveLink: "https://play.google.com/store/apps/details?id=com.downloadhdvideos.Videoplayer.Hd",
    tags: ["Jetpack Compose", "Kotlin", "Firebase", "Retrofit", "ExoPlayer", "Media3 APIs", "MVVM"],
  },
  {
    emoji: "🧾",
    title: "VoiceMaker – Receipt Generator",
    description: "Developed a smart business utility Android application for generating professional invoices, receipts, and payment records with customizable templates and PDF export functionality. Designed with clean interface focused on fast creation and efficient business management.",
    liveLink: "https://play.google.com/store/apps/details?id=com.voicemaker.receiptgenerator",
    tags: ["Kotlin", "XML", "Firebase", "Room Database", "PDF Generator", "MVVM", "REST APIs"],
  },
  {
    emoji: "📄",
    title: "DocFlow – File Reader & PDF Viewer AI",
    description: "Developed an all-in-one Android document management application with PDF viewing, document reading, file organization, AI-powered tools, document scanning, and smart file management. Built with clean modern UI and optimized offline document handling.",
    liveLink: "https://play.google.com/store/apps/details?id=com.docflow.filereader.pdfviewer.ai",
    tags: ["Kotlin", "XML", "Firebase", "PDF Viewer", "OCR", "AI Tools", "MVVM", "REST APIs"],
  },
  {
    emoji: "📶",
    title: "WiFi Analyzer – AI Speed Tools",
    description: "Developed a smart Android network utility application for WiFi analysis, internet speed testing, signal strength monitoring, and network diagnostics. Designed with clean responsive interface with real-time network insights and advanced connectivity tools.",
    liveLink: "https://play.google.com/store/apps/details?id=com.wifianalyzer.ai.speedtools",
    tags: ["Kotlin", "XML", "Firebase", "WiFi Monitoring", "Speed Test", "MVVM", "Network APIs"],
  },
];

function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-sm text-cyan-400 font-semibold">{level}%</span>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white overflow-hidden" style={{ scrollbarGutter: "stable" }}>

      {/* NAVBAR */}
      <nav className="w-full border-b border-white/10 fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center">
          <ul className="flex items-center gap-10 text-sm text-gray-300 font-medium">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="relative w-full min-h-screen flex overflow-hidden pt-12">

        {/* LEFT — Full height image, half screen, fully visible */}
        <div className="hidden lg:block relative w-1/2 min-h-screen overflow-hidden">
          {/* Image — object-contain so full body visible, anchored to bottom */}
          <div className="absolute inset-0 z-10 flex items-end justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/Profile3.png"
                alt="Noman Shahid"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>
          {/* left-edge fade */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-transparent z-20" />
          {/* right-edge fade */}
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-r from-transparent to-[#0B1120] z-20" />
        </div>

        {/* RIGHT — Text content */}
        <div className="flex-1 flex items-center z-10 px-8 lg:px-16 py-24">
          <div className="w-full max-w-xl">
            <p className="text-cyan-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              HELLO, I'M
            </p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
              Noman <span className="text-cyan-400">Shahid</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 font-semibold mb-8">
              Senior Android Developer
            </h2>
            <p className="text-gray-400 leading-8 text-base mb-10">
              Android Mobile Application Developer specializing in scalable and
              high-performance Android applications using Kotlin and modern
              Android technologies. Experienced in Jetpack Compose, XML, MVVM,
              Clean Architecture, Hilt, Retrofit, Room, Firebase, REST APIs,
              Coroutines, WorkManager, Paging, and Android Jetpack libraries.
              <br /><br />
              Skilled in building AI, utility, media, security, and lifestyle
              applications with a strong focus on clean architecture, performance
              optimization, smooth user experience, and Google Play policy
              compliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-7 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition">
                View Projects
              </a>
              <a href="#contact" className="px-7 py-3 border border-white/30 hover:border-cyan-400 rounded-lg font-semibold transition">
                Contact Me
              </a>
              <a href="#" className="px-7 py-3 bg-red-600 hover:bg-red-500 rounded-lg font-semibold transition">
                Open CV
              </a>
            </div>
          </div>
        </div>

        {/* Mobile: faded bg image */}
        <div className="absolute inset-0 lg:hidden z-0">
          <Image
            src="/Profile3.png"
            alt="Noman Shahid"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-15"
          />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 bg-[#0d1526]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-3">
              My <span className="text-cyan-400">Skills</span>
            </h2>
            <p className="text-gray-400">Technologies I work with every day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="bg-[#131d30] rounded-2xl p-6 border border-white/5">
                <h3 className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-5">
                  {cat.title}
                </h3>
                {cat.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="experience" className="py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-3">
              Work <span className="text-cyan-400">Experience</span>
            </h2>
            <p className="text-gray-400">My professional journey and roles</p>
          </div>
          <div className="relative">
            <div className="absolute left-[200px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-0">
                  <div className="md:w-[200px] md:pr-6 flex md:flex-col md:items-end md:justify-start pt-7 shrink-0">
                    <p className="text-cyan-400 font-semibold text-sm text-right leading-relaxed whitespace-pre-line">
                      {exp.period}
                    </p>
                  </div>
                  <div className="hidden md:flex items-start justify-center w-10 pt-7 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)] mt-1" />
                  </div>
                  <div className="flex-1 bg-[#131d30] border border-white/5 rounded-2xl p-7 md:ml-4">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-cyan-400 font-semibold mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-5">{exp.location}</p>
                    <hr className="border-white/5 mb-5" />
                    <ul className="space-y-3 mb-6">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                          <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span key={t} className="text-xs px-3 py-1 rounded-full border border-cyan-400/25 text-cyan-300 bg-cyan-400/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-24 bg-[#0d1526]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-3">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400">Things I've built recently</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <div key={i} className="bg-[#131d30] border border-white/5 rounded-2xl p-7 flex flex-col hover:border-cyan-400/30 transition">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl">{proj.emoji}</span>
                  <div className="flex gap-3">
                    <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center hover:bg-blue-600/40 transition">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>
                        </svg>
                      </div>
                      <span className="text-xs text-blue-400">Live View</span>
                    </a>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                        </svg>
                      </div>
                      <span className="text-xs text-blue-400">GitHub</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{proj.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400 bg-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section id="contact" className="py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 mb-12">I'm open to new opportunities and collaborations</p>
          <a
            href="https://www.linkedin.com/in/nomanshahid00/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 border border-white/20 rounded-xl hover:border-cyan-400/50 hover:bg-cyan-400/5 transition text-gray-300 hover:text-white font-medium"
          >
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            linkedin.com/in/nomanshahid00
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#0d1526] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">Building apps, one component at a time.</p>
          <p className="text-gray-500 text-sm">© 2026 Noman Shahid. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/nomanshahid00/" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-cyan-400/50 transition">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/nomanshahid12" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-cyan-400/50 transition">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
              </svg>
            </a>
            <a href="mailto:nomanshahid5450@gmail.com"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-cyan-400/50 transition">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
