"use client";
import { useState } from "react";
import Link from "next/link";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations";

const articles = [
  {
    id: 1,
    title: "The Death of Traditional ETL: Reverse ETL & Stream Processing with Kafka and Flink",
    category: "streaming architecture",
    tags: ["Streaming", "Architecture"],
    readTime: "8 min read",
    date: "Apr 29, 2025",
    comments: 24,
    author: "Nisha Sorallikar",
    initials: "NS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFlMRMqbRQrbYkP1oeX9NV0zzkNYXHtSENIBv1rvkiYIKInhg9brl7tYpQK77Te5mueNfE_UyuUAwzFSq71AJAaTBotB0GrB957VhsOkHLhcONR_WsR6BM78Bs73J2QaFZeSdFcRp9odotm-S_Mw-yQR0h69R4hQk1-CcsvS5BriglC2SzpPQTVB8534j6Um5DpGIP_PGBCUzbdXX7dirq2t-jhCUtGpHFba1SkU5d7RTyprHt3Q603g",
    excerpt: "Why daily batch syncs are failing operational needs. We dissect stateful stream joins, out-of-order event handling with watermarks, and syncing enriched facts back into CRMs with sub-second SLA."
  },
  {
    id: 2,
    title: "Mastering dbt Mesh: Multi-Project Architectures and Governance at Scale",
    category: "dbt",
    tags: ["dbt", "Data Modeling"],
    readTime: "11 min read",
    date: "May 04, 2025",
    comments: 19,
    author: "Nisha Sorallikar",
    initials: "NS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzQRr7ODtyCOEe35d3e8gZOkn2cHqmQJneM1ygPeMZhV-9Pqhx4GEYvcHvCOVw6W-OlzG9Qk3Cw-us3MTWAN5kTb81M16FzWy02XpwDdAURzYMhakOBZPHNgy5YZ-zhEhPjwY6AxgtQrKzDmateG9hk84-paxf9rIYuGzNq3YhIByVrlevYy9zQornbdAKTX9emLN24QnwvGTBVzla0E0emicoLG5GUIa_BfsP_l_0P0UmQ0k9AA8eRg",
    excerpt: "Breaking monolithic analytics codebases into cross-domain data products using Model Contracts, Access Controls, and Public cross-project refs without breaking downstream dashboards."
  },
  {
    id: 3,
    title: "Window Functions Visually Explained: From ROW_NUMBER to DENSE_RANK & LEAD/LAG",
    category: "architecture olap",
    tags: ["Visual SQL", "Tutorial"],
    readTime: "6 min read",
    date: "May 10, 2025",
    comments: 41,
    author: "Nisha Sorallikar",
    initials: "NS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0lGyBAbi5bPIitKoUd6ZWDLfPuylDH31DrfojJJd4u1QFhT9YURcDKr2VdWhBg7eAeGKdjNRRPzVs9f3HnGCxKmhXCds1jztpCA1gI7TbPQjRf_yzA8WxiHDTc061NLdsK1uTgXL-CI904G8RGNgbSQcivBML9WG6O45oVhS_9QrWqKlUddzl0cV2HrFfe5AArKk596r-FsJHRq0hUArAHg8yhQRw1X-WjhAzMK9WDux67ksn5rfHKw",
    excerpt: "Never confuse framing with partitioning again. Hand-sketched flow diagrams detailing partition evaluation order, cumulative sums with unbounded preceding windows, and rolling aggregations."
  },
  {
    id: 4,
    title: "Vector Databases in Data Engineering: Ingesting Embeddings into Pinecone & Milvus via Dagster",
    category: "streaming architecture",
    tags: ["AI/ML Infra", "Orchestration"],
    readTime: "9 min read",
    date: "Apr 15, 2025",
    comments: 16,
    author: "Nisha Sorallikar",
    initials: "NS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4n_JTycWdf3cGFuS0YLaK6CKA0W1FV4PTTnTzOR45G327s1VlhvuGYoQNUJhiOzodcKx_DrMHeXk5yYVJayCmVhrOiadivXxHwtjkeViQQReKXpUzTwelEwuweC0MnpGcoTTvEQTMrEhoJENnJSb7MRHYPwPi1vhNDwCX8OVeMKs0atBHy8ZRq22Attf_Iz0djvM7EbIeSbtHxAmgjl5zVTcQvsYmi3ie3zj0sIr9K6cBGa6Tnc70zQ",
    excerpt: "Integrating high-dimensional embeddings into production asset pipelines. Benchmarking HNSW indexing, bulk upsert throughput, and hybrid search pipelines across enterprise warehouses."
  },
  {
    id: 5,
    title: "Cost Optimization Strategies for Snowflake and BigQuery: Real-World Lessons from 100TB+ Warehouses",
    category: "olap",
    tags: ["FinOps", "Cloud Warehouses"],
    readTime: "12 min read",
    date: "Mar 22, 2025",
    comments: 37,
    author: "Nisha Sorallikar",
    initials: "NS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgwYa24DozdbZ5M2-rmogq2tOWU-LfcA5m-m6X81ai5lhE_FdoztQAny02t7yYerGMSxbG7l2wEczw4FJtcfiGNm2rB9CoucdHO4FA5aScChRBIYjhArWp-TvNzdMFW_7AWxQdUsfCKWnjSiMGcI1NPb-mIJ76IFy-b-oRQ15OeDzoF0HayaRKznu_hTZBUmqo_cVLwtMktX9e7_3nw7ysErNS8kT-B3IwJtmFP8CL0RNR3i4Mnqvvmw",
    excerpt: "Cutting warehouse compute spending by 42%. Practical strategies on auto-clustering, query profile exploration, spilled memory tuning, and offloading heavy batch transformations to DuckDB."
  },
  {
    id: 6,
    title: "Zero to Production Data Platform: My Blueprint for Early-Stage Tech Startups",
    category: "career architecture",
    tags: ["Architecture", "Career Blueprint"],
    readTime: "15 min read",
    date: "Feb 18, 2025",
    comments: 53,
    author: "Nisha Sorallikar",
    initials: "NS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRYdG7LTeHRUksgGbpXuunFCaHwh37Kwr9ahAB6RSGwfWnv5n1JfD3q8jDxjeZicxbBYf_hJkAnr-JRrocSOD5fGC9P4QZJRiLzL0_ttPNiHucME_einAS2j4nuhipGeMKp8gQ9L0tifx08W9MV9UJsQC-ptHg4jnTb63B6FE3ZI5itgkuukIYDERYbCEiN6939y8pezezqMYFt5M-mLBmFkzE5fEOD85KLqYjFbk-tCjUzM1vZHrLog",
    excerpt: "From Day 1 to Series B: Avoiding over-engineering while establishing CI/CD for dbt, setting up alerting before stakeholders notice silent data bugs, and sizing hardware accurately."
  }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  const filteredArticles = articles.filter(article => {
    const queryMatch = !searchQuery || article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const tagMatch = activeTag === "all" || article.category.includes(activeTag);
    return queryMatch && tagMatch;
  });

  const filterTabs = [
    { label: "All (28)", tag: "all" },
    { label: "Architecture & Lakehouse", tag: "architecture" },
    { label: "dbt & Data Modeling", tag: "dbt" },
    { label: "Apache Spark & Streaming", tag: "streaming" },
    { label: "Real-Time OLAP", tag: "olap" },
    { label: "Career & System Design", tag: "career" }
  ];

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

      <main className="w-full pt-[80px] md:pt-[100px] bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-primary-container/15 blur-[120px] pointer-events-none rounded-full"></div>
            <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop py-12 lg:py-16 relative">
              
              <FadeIn className="flex flex-col items-start max-w-3xl mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary text-label-sm tracking-wider uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                  <span>Technical Insights & Tutorials</span>
                </div>
                <h1 className="text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight mb-4">
                  Engineering The <span className="text-primary">Modern Data Stack</span>
                </h1>
                <p className="text-body-lg text-text-muted leading-relaxed mb-8">
                  Deep dives, architectural breakdowns, hands-on SQL tricks, streaming pipeline guides, and career roadmaps for data practitioners.
                </p>
                <div className="w-full flex flex-col gap-4">
                  <div className="relative w-full">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">search</span>
                    <input 
                      className="w-full bg-surface-card text-on-surface text-label-md pl-12 pr-28 py-3.5 rounded-xl outline-none focus:bg-surface-container-high transition-colors placeholder:text-outline-variant shadow-sm" 
                      placeholder="Search by topic, keyword, stack..." 
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-outline-variant text-label-sm px-2 py-1 rounded bg-surface-container-lowest">
                      <span>⌘</span><span>K</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 scrollbar-none">
                    {filterTabs.map((tab) => (
                      <button 
                        key={tab.tag}
                        onClick={() => setActiveTag(tab.tag)}
                        className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-label-sm transition-all ${activeTag === tab.tag ? 'bg-primary text-on-primary' : 'bg-surface-card hover:bg-surface-container text-on-surface-variant hover:text-on-surface'}`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <SlideUp className="mb-16">
                <div className="group relative rounded-xl bg-surface-card p-6 lg:p-10 transition-all duration-300 hover:bg-surface-container-low shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 flex flex-col items-start">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container text-label-sm uppercase tracking-wider font-semibold">Featured Guide</span>
                        <span className="text-outline text-label-sm">•</span>
                        <span className="text-label-sm text-secondary font-medium tracking-wide">14 Min Read</span>
                        <span className="text-outline text-label-sm">•</span>
                        <span className="flex items-center gap-1 text-label-sm text-text-muted">
                          <span className="material-symbols-outlined text-[14px]">visibility</span>
                          18.4k views
                        </span>
                      </div>
                      <h2 className="text-headline-md text-on-surface tracking-tight mb-4 group-hover:text-primary transition-colors">
                        Building Real-Time Lakehouses: Apache Iceberg vs Delta Lake in Production
                      </h2>
                      <p className="text-body-md text-text-muted leading-relaxed mb-6">
                        A deep-dive benchmark comparing partition evolution, ACID guarantees, metadata overhead, and query latency across AWS Athena, DuckDB, and Snowflake engines.
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-4 w-full pt-4 bg-surface-card/40 rounded-lg">
                        <div className="flex items-center gap-3">
                          <img alt="Author" className="w-10 h-10 rounded-full object-cover" src="/profile.png" />
                          <div className="flex flex-col">
                            <span className="text-body-md font-medium text-on-surface">Nisha Sorallikar</span>
                            <span className="text-label-sm text-text-muted">May 18, 2025 • Lead Data Architect</span>
                          </div>
                        </div>
                        <HoverScale scale={1.05}>
                          <Link href="/blog/real-time-lakehouses" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary text-label-md hover:bg-primary-fixed hover:text-on-primary-fixed transition-all block">
                            <span>Read Deep Dive</span>
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                          </Link>
                        </HoverScale>
                      </div>
                    </div>
                    <div className="lg:col-span-5 relative w-full flex flex-col justify-center">
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container flex items-center justify-center p-4">
                        <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 opacity-90" src="/lakehouse-diagram.jpg" alt="Schematic" />
                        <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-lg bg-surface-card/90 backdrop-blur-md flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded bg-secondary/15 flex items-center justify-center text-secondary">
                              <span className="material-symbols-outlined text-[18px]">speed</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-label-sm text-on-surface font-semibold">Parquet Metadata Sync</span>
                              <span className="text-label-sm text-text-muted">3.4x faster snapshot discovery</span>
                            </div>
                          </div>
                          <span className="text-label-sm text-secondary bg-secondary/10 px-2 py-0.5 rounded font-mono">BENCHMARK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideUp>

              <section className="mb-20">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-label-sm uppercase text-primary tracking-wider font-semibold block mb-1">Architecture & Implementation</span>
                    <h3 className="text-headline-md text-on-surface">Trending Engineering Breakdowns</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-label-sm text-text-muted hidden sm:inline-block">Sorted by Repertoire Relevance</span>
                    <span className="material-symbols-outlined text-outline-variant text-[18px]">tune</span>
                  </div>
                </div>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" delayChildren={0.1} staggerChildren={0.1}>
                  {filteredArticles.map(article => (
                    <StaggerItem key={article.id}>
                      <article className="flex flex-col justify-between h-full bg-surface-card rounded-xl p-6 transition-all duration-200 hover:bg-surface-container-low hover:-translate-y-1 shadow-md group">
                        <div>
                          <div className="relative w-full h-44 rounded-lg overflow-hidden mb-5 bg-surface-container-high">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={article.image} alt={article.title} />
                            <div className="absolute top-3 left-3 flex gap-2">
                              <span className="px-2 py-0.5 rounded bg-surface-card/90 backdrop-blur text-label-sm text-primary">{article.tags[0]}</span>
                              {article.tags[1] && <span className="px-2 py-0.5 rounded bg-surface-card/90 backdrop-blur text-label-sm text-tertiary">{article.tags[1]}</span>}
                            </div>
                            <div className="absolute bottom-3 right-3 text-label-sm px-2 py-0.5 rounded bg-surface-card/90 backdrop-blur text-text-muted">
                              {article.readTime}
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-text-muted text-label-sm mb-2">
                            <span>{article.date}</span>
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-[14px]">comment</span> {article.comments} discussions
                            </span>
                          </div>
                          <h4 className="text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug mb-3">
                            {article.title}
                          </h4>
                          <p className="text-body-md text-text-muted leading-normal line-clamp-3 mb-6">
                            {article.excerpt}
                          </p>
                        </div>
                        <div className="pt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-bold">{article.initials}</div>
                            <span className="text-label-sm text-on-surface">{article.author}</span>
                          </div>
                          <div className="flex items-center gap-2 text-outline-variant hover:text-primary transition-colors">
                            <button aria-label="Bookmark" className="p-1.5 hover:bg-surface-container rounded transition-colors">
                              <span className="material-symbols-outlined text-[18px]">bookmark</span>
                            </button>
                            <button aria-label="Share" className="p-1.5 hover:bg-surface-container rounded transition-colors">
                              <span className="material-symbols-outlined text-[18px]">share</span>
                            </button>
                          </div>
                        </div>
                      </article>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </section>

              <section className="mb-20">
                <div className="relative rounded-2xl bg-gradient-to-br from-surface-card via-surface-container to-surface-card p-8 lg:p-12 overflow-hidden shadow-2xl">
                  <div className="absolute right-0 top-0 w-96 h-full opacity-5 pointer-events-none flex items-center justify-center">
                    <span className="material-symbols-outlined text-[260px] text-primary">account_tree</span>
                  </div>
                  <div className="max-w-2xl relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 text-primary text-label-sm tracking-wider uppercase mb-4">
                      <span className="material-symbols-outlined text-[16px]">draw</span>
                      <span>Visual Architecture Dispatch</span>
                    </div>
                    <h3 className="text-display-lg-mobile lg:text-headline-md text-on-surface mb-3 tracking-tight">
                      DataNotes Weekly Digest
                    </h3>
                    <p className="text-body-md text-text-muted leading-relaxed mb-6">
                      Get hand-sketched architecture diagrams, production debugging stories, and practical pipeline patterns straight to your inbox every Sunday morning. No marketing fluff—strictly distributed systems and modern data engineering craft.
                    </p>
                    <form className="flex flex-col sm:flex-row items-center gap-3 w-full" onSubmit={(e) => { e.preventDefault(); alert('Subscribed to DataNotes Digest!'); }}>
                      <div className="relative flex-1 w-full">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline-variant text-[18px]">alternate_email</span>
                        <input className="w-full bg-surface-container-lowest text-on-surface text-label-md pl-10 pr-4 py-3 rounded-lg outline-none focus:bg-surface-card focus:ring-1 focus:ring-primary transition-all placeholder:text-outline-variant" placeholder="data.lead@company.com" required type="email" />
                      </div>
                      <button className="w-full sm:w-auto whitespace-nowrap px-6 py-3 rounded-lg bg-primary text-on-primary text-label-md font-semibold hover:bg-primary-fixed hover:text-on-primary-fixed transition-all" type="submit">
                        Subscribe Free
                      </button>
                    </form>
                    <div className="flex items-center gap-4 mt-4 text-label-sm text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
                        Over 14,200+ engineers reading
                      </span>
                      <span>•</span>
                      <span>Zero spam, one-click unsubscribe</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <div className="rounded-xl bg-surface-card p-6 lg:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex flex-col">
                    <span className="text-label-sm text-secondary uppercase font-mono tracking-wider mb-1">Index & Ecosystem</span>
                    <h4 className="text-headline-sm text-on-surface">Trending Technology Tags</h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {["#ApacheIceberg", "#DuckDB", "#DataContracts", "#Polars", "#Kafka", "#Airflow", "#MedallionArchitecture", "#Snowflake"].map(tag => (
                      <button key={tag} onClick={() => setSearchQuery(tag.replace('#', ''))} className="px-3 py-1.5 rounded bg-surface-container text-on-surface-variant text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-colors font-mono">
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </section>

            </div>
          </div>
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
