import Link from "next/link";

export default function RealTimeLakehousesPost() {
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
            <Link href="/blog" className="text-label-md font-label-md text-primary font-bold border-b-2 border-primary pb-1 px-3 py-2 hover:bg-surface-variant/20 rounded-xl scale-95 transition-transform">
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

      {/* Progress Bar (Visual Fake for static, but gives premium feel) */}
      <div className="hidden md:block fixed top-[72px] left-0 h-[3px] bg-primary w-1/3 z-50 rounded-r-full shadow-[0_0_10px_rgba(var(--primary),0.8)]"></div>

      <main className="w-full pt-[80px] md:pt-[120px] bg-background min-h-screen pb-24">
        
        {/* Cinematic Hero */}
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop mb-16 md:mb-24 relative mt-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-label-md mb-6 font-medium">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Blog
          </Link>
          
          <div className="w-full aspect-[4/3] md:aspect-[2.5/1] rounded-2xl md:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative group ring-1 ring-white/10">
            <img className="w-full h-full object-cover transition-transform duration-[10s] ease-out group-hover:scale-105" src="/lakehouse-diagram.jpg" alt="Architecture Schematic" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            
            {/* Overlay Title */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
               <div className="max-w-4xl">
                 <div className="flex flex-wrap items-center gap-3 mb-6">
                   <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md text-primary text-label-sm uppercase tracking-wider font-bold border border-primary/30 shadow-[0_0_15px_rgba(var(--primary),0.2)]">Featured Guide</span>
                   <span className="text-label-sm text-text-muted font-mono bg-surface-card/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-outline-variant/20">14 Min Read</span>
                   <span className="text-label-sm text-text-muted font-mono bg-surface-card/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-outline-variant/20 flex items-center gap-1.5">
                     <span className="material-symbols-outlined text-[14px]">visibility</span> 18.4k views
                   </span>
                 </div>
                 <h1 className="text-display-lg-mobile md:text-[64px] leading-[1.1] font-display-lg text-on-surface tracking-tight drop-shadow-2xl">
                   Building Real-Time Lakehouses: Apache Iceberg vs Delta Lake in Production
                 </h1>
               </div>
            </div>
          </div>
          
          {/* Glassmorphism Author Card overlapping Hero */}
          <div className="md:absolute -bottom-8 right-16 z-10 bg-surface-card/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-2xl mt-6 md:mt-0">
            <img alt="Author" className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/40 shadow-inner" src="/profile.png" />
            <div className="flex flex-col pr-6">
              <span className="text-body-lg font-bold text-on-surface">Nisha Sorallikar</span>
              <span className="text-label-sm text-primary uppercase tracking-wider mt-0.5">Lead Data Architect</span>
            </div>
          </div>
        </div>

        {/* Article Body Layout */}
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 relative">
          
          {/* Sticky Left Sidebar */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-[140px] flex flex-col gap-10">
              <div>
                <span className="text-label-sm uppercase text-text-muted tracking-widest font-bold mb-5 block">Contents</span>
                <ul className="flex flex-col gap-4 text-body-md text-on-surface-variant border-l border-outline-variant/20 pl-4 font-medium">
                  <li className="text-primary cursor-pointer transition-colors border-l-2 -ml-[17px] border-primary pl-4">Introduction</li>
                  <li className="hover:text-primary cursor-pointer transition-colors hover:translate-x-1 transform duration-200">1. The Architecture</li>
                  <li className="hover:text-primary cursor-pointer transition-colors hover:translate-x-1 transform duration-200">2. Schema Evolution</li>
                  <li className="hover:text-primary cursor-pointer transition-colors hover:translate-x-1 transform duration-200">3. Production Benchmarks</li>
                  <li className="hover:text-primary cursor-pointer transition-colors hover:translate-x-1 transform duration-200">The Verdict</li>
                </ul>
              </div>
              
              <div className="h-px w-full bg-gradient-to-r from-outline-variant/20 to-transparent"></div>
              
              <div>
                 <span className="text-label-sm uppercase text-text-muted tracking-widest font-bold mb-5 block">Share Article</span>
                 <div className="flex gap-3">
                   <button className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all border border-outline-variant/20 shadow-sm hover:shadow-md hover:-translate-y-1">
                     <span className="material-symbols-outlined text-[20px]">share</span>
                   </button>
                   <button className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all border border-outline-variant/20 shadow-sm hover:shadow-md hover:-translate-y-1">
                     <span className="material-symbols-outlined text-[20px]">bookmark</span>
                   </button>
                 </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="md:col-span-7 flex flex-col gap-8 text-lg text-on-surface-variant leading-[1.9]">
            
            <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none text-xl leading-relaxed text-on-surface font-medium mb-4">
              The era of the traditional data warehouse strictly separating compute and storage is evolving rapidly. For the past decade, we've relied on raw Parquet files dropped into Amazon S3 or ADLS, wrapped in a Hive Metastore, and queried using Presto or Spark. It worked, but it lacked the ACID guarantees and transactional reliability that traditional databases offered out of the box.
            </p>

            <p>
              Enter the open table formats: <strong className="text-on-surface font-semibold bg-surface-variant/30 px-1.5 py-0.5 rounded">Apache Iceberg</strong> and <strong className="text-on-surface font-semibold bg-surface-variant/30 px-1.5 py-0.5 rounded">Delta Lake</strong>. These formats bring database-like functionality (transactions, time travel, schema evolution) directly to your data lake, creating the modern <em className="text-on-surface not-italic font-bold">Lakehouse</em> architecture. 
            </p>

            <p>
              Over the last six months, our data platform team migrated over 500TB of historical and streaming telemetry data. We needed to choose the right table format. In this guide, I’ll walk you through our production benchmarks and architectural findings comparing Iceberg and Delta Lake across three completely different engines: AWS Athena (Trino), DuckDB, and Snowflake.
            </p>

            <h2 className="text-headline-md text-on-surface mt-12 mb-6 font-bold flex items-center gap-3">
              <span className="text-primary/50 text-headline-lg font-mono">01.</span>
              The Architecture of Open Table Formats
            </h2>

            <p>
              At a high level, both formats achieve the same goal: they maintain a transaction log or metadata tree alongside your Parquet data files. When a query engine reads an Iceberg or Delta table, it first reads the metadata to discover exactly which data files contain the relevant records for the current snapshot.
            </p>

            {/* Premium Quote Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-surface-card to-surface-container p-6 rounded-2xl border border-tertiary/20 shadow-lg relative overflow-hidden group hover:border-tertiary/50 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/10 rounded-bl-full blur-xl"></div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <span className="material-symbols-outlined text-tertiary">change_history</span>
                  <h3 className="text-headline-sm text-on-surface font-bold tracking-tight">Delta Lake</h3>
                </div>
                <p className="text-body-md text-on-surface-variant leading-relaxed relative z-10">
                  Maintains a highly organized folder named <code className="bg-surface-variant/50 px-1.5 py-0.5 rounded font-mono text-secondary">_delta_log</code> containing JSON files (and Parquet checkpoints) recording every commit sequentially.
                </p>
              </div>

              <div className="bg-gradient-to-br from-surface-card to-surface-container p-6 rounded-2xl border border-primary/20 shadow-lg relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full blur-xl"></div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <span className="material-symbols-outlined text-primary">account_tree</span>
                  <h3 className="text-headline-sm text-on-surface font-bold tracking-tight">Apache Iceberg</h3>
                </div>
                <p className="text-body-md text-on-surface-variant leading-relaxed relative z-10">
                  Uses a hierarchical tree: <em className="text-on-surface font-medium not-italic">Metadata → Manifest List → Manifests → Data</em>. This allows massive pruning without listing S3 directories.
                </p>
              </div>
            </div>

            <h2 className="text-headline-md text-on-surface mt-12 mb-6 font-bold flex items-center gap-3">
              <span className="text-primary/50 text-headline-lg font-mono">02.</span>
              Schema and Partition Evolution
            </h2>

            <p>
              One of the biggest pain points in the Hadoop era was changing partition schemes. If you partitioned by <code className="bg-surface-variant px-1.5 py-0.5 rounded text-secondary font-mono text-sm">month</code> and suddenly needed to partition by <code className="bg-surface-variant px-1.5 py-0.5 rounded text-secondary font-mono text-sm">day</code>, you had to rewrite the entire table.
            </p>

            <p>
              <strong className="text-on-surface">Iceberg</strong> shines incredibly bright here. Because Iceberg abstracts the physical layout from the logical partition definition, you can evolve partitions in place using <em>Hidden Partitioning</em>.
            </p>

            {/* macOS Style Code Block */}
            <div className="my-8 rounded-xl overflow-hidden shadow-2xl border border-outline-variant/20 bg-[#0d1117]">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-outline-variant/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-error/80"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary/80"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                </div>
                <span className="text-label-sm font-mono text-text-muted">iceberg_evolution.sql</span>
                <button className="text-text-muted hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-[16px]">content_copy</span>
                </button>
              </div>
              {/* Code */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-[15px] font-mono leading-relaxed text-[#c9d1d9]">
                  <code>
                    <span className="text-[#ff7b72]">ALTER TABLE</span> events <br/>
                    <span className="text-[#ff7b72]">ADD PARTITION FIELD</span> <span className="text-[#d2a8ff]">bucket</span>(<span className="text-[#79c0ff]">16</span>, user_id);
                  </code>
                </pre>
              </div>
            </div>

            <p>
              <strong className="text-on-surface">Delta Lake</strong> handles schema evolution gracefully through config (<code className="bg-surface-variant px-1.5 py-0.5 rounded text-secondary font-mono text-sm">mergeSchema = "true"</code>), but changing partition strategies usually requires rewriting data.
            </p>

            <h2 className="text-headline-md text-on-surface mt-12 mb-6 font-bold flex items-center gap-3">
              <span className="text-primary/50 text-headline-lg font-mono">03.</span>
              Production Benchmarks
            </h2>

            <p>
              We loaded 10TB of structured clickstream data and ran aggregations across three engines. Here are our findings.
            </p>

            {/* Premium Data Table */}
            <div className="overflow-hidden my-8 rounded-2xl border border-outline-variant/20 shadow-2xl bg-surface-card">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant/20 bg-surface-container-low text-label-md uppercase tracking-wider text-text-muted">
                    <th className="py-5 px-6 font-semibold">Query Engine</th>
                    <th className="py-5 px-6 font-semibold">Table Format</th>
                    <th className="py-5 px-6 font-semibold">Metadata Scan</th>
                    <th className="py-5 px-6 font-semibold text-right">Time Travel</th>
                  </tr>
                </thead>
                <tbody className="text-body-md">
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors group">
                    <td className="py-4 px-6 font-semibold text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">cloud</span> AWS Athena</td>
                    <td className="py-4 px-6 text-on-surface-variant">Iceberg</td>
                    <td className="py-4 px-6 text-secondary font-mono bg-secondary/5 rounded px-2 w-fit">4.2s</td>
                    <td className="py-4 px-6 text-right font-mono">5.1s</td>
                  </tr>
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors group">
                    <td className="py-4 px-6 font-semibold text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">cloud</span> AWS Athena</td>
                    <td className="py-4 px-6 text-on-surface-variant">Delta Lake</td>
                    <td className="py-4 px-6 text-on-surface-variant font-mono">6.8s</td>
                    <td className="py-4 px-6 text-right font-mono">7.2s</td>
                  </tr>
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors group">
                    <td className="py-4 px-6 font-semibold text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-[18px]">memory</span> DuckDB</td>
                    <td className="py-4 px-6 text-on-surface-variant">Iceberg</td>
                    <td className="py-4 px-6 text-on-surface-variant font-mono">1.8s</td>
                    <td className="py-4 px-6 text-right font-mono">2.1s</td>
                  </tr>
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors group">
                    <td className="py-4 px-6 font-semibold text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-[18px]">memory</span> DuckDB</td>
                    <td className="py-4 px-6 text-on-surface-variant">Delta Lake</td>
                    <td className="py-4 px-6 text-secondary font-mono bg-secondary/5 rounded px-2 w-fit">1.5s</td>
                    <td className="py-4 px-6 text-right font-mono text-primary font-bold">1.9s 🏆</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="border-l-4 border-secondary pl-5 py-2 italic text-on-surface-variant bg-secondary/5 rounded-r-lg">
              <strong className="text-on-surface font-semibold not-italic">Observation:</strong> DuckDB processes both formats with blazing speed locally. However, in distributed object storage (S3) accessed via Athena, Iceberg’s tree-based metadata allowed Athena to plan the query significantly faster, avoiding unnecessary S3 list operations.
            </p>

            <h2 className="text-headline-md text-on-surface mt-12 mb-6 font-bold flex items-center gap-3">
              <span className="text-primary/50 text-headline-lg font-mono">04.</span>
              The Verdict
            </h2>

            <p>
              Both formats are production-ready, but they cater to slightly different ecosystems.
            </p>

            <div className="flex flex-col gap-4 my-6">
              <div className="p-5 rounded-xl border border-outline-variant/20 bg-surface-container flex gap-4 items-start">
                <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                <div>
                  <strong className="text-on-surface block mb-1 text-lg">Choose Delta Lake if:</strong>
                  <span className="text-on-surface-variant">You are heavily invested in the Databricks ecosystem. The integration is flawless, and Databricks' proprietary optimizations (like Liquid Clustering) push Delta Lake to incredible speeds.</span>
                </div>
              </div>
              <div className="p-5 rounded-xl border border-primary/30 bg-primary/5 flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <strong className="text-on-surface block mb-1 text-lg">Choose Apache Iceberg if:</strong>
                  <span className="text-on-surface-variant">You are building a multi-engine stack (e.g., Flink, Spark, Snowflake, Athena). Iceberg’s engine-agnostic design makes it the best choice for truly decoupled architectures.</span>
                </div>
              </div>
            </div>

            <p className="mt-6">
              Ultimately, for our multi-engine architecture prioritizing engine-agnosticism, we adopted Apache Iceberg. Have you made the switch? Drop a comment in the community forum!
            </p>
          </article>
          
          {/* Right Gutter Empty Space */}
          <div className="hidden md:block md:col-span-2"></div>

        </div>
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
        <Link className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full p-2 scale-90 transition-transform duration-150" href="/blog">
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
          <Link href="https://github.com/nisha" className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[24px]">code</span>
          </Link>
          <Link href="https://linkedin.com/in/nisha" className="text-on-surface-variant hover:text-primary transition-colors">
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
