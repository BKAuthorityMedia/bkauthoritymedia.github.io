/* BK Authority Media — Editorial Cutroom: cinematic, direct, portfolio-first, with playhead amber accents. */
import { ArrowUpRight, Instagram, MessageCircle, Play, Send, Sparkles } from "lucide-react";

const projects = [
  { no: "01", label: "Brand film", title: "Authority Building", meta: "Story / Positioning / Edit", url: "https://f.io/rSfvyIyo", tone: "gold", note: "A confident brand-building cut with a clean narrative arc." },
  { no: "02", label: "Motion graphics", title: "Motion Graphic Edit", meta: "Design / Rhythm / Motion", url: "https://f.io/FjYgtv38", tone: "line", note: "Graphic energy shaped into a concise visual sequence." },
  { no: "03", label: "Production", title: "Behind the Scene", meta: "Filming / Direction / Capture", url: "https://f.io/IHwGKaJ3", tone: "soft", note: "The process behind the frame — honest, tactile, and human." },
  { no: "04", label: "Commercial", title: "The Ad Cut", meta: "Hook / Product / Conversion", url: "https://f.io/ERXJrHEO", tone: "red", note: "Built to land quickly and keep the message moving." },
  { no: "05", label: "Talking head", title: "Straight to Camera", meta: "Performance / Captions / Pace", url: "https://f.io/3BljMwZm", tone: "mono", note: "A clear talking-head edit designed for attention and trust." },
  { no: "06", label: "International", title: "Australia Stories", meta: "Travel / Atmosphere / Social", url: "https://f.io/I3Ul7Dnv", tone: "blue", note: "A sense of place, cut for modern attention spans.", secondUrl: "https://f.io/DzOqLba" },
];

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return (
    <article className={`project project-${project.tone}`}>
      <div className="project-visual">
        <div className="visual-grid" />
        <div className="visual-scanline" />
        <span className="project-index">{project.no}</span>
        <span className="project-format">FRAME.IO / SHOWREEL</span>
        <div className="play-orb"><Play size={17} fill="currentColor" /></div>
        <div className="visual-word">{project.label}</div>
      </div>
      <div className="project-copy">
        <div className="project-topline"><span>{project.label}</span><span>0{Number(project.no)} / 06</span></div>
        <h3>{project.title}</h3>
        <p>{project.note}</p>
        <div className="project-bottomline">
          <span>{project.meta}</span>
          <a href={project.url} target="_blank" rel="noreferrer" className="view-link">View cut <ArrowUpRight size={16} /></a>
        </div>
        {project.secondUrl && <a href={project.secondUrl} target="_blank" rel="noreferrer" className="second-link">View second cut <ArrowUpRight size={14} /></a>}
      </div>
    </article>
  );
}

export default function Home() {
  const whatsapp = "https://wa.me/94767794670?text=Hi%20BK%20Authority%20Media%2C%20I%27d%20like%20to%20discuss%20a%20video%20project.";

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="BK Authority Media home"><span className="brand-mark" aria-hidden="true"><i /><b /></span><span className="brand-name">AUTHORITY<br />MEDIA</span></a>
        <nav className="nav-links" aria-label="Primary navigation"><a href="#work">Selected work</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span className="amber-dot" /> Video editing / content strategy / motion</div>
        <div className="hero-layout">
          <div className="hero-copy">
            <h1>Make the<br /><em>footage</em><br />move.</h1>
            <p className="hero-intro">BK Authority Media is a video editing and content studio for brands, creators, and businesses that need work with momentum.</p>
            <div className="hero-actions"><a className="button button-amber" href="#work">See selected work <ArrowUpRight size={17} /></a><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Send the brief <Send size={15} /></a></div>
          </div>
          <div className="hero-frame" aria-label="Editing timeline visual">
            <div className="hero-frame-top"><span>BK / 001</span><span>PLAYHEAD AMBER</span></div>
            <div className="hero-collage"><div className="collage-block block-one" /><div className="collage-block block-two" /><div className="collage-block block-three" /><div className="collage-caption">THE<br />CUT<br />STARTS<br />HERE.</div></div>
            <div className="hero-timeline"><span>00:00</span><div className="timeline-track"><i /><i /><i /><b /></div><span>01:24</span></div>
          </div>
        </div>
        <div className="hero-footer"><span>Scroll to explore <span className="scroll-line" /></span><span>Based in Sri Lanka / Working everywhere</span></div>
      </section>

      <section className="statement section-pad"><div className="section-label"><span>01</span><span>Point of view</span></div><div className="statement-content"><p className="statement-lead">Good edits do not just hold attention.<br /><span>They give it somewhere to go.</span></p><p className="statement-support">From the first hook to the last frame, every choice should clarify the message, sharpen the feeling, and make the next action obvious.</p></div></section>

      <section className="work section-pad" id="work"><div className="section-heading"><div className="section-label"><span>02</span><span>Selected work <i className="label-tick" /></span></div><p>Six cuts across brand, commercial, motion, production, and social. Open a project to watch the full piece.</p></div><div className="project-list">{projects.map((project) => <ProjectCard key={project.no} project={project} />)}</div></section>

      <section className="services section-pad" id="services"><div className="section-label"><span>03</span><span>What I do <i className="label-tick" /></span></div><div className="services-grid"><div className="service-intro"><h2>Built for<br /><em>attention.</em></h2><p>One dependable creative partner from raw footage to ready-to-publish content.</p></div><div className="service-list"><div><span>01</span><h3>Video editing</h3><p>Short-form edits, social cuts, talking-head videos, ads, and brand films with pace and purpose.</p></div><div><span>02</span><h3>Motion graphics</h3><p>Titles, transitions, animated type, and graphic systems that make the message more memorable.</p></div><div><span>03</span><h3>Content strategy</h3><p>Hooks, formats, content calendars, and repeatable ideas that keep your brand visible.</p></div></div></div></section>

      <section className="contact section-pad" id="contact"><div className="contact-mark"><Sparkles size={21} /><span>LET’S MAKE<br />SOMETHING<br /><em>WORTH WATCHING.</em></span></div><div className="contact-copy"><div className="section-label"><span>04</span><span>Start a project <i className="label-tick" /></span></div><h2>Have footage?<br /><em>Have a brief?</em></h2><p>Tell me what you are making, what it needs to do, and when it needs to move. I’ll get back to you on WhatsApp.</p><a className="button button-amber button-large" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Chat on WhatsApp</a><div className="contact-details"><span>+94 76 779 4670</span><span>BK Authority Media</span></div></div></section>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark" aria-hidden="true"><i /><b /></span><span>AUTHORITY MEDIA</span></div><span>© 2026 BK Authority Media</span><div className="footer-links"><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13} /></a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
