"use client";

import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Youtube } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { translations } from './i18n';

// Motion variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'id' | 'zh'>('en');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.country_code === 'ID') {
          setLang('id');
        } else if (['CN', 'TW', 'HK', 'MO'].includes(data.country_code)) {
          setLang('zh');
        }
      })
      .catch(console.error);
  }, []);

  const t = translations[lang];

  return (
    <main>
      {/* Navbar */}
      <nav style={{ background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent' }} className="navbar">
        <div className="container nav-content">
          <Link href="/" className="nav-brand">GC<span style={{color: 'var(--primary)'}}>.</span></Link>
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link href="#work" className="nav-link">{t.nav.work}</Link>
            <Link href="#services" className="nav-link">{t.nav.services}</Link>
            <Link href="#about" className="nav-link">{t.nav.about}</Link>
            <Link href="#contact" className="nav-link">{t.nav.contact}</Link>
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as 'en' | 'id' | 'zh')} 
              style={{
                background: 'transparent', 
                color: 'var(--text-muted)', 
                border: '1px solid var(--border)', 
                borderRadius: '6px', 
                padding: '0.2rem 0.5rem',
                fontSize: '0.85rem',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <option value="en" style={{ background: 'var(--background)' }}>EN</option>
              <option value="id" style={{ background: 'var(--background)' }}>ID</option>
              <option value="zh" style={{ background: 'var(--background)' }}>ZH</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="glow-effect"></div>
        <div className="container flex flex-col justify-center gap-16" style={{ paddingTop: '15vh' }}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '800px' }}>
            <motion.p variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem' }}>
              {t.hero.sub}
            </motion.p>
            <motion.h1 variants={fadeInUp} className="heading-1" style={{ marginBottom: '1.5rem' }}>
              {t.hero.h1_1}<span className="gradient-primary">{t.hero.h1_2}</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lead" style={{ marginBottom: '2.5rem', maxWidth: '600px' }}>
              {t.hero.lead}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex gap-4 mb-8">
              <Link href="#work" className="btn btn-primary">
                {t.hero.btn_work} <ChevronRight size={18} />
              </Link>
              <Link href="#contact" className="btn btn-secondary">
                {t.hero.btn_contact}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', width: '100%', maxWidth: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div role="img" aria-label="Diagram showing a workflow moving from Trigger to Logic to AI to Action" style={{ position: 'relative', width: '100%', padding: '1rem' }}>
              <svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
                <path d="M60,60 C110,60 110,150 165,150" fill="none" stroke="var(--border)" strokeWidth="2"/>
                <path d="M255,150 C300,150 300,60 345,60" fill="none" stroke="var(--border)" strokeWidth="2"/>
                <path d="M60,240 C110,240 110,150 165,150" fill="none" stroke="var(--border)" strokeWidth="2"/>
                <path d="M255,150 C300,150 300,240 345,240" fill="none" stroke="var(--border)" strokeWidth="2"/>
                
                <circle r="4" fill="#5eead4">
                  <animateMotion dur="3.2s" repeatCount="indefinite" path="M60,60 C110,60 110,150 165,150" />
                </circle>
                <circle r="4" fill="#5eead4">
                  <animateMotion dur="3.2s" begin="0.4s" repeatCount="indefinite" path="M60,240 C110,240 110,150 165,150" />
                </circle>
                <circle r="4" fill="#ff9f5a">
                  <animateMotion dur="3.2s" begin="1.6s" repeatCount="indefinite" path="M255,150 C300,150 300,60 345,60" />
                </circle>
                <circle r="4" fill="#ff9f5a">
                  <animateMotion dur="3.2s" begin="1.6s" repeatCount="indefinite" path="M255,150 C300,150 300,240 345,240" />
                </circle>
                
                <g>
                  <rect x="10" y="40" width="100" height="40" rx="8" fill="var(--secondary)" stroke="var(--border)"/>
                  <text x="60" y="55" textAnchor="middle" style={{ fontFamily: 'inherit', fontSize: '13px', fontWeight: 600, fill: 'var(--foreground)' }}>{t.svg.trigger}</text>
                  <text x="60" y="70" textAnchor="middle" style={{ fontFamily: 'monospace', fontSize: '11px', fill: 'var(--text-muted)' }}>{t.svg.trigger_form}</text>
                </g>
                <g>
                  <rect x="10" y="220" width="100" height="40" rx="8" fill="var(--secondary)" stroke="var(--border)"/>
                  <text x="60" y="235" textAnchor="middle" style={{ fontFamily: 'inherit', fontSize: '13px', fontWeight: 600, fill: 'var(--foreground)' }}>{t.svg.trigger}</text>
                  <text x="60" y="250" textAnchor="middle" style={{ fontFamily: 'monospace', fontSize: '11px', fill: 'var(--text-muted)' }}>{t.svg.trigger_record}</text>
                </g>
                <g>
                  <rect x="165" y="130" width="100" height="40" rx="8" fill="var(--secondary)" stroke="#5eead4"/>
                  <text x="215" y="145" textAnchor="middle" style={{ fontFamily: 'inherit', fontSize: '13px', fontWeight: 600, fill: 'var(--foreground)' }}>{t.svg.logic}</text>
                  <text x="215" y="160" textAnchor="middle" style={{ fontFamily: 'monospace', fontSize: '11px', fill: 'var(--text-muted)' }}>{t.svg.logic_route}</text>
                </g>
                <g>
                  <rect x="345" y="40" width="105" height="40" rx="8" fill="var(--secondary)" stroke="var(--border)"/>
                  <text x="397" y="55" textAnchor="middle" style={{ fontFamily: 'inherit', fontSize: '13px', fontWeight: 600, fill: 'var(--foreground)' }}>{t.svg.action}</text>
                  <text x="397" y="70" textAnchor="middle" style={{ fontFamily: 'monospace', fontSize: '11px', fill: 'var(--text-muted)' }}>{t.svg.action_crm}</text>
                </g>
                <g>
                  <rect x="345" y="220" width="105" height="40" rx="8" fill="var(--secondary)" stroke="var(--border)"/>
                  <text x="397" y="235" textAnchor="middle" style={{ fontFamily: 'inherit', fontSize: '13px', fontWeight: 600, fill: 'var(--foreground)' }}>{t.svg.action}</text>
                  <text x="397" y="250" textAnchor="middle" style={{ fontFamily: 'monospace', fontSize: '11px', fill: 'var(--text-muted)' }}>{t.svg.action_wa}</text>
                </g>
              </svg>
            </div>
            <motion.p variants={fadeInUp} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff9f5a', display: 'inline-block' }}></span>
              {t.hero.trust}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="heading-2">{t.services.title}</motion.h2>
            <motion.p variants={fadeInUp} className="text-lead mb-8" style={{ maxWidth: '600px' }}>
              {t.services.lead}
            </motion.p>

            <div className="grid grid-cols-3" style={{ gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {[
                {
                  title: t.services.srv_1_title,
                  desc: t.services.srv_1_desc,
                },
                {
                  title: t.services.srv_2_title,
                  desc: t.services.srv_2_desc,
                },
                {
                  title: t.services.srv_3_title,
                  desc: t.services.srv_3_desc,
                },
              ].map((service, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="card" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>{service.title}</h3>
                  <p className="text-muted" style={{ lineHeight: 1.6 }}>{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="heading-2">{t.projects.title}</motion.h2>
            <motion.p variants={fadeInUp} className="text-lead mb-8" style={{ maxWidth: '600px' }}>
              {t.projects.lead}
            </motion.p>

            <div className="flex flex-col gap-6 mb-8" style={{ marginBottom: '4rem' }}>
              {[
                {
                  title: t.projects.prj_1_title,
                  desc: t.projects.prj_1_desc,
                  tags: ['n8n', 'Google Sheets', 'WhatsApp API']
                },
                {
                  title: t.projects.prj_2_title,
                  desc: t.projects.prj_2_desc,
                  tags: ['n8n', 'OpenAI API']
                },
                {
                  title: t.projects.prj_3_title,
                  desc: t.projects.prj_3_desc,
                  tags: ['n8n', 'Webhooks', 'Google Sheets']
                },
                {
                  title: t.projects.prj_4_title,
                  desc: t.projects.prj_4_desc,
                  tags: ['n8n', 'Typeform', 'Airtable', 'Slack']
                },
                {
                  title: t.projects.prj_5_title,
                  desc: t.projects.prj_5_desc,
                  tags: ['n8n', 'AI Agents', 'OpenAI API']
                },
              ].map((project, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="card" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>{project.title}</h3>
                  <p className="text-muted mb-4" style={{ color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '600px' }}>{project.desc}</p>
                  <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                    {project.tags.map(tag => <span key={tag} className="badge" style={{ background: 'rgba(94,234,212,0.08)', color: 'var(--primary)', border: '1px solid rgba(94,234,212,0.25)' }}>{tag}</span>)}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.h3 variants={fadeInUp} style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem', color: 'var(--text-muted)' }}>{t.projects.other_title}</motion.h3>
            <div className="grid grid-cols-2">
              {[
                {
                  title: 'Latihan Trading',
                  desc: t.projects.other_1_desc,
                  live: 'https://latihantrading.com',
                  tags: ['Next.js', 'Tailwind CSS', 'Neon', 'Prisma', 'NextAuth.js', 'Recharts']
                },
                {
                  title: 'Tradexa',
                  desc: t.projects.other_2_desc,
                  live: 'https://github.com/GustiCahya/tradexa-flutter-app',
                  tags: ['Flutter', 'Riverpod', 'Isar']
                },
                {
                  title: 'Tablogs',
                  desc: t.projects.other_3_desc,
                  live: 'https://tablogs.com',
                  tags: ['Angular']
                },
                {
                  title: 'Lelang Agunan BNI',
                  desc: t.projects.other_4_desc,
                  live: 'https://lelangagunan.bni.co.id',
                  tags: ['React', 'Flutter', '.net']
                },
              ].map((project, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="card" style={{ padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{project.title}</h4>
                  <p className="text-muted mb-4" style={{ fontSize: '0.9rem', flexGrow: 1, color: 'var(--text-muted)', lineHeight: 1.5 }}>{project.desc}</p>
                  <div className="flex gap-2 mb-4" style={{ flexWrap: 'wrap' }}>
                    {project.tags.map(tag => <span key={tag} style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{tag} - </span>)}
                  </div>
                  <div className="mt-auto">
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 inline-block" 
                       style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 500 }}>
                      <ExternalLink size={16} /> {t.projects.btn_view}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-2">
            <div>
              <motion.h2 variants={fadeInUp} className="heading-2">{t.about.title}</motion.h2>
              <motion.p variants={fadeInUp} className="text-lead mb-8">
                {t.about.lead}
              </motion.p>
              
              <motion.h3 variants={fadeInUp} style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>{t.about.bg}</motion.h3>
              <motion.div variants={fadeInUp} style={{ borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{t.about.job1_title}</h4>
                  <p style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'monospace' }}>{t.about.job1_meta}</p>
                  <p style={{ color: 'var(--text-muted)' }}>{t.about.job1_desc}</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{t.about.job2_title}</h4>
                  <p style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'monospace' }}>Bank Negara Indonesia • 2022</p>
                  <p style={{ color: 'var(--text-muted)' }}>{t.about.job2_desc}</p>
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.h3 variants={fadeInUp} style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem', marginTop: '4rem' }}>{t.about.skills}</motion.h3>
              <div className="flex flex-col gap-6">
                <motion.div variants={fadeInUp}>
                  <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontWeight: 600 }}>{t.about.skill1}</h4>
                  <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                    {['n8n', 'OpenAI API', 'Claude API', 'Zapier', 'Make', 'AI Agents', 'Data Annotation & Evaluation'].map(skill => <span key={skill} className="badge">{skill}</span>)}
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontWeight: 600 }}>{t.about.skill2}</h4>
                  <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'REST APIs', 'GraphQL'].map(skill => <span key={skill} className="badge">{skill}</span>)}
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontWeight: 600 }}>{t.about.skill3}</h4>
                  <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                    {['Git', 'Figma', 'CI/CD', 'Agile', 'Remote collaboration'].map(skill => <span key={skill} className="badge">{skill}</span>)}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} style={{ maxWidth: '600px', margin: '0 auto', background: 'linear-gradient(180deg, var(--secondary) 0%, var(--background) 100%)', border: '1px solid var(--border)', borderRadius: '16px', padding: '3rem 2.5rem', textAlign: 'left' }}>
            <motion.h2 variants={fadeInUp} className="heading-2" style={{ marginBottom: '1rem' }}>{t.contact.title}</motion.h2>
            <motion.p variants={fadeInUp} className="text-lead mb-8" style={{ fontSize: '1rem' }}>
              {t.contact.lead}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex gap-4" style={{ flexWrap: 'wrap' }}>
              <a href="mailto:gusticahya.work@gmail.com" className="btn btn-primary">
                {t.contact.btn_email}
              </a>
              <a href="https://www.linkedin.com/in/bagus-tama-543052310" target="_blank" rel="noreferrer" className="btn btn-secondary">
                LinkedIn
              </a>
              <a href="https://github.com/gusticahya" target="_blank" rel="noreferrer" className="btn btn-secondary">
                GitHub
              </a>
              <a href="https://www.youtube.com/@cahya7997" target="_blank" rel="noreferrer" className="btn btn-secondary">
                YouTube
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '2.5rem 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        <div className="container flex" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <span>{t.footer.copy}</span>
          <span>{t.footer.built}</span>
        </div>
      </footer>
    </main>
  );
}
