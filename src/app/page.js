"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const staggerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const vp = { once: true, margin: "-60px" };

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

const categoryColors = [
  "#22d3ee", "#818cf8", "#f472b6", "#34d399",
  "#60a5fa", "#fb923c", "#a78bfa", "#2dd4bf",
  "#facc15", "#e879f9", "#4ade80", "#38bdf8",
];

const skillDescriptions = {
  "Kotlin": "Primary language for all modern Android projects. Used for null safety, extension functions, coroutines, and concise type-safe code.",
  "Android Development": "Full Android SDK expertise covering activities, fragments, services, broadcast receivers, permissions, and lifecycle management.",
  "Java": "Legacy codebase support and seamless interoperability with Kotlin in mixed Android projects.",
  "XML": "Designing adaptive layouts with ConstraintLayout, custom views, styles, themes, and vector drawables.",
  "MVVM Architecture": "Separates UI from business logic using ViewModel and LiveData for testable, maintainable, and lifecycle-aware code.",
  "Clean Architecture": "Layered approach with domain, data, and presentation layers ensuring long-term scalability and separation of concerns.",
  "Modular Architecture": "Feature-based module separation enabling independent development, reusability, and faster Gradle build times.",
  "Jetpack Compose": "Declarative Kotlin UI toolkit replacing XML. Builds UIs with composable functions, state hoisting, and animations.",
  "Responsive UI/UX Design": "Adaptive layouts using density-independent units, window size classes, and configuration qualifiers for all screen sizes.",
  "Material Design": "Implementing Material 3 design tokens, dynamic color theming, motion guidelines, and standard components.",
  "Navigation Component": "Type-safe fragment and composable navigation with deep link support, back stack control, and shared transitions.",
  "Android Jetpack Libraries": "Leveraging Lifecycle, Room, WorkManager, Paging 3, CameraX, and other first-party Jetpack components.",
  "LiveData & State Management": "Lifecycle-aware observables and StateFlow for reactive UI updates that automatically stop when lifecycle is inactive.",
  "Data Binding & View Binding": "Declarative UI data binding eliminating all findViewById calls and drastically reducing boilerplate code.",
  "Paging 3": "Efficient large dataset loading from network and database with loading state UI and automatic placeholder support.",
  "WorkManager": "Guaranteed background task execution with constraints, task chaining, unique work policies, and automatic retries.",
  "Retrofit & REST APIs": "Type-safe HTTP client built on OkHttp with coroutine support, interceptors, and custom converters.",
  "API Integration": "Consuming third-party REST and GraphQL APIs with proper error handling, caching strategies, and auth flows.",
  "JSON Parsing": "Serializing and deserializing JSON efficiently using Gson, Moshi, and kotlinx.serialization.",
  "Third-Party SDK Integration": "Integrating Facebook, Google Sign-In, Stripe, analytics, social sharing, and various platform SDKs.",
  "Room Database": "SQLite abstraction with compile-time SQL verification, DAO patterns, entity migrations, and Flow integration.",
  "SQLite": "Direct SQL database management for complex custom queries, raw transactions, and full schema migration control.",
  "Firebase": "Utilizing Firestore, Authentication, Storage, Remote Config, and Analytics from Google's Backend-as-a-Service platform.",
  "Coroutines & Kotlin Flow": "Structured concurrency and reactive streams replacing callback chains for clean, readable async code.",
  "Background Services": "Foreground services, bound services, broadcast receivers, and JobScheduler for reliable long-running tasks.",
  "Hilt Dependency Injection": "Compile-time DI with scoped components and auto-generated code, significantly reducing Dagger boilerplate.",
  "Firebase Cloud Messaging (FCM)": "Server-to-device push messaging with topic subscriptions, notification vs data messages, and analytics tracking.",
  "Push Notifications": "Rich local and remote notifications with custom sounds, expandable content, action buttons, and deep links.",
  "Google AdMob Integration": "Implementing banner, interstitial, rewarded video, and native ad formats with proper lifecycle handling.",
  "Ads Optimization & Mediation": "Waterfall and open-bidding mediation setup across ad networks to maximize fill rate and eCPM.",
  "Google Play Console": "Managing app releases, staged rollouts, A/B store tests, crash monitoring, and revenue analytics.",
  "Play Store Policy Compliance": "Navigating permissions, privacy, content rating, and billing policies for uninterrupted app distribution.",
  "App Deployment & Publishing": "Signing AABs, configuring ProGuard, managing internal/alpha/beta/production tracks, and rollout strategies.",
  "ExoPlayer": "Streaming HLS, DASH, and progressive media with custom renderers, DRM support, and playlist management.",
  "ML Kit": "On-device machine learning for face detection, text recognition, barcode scanning, and pose detection.",
  "Performance Optimization": "Baseline profiles, app startup tracing, UI rendering improvements, and APK/AAB size reduction techniques.",
  "Crash & ANR Optimization": "Root cause analysis via Firebase Crashlytics, resolving main-thread ANRs, achieving 99%+ crash-free sessions.",
  "Memory Leak Fixing": "Using LeakCanary and Android Studio Profiler to detect and eliminate activity, view, and context leaks.",
  "App Security & Data Protection": "Certificate pinning, EncryptedSharedPreferences, Play Integrity API, and ProGuard/R8 obfuscation.",
  "Git & GitHub": "Feature branching, pull request workflows, interactive rebase, and collaborative code review processes.",
  "CI/CD Concepts": "Automated build, lint, test, and deployment pipelines using GitHub Actions and Fastlane.",
  "Debugging & Testing": "JUnit, Mockito unit tests, Espresso UI tests, and systematic Logcat and debugger-based issue resolution.",
  "Agile Development Workflow": "Sprint planning, daily standups, backlog grooming, and retrospectives using Jira and Confluence.",
  "Problem Solving": "Breaking complex technical challenges into systematic, clean, and maintainable incremental solutions.",
  "Team Collaboration": "Cross-functional teamwork, mentoring junior developers, leading code reviews, and technical decision-making.",
};

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
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-rose-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </div>
    ),
    title: "ReelMax Video Player AllFormat",
    description: "Developed a modern Android video player application with HD playback, multi-format media support, TV casting, and smooth media management features. Focused on performance optimization, responsive UI, and scalable app architecture for an enhanced user experience.",
    liveLink: "https://play.google.com/store/apps/details?id=com.Reelmax.vidplay.save",
    tags: ["Kotlin", "XML", "Firebase", "Room Database", "Retrofit", "ExoPlayer", "MVVM", "REST APIs"],
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1.5" fill="currentColor" stroke="none"/>
        </svg>
      </div>
    ),
    title: "4G Network & WiFi Tools",
    description: "Developed an Android network utility application that allows users to switch and lock mobile networks to 4G/5G modes, monitor signal strength, analyze WiFi performance, and access advanced network tools. Focused on smooth UI, fast performance, and optimized connectivity management.",
    liveLink: "https://play.google.com/store/apps/details?id=com.ForceLteonly.Fourgnetworkspeed.wifitools",
    tags: ["Kotlin", "XML", "Android SDK", "Retrofit", "Firebase", "Network Monitoring", "MVVM"],
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.92 6.92l1.18-1.15a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          <path d="M14.5 7.5c1 .5 2 1.5 2.5 2.5" strokeDasharray="2 2"/>
          <path d="M17 4c2 1 3.5 3 4 5" strokeDasharray="2 2"/>
        </svg>
      </div>
    ),
    title: "Caller Announcer - Call Themes",
    description: "Developed a smart Android caller announcer application that announces caller names, SMS notifications, and battery alerts using voice assistance features. Integrated customizable call themes, voice settings, and notification tools with a smooth and user-friendly interface.",
    liveLink: "https://play.google.com/store/apps/details?id=com.smart.ai.call.name.announcer",
    tags: ["Kotlin", "XML", "Firebase", "Text-to-Speech", "MVVM", "Notification Services", "REST APIs"],
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
          <line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
          <polygon points="12 8 14.5 13.5 12 12 9.5 13.5 12 8" fill="currentColor" stroke="none"/>
        </svg>
      </div>
    ),
    title: "Smart Qibla Compass & Tracker",
    description: "Developed an Islamic utility Android application featuring accurate Qibla direction, digital compass, GPS location tracking, weather updates, and navigation tools with a clean and user-friendly interface. Focused on real-time location accuracy and modern UI/UX.",
    liveLink: "https://play.google.com/store/apps/details?id=com.ai.smart.qibla.compass.tracker",
    tags: ["Kotlin", "XML", "Firebase", "Google Maps", "GPS", "MVVM", "Weather APIs"],
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
      </div>
    ),
    title: "SendEase – Easy File Transfer",
    description: "Developed an all-in-one Android file sharing and utility application that enables fast transfer of photos, videos, apps, and documents with additional features like video downloading, status saving, and built-in media playback. Designed with optimized performance and smooth file management.",
    liveLink: "https://play.google.com/store/apps/details?id=com.sendease.ai.smartutility",
    tags: ["Kotlin", "XML", "Firebase", "Retrofit", "Room Database", "ExoPlayer", "File Sharing APIs"],
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shrink-0 shadow-lg shadow-violet-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
        </svg>
      </div>
    ),
    title: "Gen AI Photo Editor Pro",
    description: "Developed a creative Android photo editing application featuring AI background remover, neon effects, collage maker, blur effects, stickers, filters, and advanced image editing tools. Designed with optimized performance and real-time photo processing with social media sharing.",
    liveLink: "https://play.google.com/store/apps/details?id=com.background.remover.collagemaker.neonphotoeditor",
    tags: ["Kotlin", "XML", "Firebase", "AI Background Removal", "Image Processing", "MVVM", "REST APIs"],
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-rose-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>
        </svg>
      </div>
    ),
    title: "4K Video Player & Music Player",
    description: "Developed a modern multimedia Android application with 4K video playback, video downloading, audio conversion, WhatsApp status saver, screen casting, and music player functionality. Built using Jetpack Compose with clean modern UI and optimized media performance.",
    liveLink: "https://play.google.com/store/apps/details?id=com.fourk.videoplayer.music.audioplayer",
    tags: ["Jetpack Compose", "Kotlin", "Firebase", "Retrofit", "ExoPlayer", "Media3 APIs", "MVVM"],
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      </div>
    ),
    title: "VideoHub – Video Downloader & Player",
    description: "Developed a modern multimedia Android application featuring HD/4K video downloading, built-in video player, private media storage, background downloading, and offline playback support. Built with Jetpack Compose for a smooth and responsive user experience.",
    liveLink: "https://play.google.com/store/apps/details?id=com.videohub.video.downloader.player",
    tags: ["Jetpack Compose", "Kotlin", "Firebase", "Retrofit", "ExoPlayer", "Room Database", "MVVM"],
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
      </div>
    ),
    title: "HD Video Downloader & Video Player",
    description: "Developed a modern multimedia Android application with HD/4K video playback, fast video downloading, background playback, private media storage, and file management tools. Built using Jetpack Compose with responsive modern UI and optimized media handling.",
    liveLink: "https://play.google.com/store/apps/details?id=com.downloadhdvideos.Videoplayer.Hd",
    tags: ["Jetpack Compose", "Kotlin", "Firebase", "Retrofit", "ExoPlayer", "Media3 APIs", "MVVM"],
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
          <line x1="10" y1="9" x2="8" y2="9"/>
        </svg>
      </div>
    ),
    title: "VoiceMaker – Receipt Generator",
    description: "Developed a smart business utility Android application for generating professional invoices, receipts, and payment records with customizable templates and PDF export functionality. Designed with clean interface focused on fast creation and efficient business management.",
    liveLink: "https://play.google.com/store/apps/details?id=com.voicemaker.receiptgenerator",
    tags: ["Kotlin", "XML", "Firebase", "Room Database", "PDF Generator", "MVVM", "REST APIs"],
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-yellow-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          <line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/>
        </svg>
      </div>
    ),
    title: "DocFlow – File Reader & PDF Viewer AI",
    description: "Developed an all-in-one Android document management application with PDF viewing, document reading, file organization, AI-powered tools, document scanning, and smart file management. Built with clean modern UI and optimized offline document handling.",
    liveLink: "https://play.google.com/store/apps/details?id=com.docflow.filereader.pdfviewer.ai",
    tags: ["Kotlin", "XML", "Firebase", "PDF Viewer", "OCR", "AI Tools", "MVVM", "REST APIs"],
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shrink-0 shadow-lg shadow-teal-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="20" x2="6" y2="14"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="10"/>
        </svg>
      </div>
    ),
    title: "WiFi Analyzer – AI Speed Tools",
    description: "Developed a smart Android network utility application for WiFi analysis, internet speed testing, signal strength monitoring, and network diagnostics. Designed with clean responsive interface with real-time network insights and advanced connectivity tools.",
    liveLink: "https://play.google.com/store/apps/details?id=com.wifianalyzer.ai.speedtools",
    tags: ["Kotlin", "XML", "Firebase", "WiFi Monitoring", "Speed Test", "MVVM", "Network APIs"],
  },
];

function getLevelSegments(level) {
  if (level >= 92) return 5;
  if (level >= 87) return 4;
  return 3;
}

function SkillRow({ name, level, color }) {
  const filled = getLevelSegments(level);
  const desc = skillDescriptions[name] || "";
  return (
    <div className="group border-b border-white/[0.05] last:border-0 cursor-default">
      {/* Main row */}
      <div className="flex items-center justify-between gap-3 py-2">
        <span className="text-[13px] text-gray-300 flex-1 min-w-0 group-hover:text-white transition-colors duration-200">
          {name}
        </span>
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex gap-[3px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-[7px] h-3.5 rounded-[3px] transition-all duration-200 group-hover:h-4"
                style={{ background: i <= filled ? color : "rgba(255,255,255,0.09)" }}
              />
            ))}
          </div>
          <span className="text-[10px] font-bold w-7 text-right" style={{ color }}>
            {level}%
          </span>
        </div>
      </div>
      {/* Slide-down description */}
      {desc && (
        <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-300 ease-in-out">
          <div className="pb-2.5 pl-3" style={{ borderLeft: `2px solid ${color}50` }}>
            <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white overflow-hidden" style={{ scrollbarGutter: "stable" }}>

      {/* NAVBAR */}
      <motion.nav
        className="w-full border-b border-white/[0.07] fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/95 backdrop-blur-md"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="#about" className="flex items-center gap-2 shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-md shadow-cyan-500/20">
              <span className="text-white font-black text-sm leading-none">N</span>
            </div>
            <span className="font-bold text-sm text-white hidden sm:block">
              Noman<span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Nav links */}
          <ul className="flex items-center gap-3 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-gray-400 font-medium">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group py-1 hover:text-white transition-colors duration-200"
                >
                  {item}
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CV Button */}
          <a
            href="/NomanShahid.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold border border-cyan-400/40 text-cyan-400 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400/70 transition-all duration-200"
          >
            CV
          </a>
        </div>
      </motion.nav>

      {/* HERO */}
      <section id="about" className="relative w-full min-h-screen flex overflow-hidden pt-14 sm:pt-16">

        {/* LEFT — Full height image, half screen, fully visible */}
        <motion.div
          className="hidden lg:block relative w-1/2 min-h-screen overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
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
        </motion.div>

        {/* RIGHT — Text content */}
        <div className="flex-1 flex items-center z-10 px-5 sm:px-8 lg:px-16 py-20 sm:py-24">
          <motion.div
            className="w-full max-w-xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeUp} className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3 sm:mb-4">
              HELLO, I'M
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-3 sm:mb-4">
              Noman <span className="text-cyan-400">Shahid</span>
            </motion.h1>
            <motion.h2 variants={fadeUp} className="text-lg sm:text-xl md:text-2xl text-gray-300 font-semibold mb-6 sm:mb-8">
              Senior Android Developer
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 leading-7 sm:leading-8 text-sm sm:text-base mb-8 sm:mb-10">
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
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 sm:gap-4">
              <a href="#projects" className="px-5 sm:px-7 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold text-sm sm:text-base transition">
                View Projects
              </a>
              <a href="#contact" className="px-5 sm:px-7 py-2.5 sm:py-3 border border-white/30 hover:border-cyan-400 rounded-lg font-semibold text-sm sm:text-base transition">
                Contact Me
              </a>
              <a href="/NomanShahid.pdf" target="_blank" rel="noopener noreferrer" className="px-5 sm:px-7 py-2.5 sm:py-3 bg-red-600 hover:bg-red-500 rounded-lg font-semibold text-sm sm:text-base transition">
                Open CV
              </a>
            </motion.div>
          </motion.div>
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
      <section id="skills" className="py-16 md:py-24 bg-[#0d1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10 md:mb-14" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
              My <span className="text-cyan-400">Skills</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">Technologies I work with every day</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {skillCategories.map((cat, i) => {
              const color = categoryColors[i % categoryColors.length];
              return (
                <motion.div
                  key={cat.title}
                  variants={fadeUp}
                  className="bg-[#0c1524] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                >
                  {/* Accent top bar */}
                  <div
                    className="h-[3px] w-full"
                    style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                  />
                  <div className="p-4 sm:p-5">
                    {/* Card header */}
                    <div className="flex items-center gap-2.5 mb-4">
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
                      />
                      <h3 className="text-white font-bold text-sm leading-tight">{cat.title}</h3>
                    </div>
                    {/* Skill rows */}
                    <div>
                      {cat.skills.map((s) => (
                        <SkillRow key={s.name} name={s.name} level={s.level} color={color} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 mt-8 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <div className="flex gap-[3px]">
                {[1,2,3,4,5].map(i => <div key={i} className="w-[6px] h-3 rounded-[2px] bg-cyan-400/70" />)}
              </div>
              Expert (92%+)
            </span>
            <span className="flex items-center gap-2">
              <div className="flex gap-[3px]">
                {[1,2,3,4,5].map(i => <div key={i} className={`w-[6px] h-3 rounded-[2px] ${i <= 4 ? "bg-cyan-400/70" : "bg-white/10"}`} />)}
              </div>
              Advanced (87–91%)
            </span>
            <span className="flex items-center gap-2">
              <div className="flex gap-[3px]">
                {[1,2,3,4,5].map(i => <div key={i} className={`w-[6px] h-3 rounded-[2px] ${i <= 3 ? "bg-cyan-400/70" : "bg-white/10"}`} />)}
              </div>
              Proficient (80–86%)
            </span>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="experience" className="py-16 md:py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10 md:mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
              Work <span className="text-cyan-400">Experience</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">My professional journey and roles</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-[200px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="space-y-6 sm:space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col md:flex-row gap-3 md:gap-0"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
                >
                  <div className="md:w-[200px] md:pr-6 flex md:flex-col md:items-end md:justify-start md:pt-7 shrink-0">
                    <p className="text-cyan-400 font-semibold text-xs sm:text-sm md:text-right leading-relaxed">
                      {exp.period}
                    </p>
                  </div>
                  <div className="hidden md:flex items-start justify-center w-10 pt-7 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)] mt-1" />
                  </div>
                  <div className="flex-1 bg-[#131d30] border border-white/5 rounded-2xl p-5 sm:p-7 md:ml-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-cyan-400 font-semibold text-sm sm:text-base mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-5">{exp.location}</p>
                    <hr className="border-white/5 mb-4 sm:mb-5" />
                    <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm leading-relaxed">
                          <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.tags.map((t) => (
                        <span key={t} className="text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-cyan-400/25 text-cyan-300 bg-cyan-400/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-16 md:py-24 bg-[#0d1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10 md:mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">Things I've built recently</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {projects.map((proj, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#131d30] border border-white/5 rounded-2xl p-5 sm:p-7 flex flex-col hover:border-cyan-400/30 transition">
                <div className="flex items-start justify-between mb-6">
                  {proj.icon}
                  <div className="flex gap-3">
                    <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center hover:bg-blue-600/40 transition">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>
                        </svg>
                      </div>
                      <span className="text-xs text-blue-400">Live</span>
                    </a>
                    <a href="https://github.com/nomanshahid12" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center hover:bg-blue-600/40 transition">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                        </svg>
                      </div>
                      <span className="text-xs text-blue-400">GitHub</span>
                    </a>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section id="contact" className="py-16 md:py-28 bg-[#0B1120] relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/[0.04] blur-3xl pointer-events-none" />

        <motion.div
          className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <motion.p variants={fadeUp} className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Let's work together
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Touch
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-sm sm:text-base mb-10 max-w-md mx-auto leading-relaxed">
            Open to new opportunities, freelance projects, and exciting Android collaborations. Let's build something great together.
          </motion.p>

          {/* Primary CTA */}
          <motion.a
            variants={fadeUp}
            href="mailto:nomanshahid5450@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white text-sm sm:text-base hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300 mb-10"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
            Send me a message
          </motion.a>

          {/* Contact cards */}
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.a
              variants={fadeUp}
              href="https://www.linkedin.com/in/nomanshahid00/"
              target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-5 bg-[#0c1524] border border-white/[0.07] rounded-2xl hover:border-blue-500/40 hover:bg-blue-500/[0.05] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/25 group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">LinkedIn</p>
                <p className="text-gray-500 text-xs mt-0.5">nomanshahid00</p>
              </div>
            </motion.a>

            <motion.a
              variants={fadeUp}
              href="https://github.com/nomanshahid12"
              target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-5 bg-[#0c1524] border border-white/[0.07] rounded-2xl hover:border-gray-500/40 hover:bg-gray-500/[0.05] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gray-600/15 border border-gray-500/20 flex items-center justify-center group-hover:bg-gray-600/25 group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">GitHub</p>
                <p className="text-gray-500 text-xs mt-0.5">nomanshahid12</p>
              </div>
            </motion.a>

            <motion.a
              variants={fadeUp}
              href="mailto:nomanshahid5450@gmail.com"
              className="group flex flex-col items-center gap-3 p-5 bg-[#0c1524] border border-white/[0.07] rounded-2xl hover:border-cyan-500/40 hover:bg-cyan-500/[0.05] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-600/15 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-600/25 group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Email</p>
                <p className="text-gray-500 text-xs mt-0.5">nomanshahid5450</p>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <motion.footer
        className="border-t border-white/5 bg-[#0d1526] py-6 sm:py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={vp}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">Building apps, one component at a time.</p>
          <p className="text-gray-500 text-xs sm:text-sm text-center">© 2026 Noman Shahid. All rights reserved.</p>
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
      </motion.footer>

    </main>
  );
}
