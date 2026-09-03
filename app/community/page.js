import Link from "next/link";

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
            <Link href="/community" className="text-label-md font-label-md text-primary font-bold border-b-2 border-primary pb-1 px-3 py-2 hover:bg-surface-variant/20 rounded-xl scale-95 transition-transform">
              Community
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-primary text-background text-label-md font-label-md px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-primary/90 transition-colors">
            Join Academy
          </button>
          <div className="flex gap-2 text-on-surface-variant">
            <button className="hover:text-primary p-2 rounded-xl hover:bg-surface-variant/20 transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </button>
            <button className="hover:text-primary p-2 rounded-xl hover:bg-surface-variant/20 transition-colors">
              <span className="material-symbols-outlined">terminal</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-grow pt-[80px] md:pt-[100px] pb-[80px] md:pb-0 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
        {/* Hero Section */}
        <section className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-variant/50 rounded-full border border-tertiary/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-label-sm font-label-sm text-secondary">Active Community</span>
            </div>
            <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-primary">
              Hear from the <br />Nisha's community
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
              Join thousands of data professionals learning, building, and growing together.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#testimonials" className="bg-primary text-background text-label-md font-label-md px-6 py-3 rounded-xl border border-primary/20 hover:bg-primary/90 transition-colors text-center">
                Read Stories
              </a>
              <a href="#discord" className="bg-transparent border border-tertiary text-primary text-label-md font-label-md px-6 py-3 rounded-xl hover:bg-surface-variant/30 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">forum</span> Join Discord
              </a>
            </div>
          </div>
          <div className="md:col-span-6 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-tertiary/10 bg-surface-card flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-data-indigo/5 z-0"></div>
            <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-[64px] text-primary/40 mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/20 flex flex-col items-center">
                  <span className="text-headline-md font-headline-md text-primary">410k+</span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">YouTube Subs</span>
                </div>
                <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/20 flex flex-col items-center">
                  <span className="text-headline-md font-headline-md text-secondary">123k+</span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">Newsletter Subs</span>
                </div>
                <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/20 flex flex-col items-center">
                  <span className="text-headline-md font-headline-md text-tertiary">500k+</span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">Active Learners</span>
                </div>
                <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/20 flex flex-col items-center">
                  <span className="text-headline-md font-headline-md text-data-indigo">350+</span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">Lectures</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Bento Grid */}
        <section className="py-16 md:py-24" id="testimonials">
          <div className="flex flex-col gap-2 mb-12">
            <h2 className="text-headline-md font-headline-md text-primary">Learner Feedback</h2>
            <p className="text-body-md font-body-md text-on-surface-variant">Real results and career growth.</p>
          </div>
          <div className="w-full bg-surface-container-low border border-tertiary/10 rounded-xl p-12 flex flex-col items-center justify-center text-center gap-4 mt-6">
            <div className="w-16 h-16 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-[32px]">forum</span>
            </div>
            <h3 className="text-headline-sm font-headline-sm text-on-surface">Community feedback coming soon!</h3>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
              We're currently gathering reviews and feedback from the community. Check back later to see what others are saying about Nisha's architectural insights and blueprints.
            </p>
          </div>
        </section>

        {/* Newsletter & Community Split */}
        <section className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Newsletter */}
          <div className="bg-surface-container-high border border-outline-variant/20 rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[64px]" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
            </div>
            <div className="relative z-10 flex flex-col gap-4 mb-8">
              <div className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-label-sm font-label-sm rounded w-fit">DataNotes</div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">Subscribe to DataNotes</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Join 123,000+ curious readers learning to think like data experts. Get weekly lessons, stories, and frameworks from real projects.
              </p>
            </div>
            <form className="relative z-10 flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-grow">
                <label className="sr-only" htmlFor="email-subscribe">Email address</label>
                <input className="w-full bg-surface-dim border-0 border-b border-outline-variant text-on-surface font-label-sm text-label-sm px-4 py-3 focus:ring-0 focus:border-primary transition-colors placeholder:text-text-muted" id="email-subscribe" placeholder="Enter your email" type="email" />
              </div>
              <button className="bg-primary text-background font-label-md text-label-md px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap" type="button">
                Subscribe
              </button>
            </form>
          </div>

          {/* Discord / Hangouts */}
          <div className="bg-surface-card border border-tertiary/10 rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group" id="discord">
            <div className="absolute inset-0 bg-gradient-to-br from-data-indigo/5 to-transparent z-0 group-hover:from-data-indigo/10 transition-colors"></div>
            <div className="relative z-10 flex flex-col gap-4 mb-8">
              <div className="w-12 h-12 bg-[#5865F2]/20 text-[#5865F2] rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">Hang out with us on Discord</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Join a bunch of curious minds who like to talk about data, tech and random memes. Ask questions, share ideas or just lurk and read. It is chill, promise.
              </p>
            </div>
            <div className="relative z-10 flex flex-col gap-6">
              <a className="w-fit bg-[#5865F2] text-white font-label-md text-label-md px-6 py-3 rounded-xl hover:bg-[#4752C4] transition-colors flex items-center gap-2 shadow-lg shadow-[#5865F2]/20" href="https://discord.gg/gsVJbMxKcA" target="_blank" rel="noopener noreferrer">
                Join Discord <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
              <div className="pt-6 border-t border-outline-variant/20">
                <p className="text-label-sm font-label-sm text-text-muted mb-3">Other hangouts</p>
                <div className="flex gap-4 text-on-surface-variant">
                  <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">play_circle</span></a>
                  <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">work</span></a>
                  <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">photo_camera</span></a>
                  <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">code</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 bg-surface-container/90 backdrop-blur-xl border-t border-outline-variant/20 shadow-lg rounded-t-full pt-2">
        <Link className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-colors" href="/">
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
        <Link className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full p-2 scale-90 transition-transform duration-150" href="/community">
          <span className="material-symbols-outlined">forum</span>
          <span className="text-label-sm font-label-sm mt-1">Community</span>
        </Link>
      </nav>

      {/* Footer */}
      <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter bg-surface-container-lowest border-t border-outline-variant/10 mt-auto mb-[80px] md:mb-0">
        <div className="flex flex-col gap-4">
          <span className="text-headline-sm font-headline-sm text-primary">DataEngineer.io</span>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-sm">
            Visual learning for data professionals.
          </p>
          <p className="text-label-sm font-label-sm text-text-muted mt-4">
            © 2025 Data Engineer Portfolio. All rights reserved. Visual learning for data professionals.
          </p>
        </div>
        <div className="flex flex-col md:items-end justify-center gap-4">
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link className="text-label-sm font-label-sm text-text-muted hover:text-secondary underline-offset-4 hover:underline transition-colors" href="#">Twitter</Link>
            <Link className="text-label-sm font-label-sm text-text-muted hover:text-secondary underline-offset-4 hover:underline transition-colors" href="#">LinkedIn</Link>
            <Link className="text-label-sm font-label-sm text-text-muted hover:text-secondary underline-offset-4 hover:underline transition-colors" href="#">YouTube</Link>
            <Link className="text-label-sm font-label-sm text-text-muted hover:text-secondary underline-offset-4 hover:underline transition-colors" href="#">Privacy Policy</Link>
            <Link className="text-label-sm font-label-sm text-text-muted hover:text-secondary underline-offset-4 hover:underline transition-colors" href="#">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
