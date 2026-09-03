import Link from "next/link";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations";

export default function About() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 justify-between items-center px-margin-desktop py-4 bg-background/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-headline-sm font-headline-sm font-bold text-primary">
            DataEngineer.io
          </Link>
          <div className="flex gap-6">
            <Link href="/about" className="text-label-md font-label-md text-primary font-bold border-b-2 border-primary pb-1 px-3 py-2 hover:bg-surface-variant/20 rounded-xl scale-95 transition-transform">
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
      <main className="flex-grow pt-[80px] md:pt-[100px] pb-[80px] md:pb-0 px-margin-mobile md:px-margin-desktop max-w-[1024px] mx-auto w-full min-h-screen">
        
        {/* Profile Hero */}
        <section className="py-16 md:py-24 flex flex-col items-center text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] pointer-events-none rounded-full z-0"></div>
          
          <SlideUp className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 ring-4 ring-surface-variant bg-surface-container relative z-10 shadow-2xl">
             <img src="/profile.png" alt="Nisha Sorallikar" className="w-full h-full object-cover" />
          </SlideUp>
          
          <FadeIn delay={0.1} className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-on-surface relative z-10 mb-2">
            Nisha Sorallikar
          </FadeIn>
          <FadeIn delay={0.2} className="text-headline-sm font-headline-sm text-primary mb-6 relative z-10">
            Associate Data Engineer
          </FadeIn>
          <FadeIn delay={0.3} className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl relative z-10 leading-relaxed">
            I specialize in scalable lakehouse architectures, cloud-native processing, and turning raw data chaos into structured analytics. I'm passionate about building high-throughput pipelines that drive business value.
          </FadeIn>
          
          <FadeIn delay={0.4} className="flex gap-4 mt-8 relative z-10">
            <HoverScale scale={1.05}>
              <Link href="https://www.linkedin.com/in/nisha-sorallikar" className="bg-surface-card border border-outline-variant text-on-surface text-label-md font-label-md px-6 py-3 rounded-xl hover:bg-surface-container-high transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">work</span> LinkedIn
              </Link>
            </HoverScale>
            <HoverScale scale={1.05}>
              <Link href="https://github.com/nishasorallikar" className="bg-surface-card border border-outline-variant text-on-surface text-label-md font-label-md px-6 py-3 rounded-xl hover:bg-surface-container-high transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">code</span> GitHub
              </Link>
            </HoverScale>
          </FadeIn>
        </section>

        {/* Experience Timeline */}
        <section className="py-12 md:py-16">
          <FadeIn className="flex items-center gap-3 mb-10">
            <span className="material-symbols-outlined text-primary text-[28px]">timeline</span>
            <h2 className="text-headline-md font-headline-md text-on-surface">Experience</h2>
          </FadeIn>
          
          <SlideUp className="bg-surface-card border border-outline-variant/30 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 border-b border-outline-variant/20 pb-6">
              <div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">Associate Data Engineer</h3>
                <p className="text-body-md font-body-md text-primary mt-1">Cynosure Software Solutions</p>
              </div>
              <div className="inline-flex items-center px-3 py-1 bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm rounded-lg whitespace-nowrap h-fit">
                Current Role
              </div>
            </div>
            <ul className="space-y-4 text-body-md font-body-md text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                <span>Engineered and optimized high-throughput data pipelines using PySpark and Databricks, processing over 10M+ records daily.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                <span>Managed robust cloud infrastructure and scalable data storage solutions natively on AWS.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                <span>Implemented Delta Lake architecture to ensure strict ACID transactions and highly reliable batch processing.</span>
              </li>
            </ul>
          </SlideUp>
        </section>

        {/* Skills Bento */}
        <section className="py-12 md:py-16">
          <FadeIn className="flex items-center gap-3 mb-10">
            <span className="material-symbols-outlined text-primary text-[28px]">build</span>
            <h2 className="text-headline-md font-headline-md text-on-surface">Core Stack</h2>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" delayChildren={0.2} staggerChildren={0.1}>
            {/* Core Tools */}
            {[
              { name: 'PySpark', icon: 'bolt', isMaterial: true },
              { name: 'Databricks', icon: 'hexagon', isMaterial: true },
              { name: 'Snowflake', icon: 'ac_unit', isMaterial: true },
              { name: 'AWS', icon: 'cloud', isMaterial: true },
              { name: 'Python', icon: 'code', isMaterial: true },
              { name: 'Airflow', icon: 'air', isMaterial: true },
              { name: 'Delta Lake', icon: 'change_history', isMaterial: true },
              { name: 'SQL', icon: 'database', isMaterial: true }
            ].map((skill) => (
              <StaggerItem key={skill.name}>
                <HoverScale scale={1.05} className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-surface-container-high hover:border-primary/40 transition-all duration-300 group cursor-pointer h-full">
                  {skill.isMaterial ? (
                     <span className="material-symbols-outlined text-[40px] text-on-surface-variant group-hover:text-primary transition-colors">{skill.icon}</span>
                  ) : (
                     <img src={skill.icon} alt={skill.name} className={`w-10 h-10 ${skill.isImg ? '' : 'grayscale opacity-70'} group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 object-contain`} />
                  )}
                  <span className="text-body-md font-body-md text-on-surface group-hover:text-primary transition-colors">{skill.name}</span>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Projects / Architectures */}
        <section className="py-12 md:py-24">
          <FadeIn className="flex items-center gap-3 mb-10">
            <span className="material-symbols-outlined text-primary text-[28px]">architecture</span>
            <h2 className="text-headline-md font-headline-md text-on-surface">Deployed Architectures</h2>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" delayChildren={0.2} staggerChildren={0.1}>
            
            {/* Project 1 */}
            <StaggerItem>
              <HoverScale scale={1.02} className="h-full block">
                <a href="https://github.com/nishasorallikar/fmcg-data-engineering-pipeline" target="_blank" rel="noopener noreferrer" className="bg-surface-card border border-outline-variant/30 rounded-2xl flex flex-col h-full overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                  <div className="bg-surface-container-high px-5 py-3 border-b border-outline-variant/20 flex items-center justify-between gap-2">
                    <span className="text-label-sm font-label-sm text-text-muted">fmcg-data-engineering-pipeline</span>
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary transition-colors">open_in_new</span>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-headline-sm font-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors">FMCG Data Engineering Pipeline</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant mb-8 flex-grow">
                      End-to-end data pipeline for Fast-Moving Consumer Goods (FMCG), orchestrating data extraction, transformation, and loading for retail analytics.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1 bg-surface-container border border-outline-variant/20 rounded-lg text-label-sm font-label-sm text-secondary">Databricks</span>
                      <span className="px-3 py-1 bg-surface-container border border-outline-variant/20 rounded-lg text-label-sm font-label-sm text-secondary">Data Pipeline</span>
                      <span className="px-3 py-1 bg-surface-container border border-outline-variant/20 rounded-lg text-label-sm font-label-sm text-secondary">Analytics</span>
                    </div>
                  </div>
                </a>
              </HoverScale>
            </StaggerItem>

            {/* Project 2 */}
            <StaggerItem>
              <HoverScale scale={1.02} className="h-full block">
                <a href="https://github.com/nishasorallikar/supply-chain-control-tower-databricks" target="_blank" rel="noopener noreferrer" className="bg-surface-card border border-outline-variant/30 rounded-2xl flex flex-col h-full overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                  <div className="bg-surface-container-high px-5 py-3 border-b border-outline-variant/20 flex items-center justify-between gap-2">
                    <span className="text-label-sm font-label-sm text-text-muted">supply-chain-control-tower</span>
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary transition-colors">open_in_new</span>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-headline-sm font-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors">Supply Chain Control Tower</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant mb-8 flex-grow">
                      Real-time supply chain control tower built on Databricks. Integrates logistics data to provide end-to-end visibility and inventory optimization.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1 bg-surface-container border border-outline-variant/20 rounded-lg text-label-sm font-label-sm text-secondary">Databricks</span>
                      <span className="px-3 py-1 bg-surface-container border border-outline-variant/20 rounded-lg text-label-sm font-label-sm text-secondary">Spark</span>
                      <span className="px-3 py-1 bg-surface-container border border-outline-variant/20 rounded-lg text-label-sm font-label-sm text-secondary">Supply Chain</span>
                    </div>
                  </div>
                </a>
              </HoverScale>
            </StaggerItem>

            {/* Project 3 */}
            <StaggerItem>
              <HoverScale scale={1.02} className="h-full block">
                <a href="https://github.com/nishasorallikar/databricks-lakehouse-project" target="_blank" rel="noopener noreferrer" className="bg-surface-card border border-outline-variant/30 rounded-2xl flex flex-col h-full overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                  <div className="bg-surface-container-high px-5 py-3 border-b border-outline-variant/20 flex items-center justify-between gap-2">
                    <span className="text-label-sm font-label-sm text-text-muted">databricks-lakehouse-project</span>
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary transition-colors">open_in_new</span>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-headline-sm font-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors">Databricks Lakehouse</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant mb-8 flex-grow">
                      Scalable Lakehouse architecture utilizing Databricks and Delta Lake to process large-scale datasets with ACID transactional guarantees.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1 bg-surface-container border border-outline-variant/20 rounded-lg text-label-sm font-label-sm text-secondary">Lakehouse</span>
                      <span className="px-3 py-1 bg-surface-container border border-outline-variant/20 rounded-lg text-label-sm font-label-sm text-secondary">Databricks</span>
                      <span className="px-3 py-1 bg-surface-container border border-outline-variant/20 rounded-lg text-label-sm font-label-sm text-secondary">Delta Lake</span>
                    </div>
                  </div>
                </a>
              </HoverScale>
            </StaggerItem>

            {/* Project 4 */}
            <StaggerItem>
              <HoverScale scale={1.02} className="h-full block">
                <a href="https://github.com/nishasorallikar/sql-data-warehouse-project" target="_blank" rel="noopener noreferrer" className="bg-surface-card border border-outline-variant/30 rounded-2xl flex flex-col h-full overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                  <div className="bg-surface-container-high px-5 py-3 border-b border-outline-variant/20 flex items-center justify-between gap-2">
                    <span className="text-label-sm font-label-sm text-text-muted">sql-data-warehouse-project</span>
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary transition-colors">open_in_new</span>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-headline-sm font-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors">SQL Data Warehouse</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant mb-8 flex-grow">
                      Modern data warehouse built with SQL Server. Features robust ETL processes, dimensional data modeling, and reporting analytics.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1 bg-surface-container border border-outline-variant/20 rounded-lg text-label-sm font-label-sm text-secondary">SQL Server</span>
                      <span className="px-3 py-1 bg-surface-container border border-outline-variant/20 rounded-lg text-label-sm font-label-sm text-secondary">ETL</span>
                      <span className="px-3 py-1 bg-surface-container border border-outline-variant/20 rounded-lg text-label-sm font-label-sm text-secondary">Data Modeling</span>
                    </div>
                  </div>
                </a>
              </HoverScale>
            </StaggerItem>

          </StaggerContainer>
        </section>

      </main>

      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 bg-surface-container/90 backdrop-blur-xl border-t border-outline-variant/20 shadow-lg rounded-t-full pt-2">
        <Link className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-colors" href="/">
          <span className="material-symbols-outlined">home</span>
          <span className="text-label-sm font-label-sm mt-1">Home</span>
        </Link>
        <Link className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full p-2 scale-90 transition-transform duration-150" href="/about">
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
