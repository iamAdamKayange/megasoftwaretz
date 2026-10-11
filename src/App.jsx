import { useEffect, useState } from 'react'
import './App.css'
import './Leadership.css'

const services = [
  { n: '01', icon: '⌘', name: 'Web Development', text: 'Fast, thoughtful websites and web applications built around the way your business works.', tags: ['Web apps', 'E-commerce'] },
  { n: '02', icon: '▣', name: 'Mobile Applications', text: 'Useful mobile experiences designed to feel natural on the devices people use every day.', tags: ['iOS & Android', 'Product design'] },
  { n: '03', icon: '⌘', name: 'Custom Software', text: 'Purpose-built software that brings your workflows, information and teams together.', tags: ['Business tools', 'Integrations'] },
  { n: '04', icon: '✳', name: 'AI Solutions', text: 'Practical AI features that help make products and everyday work more capable.', tags: ['AI integration', 'Automation'] },
]
const steps = ['Discovery', 'Planning', 'Design', 'Development', 'Testing', 'Deployment']
const currentYear = new Date().getFullYear()

function Arrow({ diagonal = false }) { return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [messageDraft, setMessageDraft] = useState('')
  const [copied, setCopied] = useState(false)
  const [applicationDraft, setApplicationDraft] = useState('')

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', update, { passive: true })
    const targets = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    targets.forEach((target) => observer.observe(target))
    return () => { window.removeEventListener('scroll', update); observer.disconnect() }
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const submit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const body = [`Name: ${form.get('name')}`, `Email: ${form.get('email')}`, `Service: ${form.get('service')}`, '', 'Project details:', form.get('details')].join('\n')
    setMessageDraft(body)
    setCopied(false)
  }
  const copyMessage = async () => {
    try { await navigator.clipboard.writeText(messageDraft); setCopied(true) }
    catch { setCopied(false) }
  }
  const submitApplication = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = `Job application — ${form.get('role')}`
    const body = [`Name: ${form.get('applicantName')}`, `Email: ${form.get('applicantEmail')}`, `Phone: ${form.get('phone') || 'Not provided'}`, `Role: ${form.get('role')}`, '', 'Experience / introduction:', form.get('experience'), '', `Portfolio / LinkedIn: ${form.get('portfolio') || 'Not provided'}`, '', 'Please attach your CV or resume before sending.'].join('\n')
    setApplicationDraft(`mailto:megasoftwarecompanytz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
  }

  return (
    <main>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="brand" onClick={closeMenu} aria-label="MegaSoftware home">
          <span className="brand-mark">M<span>.</span></span><span className="brand-name">MEGA<span>SOFTWARE</span></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i></i><i></i></button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {[['Home', '#home'], ['Services', '#services'], ['Projects', '#projects'], ['About', '#about'], ['Careers', '#careers'], ['Contact', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Let’s talk <Arrow diagonal /></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-noise"></div><div className="hero-glow glow-one"></div><div className="hero-glow glow-two"></div>
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot"></span> DIGITAL INNOVATION · TANZANIA</p>
          <h1><span>Building digital</span><span>solutions for a</span><span className="gradient-text">smarter future<span className="period">.</span></span></h1>
          <p className="hero-description">We turn ambitious ideas into thoughtful digital products — from websites and mobile apps to custom software and AI solutions.</p>
          <div className="hero-actions"><a className="button button-primary" href="#services">Explore our services <Arrow /></a><a className="button button-quiet" href="#contact">Discuss a project <Arrow diagonal /></a></div>
          <div className="hero-proof"><div className="proof-avatars"><span>M</span><span>S</span><span>+</span></div><p>Local perspective.<br/><b>Ideas without borders.</b></p><span className="proof-line"></span><span className="tz-label">DAR ES SALAAM · TZ</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract glowing digital sculpture representing connected technology" role="img">
          <div className="art-halo halo-back"></div><div className="art-orbit orbit-a"></div><div className="art-orbit orbit-b"></div>
          <div className="art-platform platform-back"></div><div className="art-platform platform-mid"></div><div className="art-platform platform-front"><span></span></div>
          <div className="crystal crystal-main"><i></i></div><div className="crystal crystal-tall"><i></i></div><div className="crystal crystal-side"><i></i></div><div className="crystal crystal-mini"><i></i></div>
          <div className="art-node node-a"></div><div className="art-node node-b"></div><div className="art-node node-c"></div>
          <div className="art-label label-a"><span>01 / WEB</span><b>Digital experiences</b></div><div className="art-label label-b"><span>04 / AI</span><b>Intelligent systems</b></div>
          <div className="art-caption">IDEAS, ENGINEERED <span>●</span> 06°48′ S 39°17′ E</div>
        </div>
        <a className="scroll-cue" href="#services"><span></span> SCROLL TO EXPLORE</a><div className="hero-index">01 <i></i> 05</div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="section-heading reveal"><div><p className="eyebrow"><span className="eyebrow-dot"></span> WHAT WE DO</p><h2>Technology that<br/><span className="muted-heading">moves you forward.</span></h2></div><p className="section-intro">We bring design thinking and solid engineering together to make digital products people want to use.</p></div>
        <div className="services-grid">{services.map((service, index) => <article className="service-card reveal" style={{ '--delay': `${index * 100}ms` }} key={service.n}><div className="card-top"><span className="card-number">{service.n} / 04</span><span className="service-icon">{service.icon}</span></div><h3>{service.name}</h3><p>{service.text}</p><div className="card-bottom"><div>{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#contact" aria-label={`Discuss ${service.name}`}><Arrow diagonal /></a></div></article>)}</div>
        <div className="services-foot reveal"><span>ONE TEAM. FROM FIRST SKETCH TO LAUNCH.</span><span className="foot-rule"></span><a href="#contact">Tell us what you’re building <Arrow /></a></div>
      </section>

      <section className="work-section section-pad" id="projects">
        <div className="work-top reveal"><div><p className="eyebrow"><span className="eyebrow-dot"></span> SELECTED WORK</p><h2>Made for what’s<br/><span className="muted-heading">coming next.</span></h2></div><p className="section-intro">Good work starts with a real challenge. We partner closely with teams to shape ideas into useful digital products.</p></div>
        <a href="#contact" className="work-card reveal"><div className="work-visual"><div className="work-light"></div><div className="work-window"><div className="window-bar"><i></i><i></i><i></i><span>your-next-big-idea.app</span></div><div className="window-content"><div className="window-copy"><span>MADE WITH INTENTION</span><b>Your next big<br/>idea starts here.</b><i></i></div><div className="window-orb"><div></div><span>BUILD · TEST · GROW</span></div></div></div><span className="visual-index">CONCEPT / 001</span></div><div className="work-meta"><div><span className="eyebrow">A COLLABORATIVE PROCESS</span><h3>Let’s make something meaningful.</h3><p>Every project is different. Yours should be, too.</p></div><span className="work-arrow"><Arrow diagonal /></span></div></a>
        <p className="work-note reveal">We’re building our project portfolio. <a href="#contact">Ask us about what we’re working on <Arrow diagonal /></a></p>
      </section>

      <section className="about-section section-pad" id="about"><div className="about-orb"></div><div className="about-copy reveal"><p className="eyebrow"><span className="eyebrow-dot"></span> A LITTLE ABOUT US</p><h2>Big ideas.<br/><span className="gradient-text">Grounded in</span><br/>good work.</h2><p className="about-body">MegaSoftware Company Limited is a Tanzania-based technology company building digital solutions for a smarter future. We bring care, curiosity, and clear thinking to every challenge we take on.</p><a className="button button-outline" href="#leadership">Meet our founder <Arrow diagonal /></a></div><div className="about-side reveal"><div className="about-graphic"><div className="about-ring ring-one"></div><div className="about-ring ring-two"></div><div className="about-core">M<span>.</span></div><span className="orbit-word word-one">DESIGN</span><span className="orbit-word word-two">ENGINEERING</span><span className="orbit-word word-three">CURIOSITY</span></div><div className="about-note"><span>BUILT WITH PURPOSE</span><p>Thoughtful by design.<br/>Reliable by nature.</p></div></div></section>

      <section className="leadership-section section-pad" id="leadership"><div className="leader-card reveal"><div className="leader-photo-wrap"><img className="leader-photo" src="/images/adam.webp" alt="Adam Kayange, Founder and CEO of MegaSoftware Company Limited"/><span className="leader-photo-index">MEGASOFTWARE / LEADERSHIP</span></div><div className="leader-copy"><p className="eyebrow"><span className="eyebrow-dot"></span> THE PERSON BEHIND THE VISION</p><h2>Adam<br/><span className="gradient-text">Kayange.</span></h2><p className="leader-role">Founder &amp; Chief Executive Officer</p><p className="leader-bio">Building digital solutions for a smarter future, with a focus on thoughtful technology and meaningful progress.</p><a href="https://www.instagram.com/megasoftwaretz/" target="_blank" rel="noreferrer" className="button button-outline">Connect with MegaSoftware <Arrow diagonal /></a></div></div></section>

      <section className="careers-section section-pad" id="careers"><div className="careers-intro reveal"><p className="eyebrow"><span className="eyebrow-dot"></span> CAREERS AT MEGASOFTWARE</p><h2>Good people.<br/><span className="muted-heading">Big possibilities.</span></h2><p>Interested in working with us? Tell us about yourself and the kind of role you’re looking for.</p><a className="careers-email" href="mailto:megasoftwarecompanytz@gmail.com?subject=Careers%20at%20MegaSoftware">Email your application <Arrow diagonal /></a></div><form className="contact-form careers-form reveal" onSubmit={submitApplication}><div className="form-heading"><span>INTRODUCE YOURSELF</span><span>APPLICATIONS</span></div><label>Full name<input name="applicantName" autoComplete="name" required placeholder="Your name" /></label><label>Email address<input name="applicantEmail" type="email" autoComplete="email" required placeholder="you@example.com" /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Optional" /></label><label>Role you’re interested in<input name="role" required placeholder="e.g. Frontend Developer" /></label><label>Experience or a short introduction<textarea name="experience" required rows="3" placeholder="Tell us a little about your skills and experience…" /></label><label>Portfolio or LinkedIn link<input name="portfolio" type="url" placeholder="Optional link" /></label><button className="button button-primary form-submit" type="submit">Prepare application <Arrow diagonal /></button>{applicationDraft && <p className="form-feedback" role="status">Your application draft is ready. Add your CV or resume as an attachment, then <a href={applicationDraft}>open it in your email app <Arrow diagonal /></a>.</p>}<p className="form-caption">Your email app will open with these details addressed to MegaSoftware. Attach your CV before sending.</p></form></section>

      <section className="process-section section-pad"><div className="process-head reveal"><div><p className="eyebrow"><span className="eyebrow-dot"></span> HOW WE WORK</p><h2>Clear steps.<br/><span className="muted-heading">Thoughtful outcomes.</span></h2></div><p className="section-intro">A collaborative process keeps the goal in sight and the details on track.</p></div><div className="process-list">{steps.map((step, index) => <div className="process-step reveal" style={{ '--delay': `${index * 75}ms` }} key={step}><span className="step-n">0{index + 1}</span><span className="step-name">{step}</span><span className="step-symbol">{index === steps.length - 1 ? '↗' : '＋'}</span></div>)}</div></section>

      <section className="contact-section section-pad" id="contact"><div className="contact-glow"></div><div className="contact-copy reveal"><p className="eyebrow"><span className="eyebrow-dot"></span> YOUR NEXT CHAPTER</p><h2>Have a good<br/>idea<span className="gradient-text">?</span><br/><span className="muted-heading">Let’s talk.</span></h2><p>Tell us what you’re imagining. We’d love to hear about it.</p><a className="contact-mail" href="mailto:megasoftwarecompanytz@gmail.com">megasoftwarecompanytz@gmail.com <Arrow diagonal /></a><a className="contact-mail" href="tel:+255629095954">+255 629 095 954 <Arrow diagonal /></a><a className="social-link" href="https://www.instagram.com/megasoftwaretz/" target="_blank" rel="noreferrer">INSTAGRAM <Arrow diagonal /></a></div><form className="contact-form reveal" onSubmit={submit}><div className="form-heading"><span>START A CONVERSATION</span><span>WE’LL TAKE IT FROM HERE.</span></div><label>Your name<input name="name" autoComplete="name" placeholder="How should we call you?" required /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label><label>What are you looking to build?<select name="service" defaultValue="" required><option value="" disabled>Choose a service</option><option>Web Development</option><option>Mobile App Development</option><option>Custom Software</option><option>AI Solutions</option><option>Something else</option></select></label><label>Tell us a little about it<textarea name="details" placeholder="A few details about your idea…" rows="3" required></textarea></label><button className="button button-primary form-submit" type="submit">Prepare message <Arrow diagonal /></button>{messageDraft && <div className="form-feedback" role="status"><p>Your message is ready. {copied ? 'Copied to clipboard.' : ''}</p><pre>{messageDraft}</pre><button type="button" className="copy-message" onClick={copyMessage}>{copied ? 'Copied' : 'Copy message'}</button><a href="mailto:megasoftwarecompanytz@gmail.com?subject=Project%20enquiry">Email MegaSoftware directly <Arrow diagonal /></a></div>}<p className="form-caption">This page prepares your message. It doesn’t send it automatically.</p></form></section>

      <footer className="site-footer" id="about-footer"><a href="#home" className="brand"><span className="brand-mark">M<span>.</span></span><span className="brand-name">MEGA<span>SOFTWARE</span></span></a><p>Building digital solutions for a smarter future.</p><div className="footer-right"><a href="mailto:megasoftwarecompanytz@gmail.com">megasoftwarecompanytz@gmail.com</a><a href="tel:+255629095954">+255 629 095 954</a><span>MADE IN TANZANIA <b>✳</b></span><span>© {currentYear} MEGASOFTWARE COMPANY LIMITED</span></div><a href="#home" className="back-top" aria-label="Back to top">↑</a></footer>
    </main>
  )
}

export default App
