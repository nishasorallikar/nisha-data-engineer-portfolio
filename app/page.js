import Link from "next/link";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations";

export default function Home() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 justify-between items-center px-margin-desktop py-4 bg-background/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-headline-sm font-headline-sm font-bold text-primary">
            DataEngineer.io
          </Link>
          <div className="flex gap-6">
            <Link href="/about" className="text-label-md font-label-md text-on-surface-variant hover:text-primary hover:bg-surface-variant/20 rounded-xl px-3 py-2 transition-colors duration-200">
              About
            </Link>
            <Link href="/blog" className="text-label-md font-label-md text-on-surface-variant hover:text-primary hover:bg-surface-variant/20 rounded-xl px-3 py-2 transition-colors duration-200">
              Blog
            </Link>
            <Link href="/community" className="text-label-md font-label-md text-on-surface-variant hover:text-primary hover:bg-surface-variant/20 rounded-xl px-3 py-2 transition-colors duration-200">
              Community
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="mailto:nisha@example.com" className="bg-primary text-background text-label-md font-label-md px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-primary/90 transition-colors">
            Contact Me
          </Link>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-grow pt-[80px] md:pt-[100px] pb-[80px] md:pb-0 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full min-h-screen flex items-center">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative">
          
          <div className="absolute -top-32 left-1/4 -translate-x-1/2 w-[720px] h-[320px] bg-primary-container/15 blur-[120px] pointer-events-none rounded-full"></div>

          <StaggerContainer className="md:col-span-7 flex flex-col gap-6 relative z-10" delayChildren={0.2} staggerChildren={0.15}>
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-variant/50 rounded-full border border-tertiary/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-label-sm font-label-sm text-secondary tracking-wider uppercase">Open to new opportunities</span>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-on-surface tracking-tight leading-tight">
                Hi, I'm Nisha. <br/>
                <span className="text-primary">Data Engineer.</span>
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                I architect scalable data pipelines and modern lakehouses. I specialize in turning massive datasets into reliable, structured, and fast-performing analytical foundations using Spark, Snowflake, and AWS.
              </p>
            </StaggerItem>
            
            <StaggerItem className="flex gap-4 mt-4">
              <HoverScale scale={1.05}>
                <Link href="/about" className="bg-primary text-background text-label-md font-label-md px-6 py-3 rounded-xl border border-primary/20 hover:bg-primary/90 transition-colors text-center block">
                  View My Work
                </Link>
              </HoverScale>
              <HoverScale scale={1.05}>
                <Link href="/blog" className="bg-transparent border border-tertiary text-primary text-label-md font-label-md px-6 py-3 rounded-xl hover:bg-surface-variant/30 transition-colors flex items-center justify-center gap-2 block">
                  <span className="material-symbols-outlined text-lg">menu_book</span> Read Blog
                </Link>
              </HoverScale>
            </StaggerItem>
          </StaggerContainer>

          <SlideUp delay={0.4} className="md:col-span-5 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-tertiary/10 bg-surface-card flex items-center justify-center group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-data-indigo/5 z-0 group-hover:from-primary/20 transition-colors duration-500"></div>
            <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20 p-2 bg-surface-container">
                 <img src="/profile.png" alt="Nisha" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <HoverScale scale={1.05} className="bg-surface-container p-4 rounded-xl border border-outline-variant/20 flex flex-col items-center">
                  <span className="text-headline-md font-headline-md text-primary">PySpark</span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">Expertise</span>
                </HoverScale>
                <HoverScale scale={1.05} className="bg-surface-container p-4 rounded-xl border border-outline-variant/20 flex flex-col items-center">
                  <span className="text-headline-md font-headline-md text-secondary">Lakehouse</span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">Architecture</span>
                </HoverScale>
              </div>
            </div>
          </SlideUp>

        </section>
      </main>

      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 bg-surface-container/90 backdrop-blur-xl border-t border-outline-variant/20 shadow-lg rounded-t-full pt-2">
        <Link className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full p-2 scale-90 transition-transform duration-150" href="/">
          <span className="material-symbols-outlined">home</span>
          <span className="text-label-sm font-label-sm mt-1">Home</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-colors" href="/about">
          <span className="material-symbols-outlined">person</span>
          <span className="text-label-sm font-label-sm mt-1">About</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-colors" href="/blog">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-label-sm font-label-sm mt-1">Blog</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-colors" href="/community">
          <span className="material-symbols-outlined">forum</span>
          <span className="text-label-sm font-label-sm mt-1">Community</span>
        </Link>
      </nav>

      {/* Footer */}
      <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center bg-surface-container-lowest border-t border-outline-variant/10 mt-auto mb-[80px] md:mb-0">
        <span className="text-headline-sm font-headline-sm text-primary mb-2">DataEngineer.io</span>
        <p className="text-body-md font-body-md text-on-surface-variant text-center max-w-sm mb-6">
          Architecting robust data pipelines.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/nishasorallikar" className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[24px]">code</span>
          </Link>
          <Link href="https://www.linkedin.com/in/nisha-sorallikar" className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[24px]">work</span>
          </Link>
        </div>
        <p className="text-label-sm font-label-sm text-text-muted mt-8">
          © 2025 Nisha Sorallikar. All rights reserved.
        </p>
      </footer>
    </>
  );
}
