/*
Design reminder for Home.tsx:
Chosen philosophy: Neo-Industrial Editorial.
This page must feel like a high-end engineering brand dossier rather than a resume.
Use left-weighted composition, disciplined spacing, restrained motion, and crisp section hierarchy.
Every section should reinforce professional credibility, modular capability, and calm precision.
*/

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Github, Globe, Linkedin, Mail, MoveRight } from "lucide-react";
import { toast } from "sonner";

// Google Drive PDF link:
// - Prefer the normal "Anyone with the link can view" sharing URL, e.g.
//   https://drive.google.com/file/d/<FILE_ID>/view?usp=sharing
// - Replace the placeholder below with your real link.
const RESUME_GOOGLE_DRIVE_PDF_URL = "https://drive.google.com/file/d/1BAZ8Y0gVfgTXhkrumkVmF-c8-Sfec6dK/view?usp=sharing";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663060353399/eGvgdov73Uxhnm32fnXFSZ/otis-hero-industrial-infrastructure-RSeWJzPqShytrTMPKgieux.webp";
const expertiseImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663060353399/eGvgdov73Uxhnm32fnXFSZ/otis-expertise-control-systems-GAfEjuxLhoWMKdYdXZaZXF.webp";
const wastewaterImage =
  "./images/vietnam.jpg";
const visionImage =
  "./images/research.png";
const systemImage =
  "./images/reclaim.jpg";
const rewardImage =
  "./images/reward.png";

const metrics = [
  { value: "5+", label: "Years across engineering, software, and operations" },
  { value: "3", label: "Pillars: Systems, Control, & Data Analytics" },
  { value: "1", label: "Honored Research in Air Quality Engineering" },
  { value: "INTL", label: "Multilingual project leadership in Vietnam" },
];

const expertise = [
  {
    title: "Systems Integration",
    description:
      "Connecting software, process logic, and operational workflows into reliable systems that can be understood, maintained, and expanded.",
    index: "01",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Designing with performance, resilience, and long-term operability in mind, especially where physical systems and software meet.",
    index: "02",
  },
  {
    title: "Control & Engineering Systems",
    description:
      "Applying engineering thinking to industrial processes, circuit logic, and real-world implementation where precision matters.",
    index: "03",
  },
  {
    title: "Data & Optimization",
    description:
      "Using Python, analysis workflows, and machine learning perspectives to improve process visibility, decision quality, and efficiency.",
    index: "04",
  },
];

const featuredWork = [
  {
    title: "Applied Research in Air Quality Engineering",
    subtitle: "Catalyst and NOx / mercury removal research",
    description:
      "Published engineering research that reflects an ability to move from scientific understanding to structured problem-solving in environmental systems.",
    image: visionImage,
    tags: ["Research", "Air quality", "Technical analysis"],
    href: "https://aaqr.org/articles/aaqr-18-10-oa-0389",
  },
  {
    title: "Wastewater Reclamation Program",
    subtitle: "International engineering delivery in Vietnam",
    description:
      "Worked on complete wastewater treatment system design and water reuse implementation, translating complex process requirements into practical engineering outcomes.",
    image: wastewaterImage,
    tags: ["Process engineering", "Implementation", "Water reuse"],
  },
  {
    title: "Full-Cycle Engineering: Sun Ba Power Plant Infrastructure",
    subtitle: "From blueprint to production reality",
    description:
      "Managed the end-to-end delivery of complex water treatment infrastructure in a high-stakes environment. I bridged the gap between engineering blueprints and production reality, overseeing planning, quality assurance, and system commissioning.",
    image: rewardImage,
    tags: ["Systems Integration", "Risk Mitigation", "Project Lifecycle Management"],
    href: "https://www.ctci.com/e-newsletter/EN/486/hot-news/article-09.html",
  },
];

const insights = [
  {
    title: "Multilingual",
    description:
      "Bridging diverse teams through Chinese, English, Vietnamese, and Japanese.",
  },
  {
    title: "Rigor",
    description:
      "Applying scuba-level safety discipline to production software environments.",
  },
  {
    title: "Adaptability",
    description:
      "Proven track record in transitioning from environmental engineering to scalable systems.",
  },
];

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[rgba(174,140,96,0.25)] selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(167,127,86,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(91,116,136,0.14),transparent_32%)]" />
        <div className="industrial-grid absolute inset-0" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,12,18,0.78)] backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <a href="#home" className="group flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-[0.18em] text-white uppercase">Otis Lin</span>
            <span className="mt-1 text-[11px] uppercase tracking-[0.32em] text-slate-400 transition-colors group-hover:text-stone-300">
              Systems Integration
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.18em] text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            className="hidden rounded-full border border-[rgba(173,138,96,0.6)] bg-[rgba(173,138,96,0.12)] px-5 text-[12px] uppercase tracking-[0.2em] text-stone-100 hover:bg-[rgba(173,138,96,0.22)] md:inline-flex"
            variant="outline"
            onClick={() => {
              const section = document.querySelector("#contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let’s connect
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="hero-shell border-b border-white/10">
          <div className="container grid gap-10 py-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12 lg:py-14">
            <div
              className="hero-panel overflow-hidden rounded-[32px] border border-white/10 bg-card text-card-foreground shadow-[0_30px_100px_rgba(0,0,0,0.38)]"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(6,10,16,0.8), rgba(6,10,16,0.46)), url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex min-h-[74svh] flex-col justify-between p-7 sm:p-10 lg:p-14">
                <div className="grid gap-5">
                  <div className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-stone-200">
                    Personal professional website
                  </div>
                  <div className="max-w-3xl space-y-5">
                    <p className="text-[12px] uppercase tracking-[0.35em] text-stone-300/80">Built for structured problem solving</p>
                    <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.94] tracking-[-0.04em] text-white sm:text-6xl xl:text-7xl">
                        Translating System Complexity into Dependable Execution.
                    </h1>
                    <p className="max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                      I design at the intersection of systems integration, scalable infrastructure, control logic, and data-driven engineering—translating complexity into dependable execution.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex flex-wrap gap-3">
                    <Button
                      className="rounded-full bg-[oklch(0.69_0.06_71)] px-6 py-6 text-[12px] uppercase tracking-[0.2em] text-slate-950 hover:bg-[oklch(0.75_0.06_71)]"
                      onClick={() => {
                        const section = document.querySelector("#work");
                        section?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      View selected work
                    </Button>
                  </div>

                  <a
                    href="#profile"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-slate-200 transition hover:text-white"
                  >
                    Scroll for profile
                    <ChevronDown className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <aside className="grid gap-4 lg:pt-10">
              <div className="rounded-[28px] border border-white/10 bg-[rgba(12,17,24,0.9)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
                <p className="text-[11px] uppercase tracking-[0.3em] text-stone-300">Current focus</p>
                <h2 className="mt-4 font-display text-2xl font-medium text-white">Software Engineering Informed by Physical Systems.</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                    I design at the intersection of process engineering and scalable software. My goal is to strip away unnecessary complexity, delivering systems integration rooted in engineering realism and production-ready clarity.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[rgba(10,14,20,0.75)] p-6">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Capabilities</p>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-stone-300">Cross-domain</span>
                </div>
                <div className="mt-5 grid gap-4 text-sm text-slate-300">
                  <div className="flex items-start justify-between gap-3">
                    <span>Software architecture thinking</span>
                    <span className="text-stone-300">01</span>
                  </div>
                  <div className="flex items-start justify-between gap-3 border-t border-white/10 pt-4">
                    <span>Control and process understanding</span>
                    <span className="text-stone-300">02</span>
                  </div>
                  <div className="flex items-start justify-between gap-3 border-t border-white/10 pt-4">
                    <span>Data analysis and optimization mindset</span>
                    <span className="text-stone-300">03</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[rgba(14,19,27,0.9)] p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">Navigation note</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                This homepage is intentionally concise, focusing on core principles. Detailed documentation of my research, projects, and career history is modularly organized and accessible via dedicated sections.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="profile" className="border-b border-white/10 py-24">
          <div className="container grid gap-8 lg:grid-cols-[0.44fr_1fr] lg:gap-16">
            <div>
              <p className="section-kicker">Profile summary</p>
              <h2 className="section-title mt-6">A professional profile shaped by software, process, and field experience.</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6 text-base leading-8 text-slate-300">
                <p>
                  I am a versatile engineer with more than five years of experience across software, engineering operations, and cross-functional technical problem solving. My background combines structured academic training with hands-on expansion into Rust, Java, Go, Python, control logic, and practical engineering delivery.
                </p>
                <p>
                  Rather than treating software, infrastructure, and process engineering as separate worlds, I focus on how they support one another. That approach has shaped my work in research, wastewater treatment, and systems-oriented technical learning.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-stone-300">Operating approach</p>
                  <MoveRight className="h-4 w-4 text-slate-500" />
                </div>
                <div className="mt-5 grid gap-4 text-sm leading-7 text-slate-300">
                  <p>Understand the system before optimizing it.</p>
                  <p className="border-t border-white/10 pt-4">Translate technical complexity into dependable structure.</p>
                  <p className="border-t border-white/10 pt-4">Prefer clear, maintainable solutions over short-lived cleverness.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="metrics" className="border-b border-white/10 py-20">
          <div className="container">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-kicker">Key metrics</p>
                <h2 className="section-title mt-6 max-w-3xl">Signals of credibility, kept brief and easy to scan.</h2>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="group rounded-[26px] border border-white/10 bg-[rgba(12,18,24,0.76)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(174,140,96,0.5)] hover:bg-[rgba(15,21,29,0.95)]"
                >
                  <div className="text-4xl font-display font-semibold tracking-[-0.04em] text-white">{metric.value}</div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{metric.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="border-b border-white/10 py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
            <div className="space-y-6">
              <p className="section-kicker">Areas of expertise</p>
              <h2 className="section-title mt-6 max-w-xl">Capability presented as modular value, not as a crowded skill list.</h2>
              <p className="max-w-xl text-base leading-8 text-slate-300">
                Inspired by Barrier-style service architecture, this section reframes your background into high-level capability pillars that clients, recruiters, or collaborators can understand quickly.
              </p>
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-card shadow-[0_22px_60px_rgba(0,0,0,0.28)]">
                <img src={systemImage} alt="Control systems and systems integration visual" className="h-[340px] w-full object-cover" />
              </div>
            </div>

            <div className="grid gap-4">
              {expertise.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-[28px] border border-white/10 bg-[rgba(12,17,24,0.84)] p-6 transition duration-300 hover:border-[rgba(174,140,96,0.48)] hover:shadow-[0_26px_70px_rgba(0,0,0,0.28)]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-stone-300">{item.index}</p>
                      <h3 className="mt-4 font-display text-2xl font-medium text-white">{item.title}</h3>
                    </div>
                    <ArrowRight className="mt-1 h-5 w-5 text-slate-500 transition group-hover:translate-x-1 group-hover:text-stone-300" />
                  </div>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="border-b border-white/10 py-24">
          <div className="container">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-kicker">Featured work</p>
                <h2 className="section-title mt-6 max-w-3xl">Representative experience, reframed as case-oriented narratives.</h2>
              </div>
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-3">
              {featuredWork.map((work) => (
                <article
                  key={work.title}
                  className="overflow-hidden rounded-[30px] border border-white/10 bg-[rgba(11,16,23,0.88)] shadow-[0_28px_80px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(174,140,96,0.4)]"
                >
                  {work.href ? (
                    <a
                      href={work.href}
                      target={work.href.startsWith("http") ? "_blank" : undefined}
                      rel={work.href.startsWith("http") ? "noreferrer" : undefined}
                      aria-label={`${work.title} link`}
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(174,140,96,0.65)] focus-visible:ring-offset-0"
                    >
                      <img src={work.image} alt={work.title} className="h-60 w-full object-cover" />
                      <div className="p-6">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-stone-300">{work.subtitle}</p>
                        <h3 className="mt-4 font-display text-2xl font-medium text-white">{work.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-slate-300">{work.description}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {work.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <>
                      <img src={work.image} alt={work.title} className="h-60 w-full object-cover" />
                      <div className="p-6">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-stone-300">{work.subtitle}</p>
                        <h3 className="mt-4 font-display text-2xl font-medium text-white">{work.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-slate-300">{work.description}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {work.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="vision" className="border-b border-white/10 py-24">
          <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="overflow-hidden rounded-[30px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
              <img src={expertiseImage} alt="Abstract engineering and data visualization concept" className="h-full min-h-[420px] w-full object-cover" />
            </div>
            <div className="space-y-7">
              <p className="section-kicker">Vision & research focus</p>
              <h2 className="section-title mt-6">Toward Intelligent Physical Systems through Modern Architecture.</h2>
              <div className="space-y-6 text-base leading-8 text-slate-300">
                <p>
                My long-term direction is centered on building robust bridges between physical processes and data intelligence. Leveraging a technical foundation in Go and Rust for high-performance system architecture, and Python for data analysis, I focus on making operational data truly interpretable.
                </p>
                <p>
                I am particularly interested in the convergence of Large Language Models (LLMs) and Machine Learning with industrial control logic—using AI not to add complexity, but to drive precision and resource efficiency in constrained environments.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "SYSTEMIC RELIABILITY",
                  "OPERATIONAL INTELLIGENCE",
                  "RESOURCE EFFICACY",
                  "ENGINEERING REALISM",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[rgba(174,140,96,0.4)] bg-[rgba(174,140,96,0.08)] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-stone-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="insights" className="border-b border-white/10 py-24">
          <div className="container">
            <div className="max-w-3xl">
              <p className="section-kicker">Optional insights</p>
              <h2 className="section-title mt-6">A light place for perspective, without diluting the homepage.</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {insights.map((insight) => (
                <article key={insight.title} className="rounded-[26px] border border-white/10 bg-[rgba(12,18,24,0.76)] p-6">
                  <h3 className="font-display text-xl text-white">{insight.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{insight.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="container">
            <div className="overflow-hidden rounded-[34px] border border-[rgba(174,140,96,0.28)] bg-[linear-gradient(135deg,rgba(174,140,96,0.14),rgba(10,15,22,0.98)_28%,rgba(10,15,22,0.98)_72%,rgba(91,116,136,0.16))] p-8 shadow-[0_34px_90px_rgba(0,0,0,0.35)] sm:p-10 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
                <div>
                  <p className="section-kicker">Contact</p>
                  <h2 className="section-title mt-6 max-w-3xl">Let’s turn complex systems into clearer, more reliable outcomes.</h2>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button
                      className="rounded-full bg-[oklch(0.69_0.06_71)] px-6 py-6 text-[12px] uppercase tracking-[0.2em] text-slate-950 hover:bg-[oklch(0.75_0.06_71)]"
                      onClick={() => {
                        window.location.href = "mailto:otis@example.com";
                      }}
                    >
                      Email me
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-white/20 bg-white/5 px-6 py-6 text-[12px] uppercase tracking-[0.2em] text-white hover:bg-white/10"
                    >
                      <a href={RESUME_GOOGLE_DRIVE_PDF_URL} target="_blank" rel="noreferrer">
                        Resume
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="contact-tile">
                    <Mail className="h-5 w-5 text-stone-300" />
                    <div>
                      <p className="contact-label">Email</p>
                      <p className="contact-value">Connect via LinkedIn or explore my code on GitHub bellow.</p>
                    </div>
                  </div>
                  <a href="https://github.com/trimalchio2" target="_blank" rel="noreferrer" className="contact-tile">
                    <Github className="h-5 w-5 text-stone-300" />
                    <div>
                      <p className="contact-label">GitHub</p>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/otis-lin-swe" target="_blank" rel="noreferrer" className="contact-tile">
                    <Linkedin className="h-5 w-5 text-stone-300" />
                    <div>
                      <p className="contact-label">LinkedIn</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[rgba(7,10,16,0.82)] py-8">
        <div className="container flex flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-base text-white">Otis Lin</p>
            <p className="mt-1">Personal professional website for systems integration and engineering-focused work.</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
