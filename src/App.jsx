import { useEffect, useState } from 'react'
import './App.css'
import './Leadership.css'
import './Theme.css'
import './Responsive.css'

const serviceCopy = {
  en: [
    { icon: '⌘', name: 'Web Development', text: 'Fast, thoughtful websites and web applications built around the way your business works.', tags: ['Web apps', 'E-commerce'] },
    { icon: '▣', name: 'Mobile Applications', text: 'Useful mobile experiences designed to feel natural on the devices people use every day.', tags: ['iOS & Android', 'Product design'] },
    { icon: '⌘', name: 'Custom Software', text: 'Purpose-built software that brings your workflows, information and teams together.', tags: ['Business tools', 'Integrations'] },
    { icon: '✳', name: 'AI Solutions', text: 'Practical AI features that help make products and everyday work more capable.', tags: ['AI integration', 'Automation'] },
    { icon: '◈', name: 'Game Development', text: 'Interactive 3D games and immersive worlds, created with Unreal Engine, Blender and game programming in C++ and C#.', tags: ['Unreal Engine', 'Blender', 'C++ / C#'] },
  ],
  sw: [
    { icon: '⌘', name: 'Utengenezaji wa Tovuti', text: 'Tovuti na mifumo ya mtandaoni yenye kasi, iliyoundwa kulingana na mahitaji ya biashara yako.', tags: ['Web apps', 'E-commerce'] },
    { icon: '▣', name: 'Programu za Simu', text: 'Programu za simu zilizo rahisi kutumia kwenye vifaa ambavyo watu hutumia kila siku.', tags: ['iOS na Android', 'Ubunifu'] },
    { icon: '⌘', name: 'Programu Maalum', text: 'Programu zinazounganisha mifumo ya kazi, taarifa na timu kulingana na mahitaji yako.', tags: ['Zana za biashara', 'Miunganisho'] },
    { icon: '✳', name: 'Suluhisho za AI', text: 'Vipengele vya akili mnemba vinavyoongeza uwezo wa bidhaa na kazi za kila siku.', tags: ['AI', 'Uendeshaji'] },
    { icon: '◈', name: 'Utengenezaji wa Game', text: 'Game za 3D na ulimwengu shirikishi kwa Unreal Engine, Blender na lugha za C++ na C#.', tags: ['Unreal Engine', 'Blender', 'C++ / C#'] },
  ],
}
const pageCopy = {
  en: {
    nav: ['Home', 'Services', 'Projects', 'About', 'Careers', 'Contact'], talk: 'Let’s talk',
    heroEyebrow: 'DIGITAL INNOVATION · TANZANIA', heroTitle: ['Building digital', 'solutions for a', 'smarter future'], heroDescription: 'We turn ambitious ideas into thoughtful digital products — from websites and mobile apps to custom software, AI and 3D games.', explore: 'Explore our services', discuss: 'Discuss a project', local: 'Local perspective.', global: 'Ideas without borders.', scroll: 'SCROLL TO EXPLORE',
    servicesEyebrow: 'WHAT WE DO', servicesTitle: ['Technology that', 'moves you forward.'], servicesIntro: 'We bring design thinking and solid engineering together to make digital products and games people want to use.', servicesFoot: 'ONE TEAM. FROM FIRST SKETCH TO LAUNCH.', servicesLink: 'Tell us what you’re building', discussService: 'Discuss',
    workEyebrow: 'SELECTED WORK', workTitle: ['Made for what’s', 'coming next.'], workIntro: 'Good work starts with a real challenge. We partner closely with teams to shape ideas into useful digital products.', workConcept: 'MADE WITH INTENTION', workIdea: 'Your next big idea starts here.', workCollab: 'A COLLABORATIVE PROCESS', workCardTitle: 'Let’s make something meaningful.', workCardText: 'Every project is different. Yours should be, too.', workNote: 'We’re building our project portfolio.', workLink: 'Ask us about what we’re working on',
    aboutEyebrow: 'A LITTLE ABOUT US', aboutTitle: ['Big ideas.', 'Grounded in', 'good work.'], aboutText: 'MegaSoftware Company Limited is a Tanzania-based technology company building digital solutions for a smarter future. We bring care, curiosity, and clear thinking to every challenge we take on.', founderLink: 'Meet our founder', leadershipEyebrow: 'THE PERSON BEHIND THE VISION', leaderRole: 'Founder & Chief Executive Officer', leaderBio: 'Building digital solutions for a smarter future, with a focus on thoughtful technology and meaningful progress.', leaderLink: 'Connect with MegaSoftware',
    careersEyebrow: 'CAREERS AT MEGASOFTWARE', careersTitle: ['Good people.', 'Big possibilities.'], careersText: 'Interested in working with us? Tell us about yourself and the kind of role you’re looking for.', careerLink: 'Email your application', applicationHeading: 'INTRODUCE YOURSELF', applications: 'APPLICATIONS', fullName: 'Full name', email: 'Email address', phone: 'Phone number', optional: 'Optional', role: 'Role you’re interested in', rolePlaceholder: 'e.g. Frontend Developer', experience: 'Experience or a short introduction', experiencePlaceholder: 'Tell us about your skills and experience…', github: 'GitHub profile link', portfolio: 'Portfolio or LinkedIn link', prepareApplication: 'Prepare application', applicationReady: 'Your application draft is ready. Add your CV or resume, then', openEmail: 'open it in your email app', applicationCaption: 'Your email app opens with these details addressed to MegaSoftware. Attach your CV before sending.',
    processEyebrow: 'HOW WE WORK', processTitle: ['Clear steps.', 'Thoughtful outcomes.'], processIntro: 'A collaborative process keeps the goal in sight and the details on track.', steps: ['Discovery', 'Planning', 'Design', 'Development', 'Testing', 'Deployment'],
    contactEyebrow: 'YOUR NEXT CHAPTER', contactTitle: ['Have a good', 'idea?', 'Let’s talk.'], contactText: 'Tell us what you’re imagining. We’d love to hear about it.', contactFormHeading: 'START A CONVERSATION', contactFormSub: 'WE’LL TAKE IT FROM HERE.', namePrompt: 'Your name', namePlaceholder: 'How should we call you?', servicePrompt: 'What are you looking to build?', chooseService: 'Choose a service', detailsPrompt: 'Tell us a little about it', detailsPlaceholder: 'A few details about your idea…', prepareMessage: 'Prepare message', messageReady: 'Your message is ready.', copied: 'Copied to clipboard.', copyMessage: 'Copy message', directEmail: 'Email MegaSoftware directly', contactCaption: 'This page prepares your message. It doesn’t send it automatically.',
    footerTagline: 'Building digital solutions for a smarter future.', madeIn: 'MADE IN TANZANIA',
  },
  sw: {
    nav: ['Mwanzo', 'Huduma', 'Miradi', 'Kuhusu', 'Ajira', 'Mawasiliano'], talk: 'Tuzungumze',
    heroEyebrow: 'UBUNIFU WA KIDIJITALI · TANZANIA', heroTitle: ['Tunajenga suluhisho', 'za kidijitali kwa', 'maisha bora zaidi'], heroDescription: 'Tunabadilisha mawazo makubwa kuwa bidhaa za kidijitali — tovuti, programu za simu, mifumo maalum, AI na game za 3D.', explore: 'Ona huduma zetu', discuss: 'Jadili mradi', local: 'Tunaielewa Tanzania.', global: 'Mawazo yanafika mbali.', scroll: 'SHUKA UONE ZAIDI',
    servicesEyebrow: 'HUDUMA ZETU', servicesTitle: ['Teknolojia', 'inayokupeleka mbele.'], servicesIntro: 'Tunaunganisha ubunifu na uhandisi imara kujenga bidhaa za kidijitali na game ambazo watu wanapenda kutumia.', servicesFoot: 'TIMU MOJA. KUANZIA WAZO HADI UZINDUZI.', servicesLink: 'Tuambie unachotaka kujenga', discussService: 'Jadili',
    workEyebrow: 'KAZI ZETU', workTitle: ['Tayari kwa', 'hatua inayofuata.'], workIntro: 'Kazi nzuri huanza na changamoto halisi. Tunashirikiana na timu kubadilisha mawazo kuwa bidhaa za kidijitali.', workConcept: 'IMEFANYWA KWA UMAKINI', workIdea: 'Wazo lako kubwa linaanzia hapa.', workCollab: 'MCHAKATO WA PAMOJA', workCardTitle: 'Tujenge kitu chenye maana.', workCardText: 'Kila mradi ni tofauti. Wako pia uwe wa kipekee.', workNote: 'Tunaendelea kujenga jalada la miradi yetu.', workLink: 'Tuulize kuhusu kazi tunazofanya',
    aboutEyebrow: 'KUHUSU SISI', aboutTitle: ['Mawazo makubwa.', 'Yaliyojengwa kwa', 'kazi bora.'], aboutText: 'MegaSoftware Company Limited ni kampuni ya teknolojia kutoka Tanzania inayojenga suluhisho za kidijitali kwa maisha bora zaidi. Tunafanya kazi kwa umakini, udadisi na mawazo yaliyo wazi.', founderLink: 'Kutana na mwanzilishi', leadershipEyebrow: 'MWANZILISHI WA MAONO', leaderRole: 'Mwanzilishi na Afisa Mkuu Mtendaji (CEO)', leaderBio: 'Anajenga suluhisho za kidijitali kwa mustakabali bora, kwa kuzingatia teknolojia yenye manufaa na maendeleo.', leaderLink: 'Wasiliana na MegaSoftware',
    careersEyebrow: 'AJIRA MEGASOFTWARE', careersTitle: ['Watu wazuri.', 'Fursa kubwa.'], careersText: 'Ungependa kufanya kazi nasi? Tuambie kuhusu wewe na nafasi unayotafuta.', careerLink: 'Tuma ombi kwa email', applicationHeading: 'JITAMBULISHE', applications: 'MAOMBI YA AJIRA', fullName: 'Jina kamili', email: 'Anuani ya email', phone: 'Namba ya simu', optional: 'Si lazima', role: 'Nafasi unayoomba', rolePlaceholder: 'mf. Frontend Developer', experience: 'Uzoefu au utambulisho mfupi', experiencePlaceholder: 'Tuambie kuhusu ujuzi na uzoefu wako…', github: 'Kiungo cha wasifu wako GitHub', portfolio: 'Kiungo cha Portfolio au LinkedIn', prepareApplication: 'Andaa ombi', applicationReady: 'Ombi lako la kazi limeandaliwa. Ambatisha CV yako, kisha', openEmail: 'lifungue kwenye email', applicationCaption: 'Email itafunguka ikiwa na maelezo haya. Ambatisha CV kabla ya kutuma.',
    processEyebrow: 'JINSI TUNAVYOFANYA KAZI', processTitle: ['Hatua zilizo wazi.', 'Matokeo yenye maana.'], processIntro: 'Tunashirikiana hatua kwa hatua ili kufikia lengo na kuzingatia maelezo.', steps: ['Kuelewa hitaji', 'Kupanga', 'Kubuni', 'Kutengeneza', 'Kupima', 'Kuzindua'],
    contactEyebrow: 'HATUA YAKO INAYOFUATA', contactTitle: ['Una wazo', 'zuri?', 'Tuzungumze.'], contactText: 'Tuambie unachofikiria. Tungependa kusikia kutoka kwako.', contactFormHeading: 'ANZISHA MAZUNGUMZO', contactFormSub: 'TUTAENDELEA PAMOJA.', namePrompt: 'Jina lako', namePlaceholder: 'Tukuitaje?', servicePrompt: 'Unataka tujenge nini?', chooseService: 'Chagua huduma', detailsPrompt: 'Tupe maelezo mafupi', detailsPlaceholder: 'Maelezo machache kuhusu wazo lako…', prepareMessage: 'Andaa ujumbe', messageReady: 'Ujumbe wako uko tayari.', copied: 'Umenakiliwa.', copyMessage: 'Nakili ujumbe', directEmail: 'Tuma email moja kwa moja', contactCaption: 'Ujumbe huu unaandaliwa hapa. Hautumwi moja kwa moja.',
    footerTagline: 'Tunajenga suluhisho za kidijitali kwa maisha bora zaidi.', madeIn: 'IMETENGENEZWA TANZANIA',
  },
}
const currentYear = new Date().getFullYear()

function Arrow({ diagonal = false }) { return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [messageDraft, setMessageDraft] = useState('')
  const [copied, setCopied] = useState(false)
  const [applicationDraft, setApplicationDraft] = useState('')
  const [theme, setTheme] = useState(() => localStorage.getItem('megasoftware-theme') || 'dark')
  const [language, setLanguage] = useState(() => localStorage.getItem('megasoftware-language') || 'en')
  const copy = pageCopy[language]
  const services = serviceCopy[language]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('megasoftware-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('megasoftware-language', language)
  }, [language])

  useEffect(() => {
    const targets = document.querySelectorAll('.reveal')
    const revealVisible = () => targets.forEach((target) => {
      const bounds = target.getBoundingClientRect()
      if (bounds.top < window.innerHeight - 24 && bounds.bottom > 0) target.classList.add('is-visible')
    })
    const update = () => {
      setScrolled(window.scrollY > 30)
      revealVisible()
    }
    window.addEventListener('scroll', update, { passive: true })
    let observer
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
      }), { threshold: 0.12 })
      targets.forEach((target) => observer.observe(target))
    }
    requestAnimationFrame(revealVisible)
    return () => { window.removeEventListener('scroll', update); observer?.disconnect() }
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const submit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const fields = language === 'sw'
      ? [`Jina: ${form.get('name')}`, `Email: ${form.get('email')}`, `Huduma: ${form.get('service')}`, '', 'Maelezo ya mradi:', form.get('details')]
      : [`Name: ${form.get('name')}`, `Email: ${form.get('email')}`, `Service: ${form.get('service')}`, '', 'Project details:', form.get('details')]
    const body = fields.join('\n')
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
    const subject = language === 'sw' ? `Ombi la ajira — ${form.get('role')}` : `Job application — ${form.get('role')}`
    const body = language === 'sw'
      ? [`Jina: ${form.get('applicantName')}`, `Email: ${form.get('applicantEmail')}`, `Simu: ${form.get('phone') || 'Haijawekwa'}`, `Nafasi: ${form.get('role')}`, '', 'Uzoefu / utambulisho:', form.get('experience'), '', `GitHub: ${form.get('github') || 'Haijawekwa'}`, `Portfolio / LinkedIn: ${form.get('portfolio') || 'Haijawekwa'}`, '', 'Tafadhali ambatisha CV kabla ya kutuma.'].join('\n')
      : [`Name: ${form.get('applicantName')}`, `Email: ${form.get('applicantEmail')}`, `Phone: ${form.get('phone') || 'Not provided'}`, `Role: ${form.get('role')}`, '', 'Experience / introduction:', form.get('experience'), '', `GitHub: ${form.get('github') || 'Not provided'}`, `Portfolio / LinkedIn: ${form.get('portfolio') || 'Not provided'}`, '', 'Please attach your CV or resume before sending.'].join('\n')
    setApplicationDraft(`mailto:megasoftwarecompanytz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
  }

  return (
    <main className={`site-shell theme-${theme}`}>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="brand" onClick={closeMenu} aria-label="MegaSoftware home">
          <span className="brand-mark">M<span>.</span></span><span className="brand-name">MEGA<span>SOFTWARE</span></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i></i><i></i></button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {copy.nav.map((label, index) => <a key={label} href={['#home', '#services', '#projects', '#about', '#careers', '#contact'][index]} onClick={closeMenu}>{label}</a>)}
        </nav>
        <div className="header-tools"><button className="preference-toggle theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>{theme === 'dark' ? '☼' : '☾'}</button><button className="preference-toggle language-toggle" onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')} aria-label={language === 'en' ? 'Badili lugha iwe Kiswahili' : 'Switch language to English'}>{language === 'en' ? 'EN' : 'SW'}</button><a className="header-cta" href="#contact">{copy.talk} <Arrow diagonal /></a></div>
      </header>

      <section className="hero" id="home">
        <div className="hero-noise"></div><div className="hero-glow glow-one"></div><div className="hero-glow glow-two"></div>
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot"></span> {copy.heroEyebrow}</p>
          <h1><span>{copy.heroTitle[0]}</span><span>{copy.heroTitle[1]}</span><span className="gradient-text">{copy.heroTitle[2]}<span className="period">.</span></span></h1>
          <p className="hero-description">{copy.heroDescription}</p>
          <div className="hero-actions"><a className="button button-primary" href="#services">{copy.explore} <Arrow /></a><a className="button button-quiet" href="#contact">{copy.discuss} <Arrow diagonal /></a></div>
          <div className="hero-proof"><div className="proof-avatars"><span>M</span><span>S</span><span>+</span></div><p>{copy.local}<br/><b>{copy.global}</b></p><span className="proof-line"></span><span className="tz-label">DAR ES SALAAM · TZ</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract glowing digital sculpture representing connected technology" role="img">
          <div className="art-halo halo-back"></div><div className="art-orbit orbit-a"></div><div className="art-orbit orbit-b"></div>
          <div className="art-platform platform-back"></div><div className="art-platform platform-mid"></div><div className="art-platform platform-front"><span></span></div>
          <div className="crystal crystal-main"><i></i></div><div className="crystal crystal-tall"><i></i></div><div className="crystal crystal-side"><i></i></div><div className="crystal crystal-mini"><i></i></div>
          <div className="art-node node-a"></div><div className="art-node node-b"></div><div className="art-node node-c"></div>
          <div className="art-label label-a"><span>01 / WEB</span><b>Digital experiences</b></div><div className="art-label label-b"><span>04 / AI</span><b>Intelligent systems</b></div>
          <div className="art-caption">IDEAS, ENGINEERED <span>●</span> 06°48′ S 39°17′ E</div>
        </div>
        <a className="scroll-cue" href="#services"><span></span> {copy.scroll}</a><div className="hero-index">01 <i></i> 06</div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="section-heading reveal"><div><p className="eyebrow"><span className="eyebrow-dot"></span> {copy.servicesEyebrow}</p><h2>{copy.servicesTitle[0]}<br/><span className="muted-heading">{copy.servicesTitle[1]}</span></h2></div><p className="section-intro">{copy.servicesIntro}</p></div>
        <div className="services-grid">{services.map((service, index) => <article className="service-card reveal" style={{ '--delay': `${index * 100}ms` }} key={service.name}><div className="card-top"><span className="card-number">0{index + 1} / 05</span><span className="service-icon">{service.icon}</span></div><h3>{service.name}</h3><p>{service.text}</p><div className="card-bottom"><div>{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#contact" aria-label={`${copy.discussService} ${service.name}`}><Arrow diagonal /></a></div></article>)}</div>
        <div className="services-foot reveal"><span>{copy.servicesFoot}</span><span className="foot-rule"></span><a href="#contact">{copy.servicesLink} <Arrow /></a></div>
      </section>

      <section className="work-section section-pad" id="projects">
        <div className="work-top reveal"><div><p className="eyebrow"><span className="eyebrow-dot"></span> {copy.workEyebrow}</p><h2>{copy.workTitle[0]}<br/><span className="muted-heading">{copy.workTitle[1]}</span></h2></div><p className="section-intro">{copy.workIntro}</p></div>
        <a href="#contact" className="work-card reveal"><div className="work-visual"><div className="work-light"></div><div className="work-window"><div className="window-bar"><i></i><i></i><i></i><span>your-next-big-idea.app</span></div><div className="window-content"><div className="window-copy"><span>{copy.workConcept}</span><b>{copy.workIdea}</b><i></i></div><div className="window-orb"><div></div><span>BUILD · TEST · GROW</span></div></div></div><span className="visual-index">CONCEPT / 001</span></div><div className="work-meta"><div><span className="eyebrow">{copy.workCollab}</span><h3>{copy.workCardTitle}</h3><p>{copy.workCardText}</p></div><span className="work-arrow"><Arrow diagonal /></span></div></a>
        <p className="work-note reveal">{copy.workNote} <a href="#contact">{copy.workLink} <Arrow diagonal /></a></p>
      </section>

      <section className="about-section section-pad" id="about"><div className="about-orb"></div><div className="about-copy reveal"><p className="eyebrow"><span className="eyebrow-dot"></span> {copy.aboutEyebrow}</p><h2>{copy.aboutTitle[0]}<br/><span className="gradient-text">{copy.aboutTitle[1]}</span><br/>{copy.aboutTitle[2]}</h2><p className="about-body">{copy.aboutText}</p><a className="button button-outline" href="#leadership">{copy.founderLink} <Arrow diagonal /></a></div><div className="about-side reveal"><div className="about-graphic"><div className="about-ring ring-one"></div><div className="about-ring ring-two"></div><div className="about-core">M<span>.</span></div><span className="orbit-word word-one">DESIGN</span><span className="orbit-word word-two">ENGINEERING</span><span className="orbit-word word-three">CURIOSITY</span></div><div className="about-note"><span>BUILT WITH PURPOSE</span><p>Thoughtful by design.<br/>Reliable by nature.</p></div></div></section>

      <section className="leadership-section section-pad" id="leadership"><div className="leader-card reveal"><div className="leader-photo-wrap"><img className="leader-photo" src="/images/adam.webp" alt={language === 'en' ? 'Adam Kayange, Founder and CEO of MegaSoftware Company Limited' : 'Adam Kayange, Mwanzilishi na CEO wa MegaSoftware Company Limited'}/><span className="leader-photo-index">MEGASOFTWARE / LEADERSHIP</span></div><div className="leader-copy"><p className="eyebrow"><span className="eyebrow-dot"></span> {copy.leadershipEyebrow}</p><h2>Adam<br/><span className="gradient-text">Kayange.</span></h2><p className="leader-role">{copy.leaderRole}</p><p className="leader-bio">{copy.leaderBio}</p><a href="https://www.instagram.com/megasoftwaretz/" target="_blank" rel="noreferrer" className="button button-outline">{copy.leaderLink} <Arrow diagonal /></a></div></div></section>

      <section className="careers-section section-pad" id="careers"><div className="careers-intro reveal"><p className="eyebrow"><span className="eyebrow-dot"></span> {copy.careersEyebrow}</p><h2>{copy.careersTitle[0]}<br/><span className="muted-heading">{copy.careersTitle[1]}</span></h2><p>{copy.careersText}</p><a className="careers-email" href="mailto:megasoftwarecompanytz@gmail.com?subject=Careers%20at%20MegaSoftware">{copy.careerLink} <Arrow diagonal /></a></div><form className="contact-form careers-form reveal" onSubmit={submitApplication}><div className="form-heading"><span>{copy.applicationHeading}</span><span>{copy.applications}</span></div><label>{copy.fullName}<input name="applicantName" autoComplete="name" required placeholder={copy.namePrompt} /></label><label>{copy.email}<input name="applicantEmail" type="email" autoComplete="email" required placeholder="you@example.com" /></label><label>{copy.phone}<input name="phone" type="tel" autoComplete="tel" placeholder={copy.optional} /></label><label>{copy.role}<input name="role" required placeholder={copy.rolePlaceholder} /></label><label>{copy.experience}<textarea name="experience" required rows="3" placeholder={copy.experiencePlaceholder} /></label><label>{copy.github}<input name="github" type="url" placeholder="https://github.com/username" /></label><label>{copy.portfolio}<input name="portfolio" type="url" placeholder="https://" /></label><button className="button button-primary form-submit" type="submit">{copy.prepareApplication} <Arrow diagonal /></button>{applicationDraft && <p className="form-feedback" role="status">{copy.applicationReady} <a href={applicationDraft}>{copy.openEmail} <Arrow diagonal /></a>.</p>}<p className="form-caption">{copy.applicationCaption}</p></form></section>

      <section className="process-section section-pad"><div className="process-head reveal"><div><p className="eyebrow"><span className="eyebrow-dot"></span> {copy.processEyebrow}</p><h2>{copy.processTitle[0]}<br/><span className="muted-heading">{copy.processTitle[1]}</span></h2></div><p className="section-intro">{copy.processIntro}</p></div><div className="process-list">{copy.steps.map((step, index) => <div className="process-step reveal" style={{ '--delay': `${index * 75}ms` }} key={step}><span className="step-n">0{index + 1}</span><span className="step-name">{step}</span><span className="step-symbol">{index === copy.steps.length - 1 ? '↗' : '＋'}</span></div>)}</div></section>

      <section className="contact-section section-pad" id="contact"><div className="contact-glow"></div><div className="contact-copy reveal"><p className="eyebrow"><span className="eyebrow-dot"></span> {copy.contactEyebrow}</p><h2>{copy.contactTitle[0]}<br/>{copy.contactTitle[1]}<br/><span className="muted-heading">{copy.contactTitle[2]}</span></h2><p>{copy.contactText}</p><a className="contact-mail" href="mailto:megasoftwarecompanytz@gmail.com">megasoftwarecompanytz@gmail.com <Arrow diagonal /></a><a className="contact-mail" href="tel:+255629095954">+255 629 095 954 <Arrow diagonal /></a><a className="social-link" href="https://www.instagram.com/megasoftwaretz/" target="_blank" rel="noreferrer">INSTAGRAM <Arrow diagonal /></a><a className="social-link" href="https://www.youtube.com/@MegaSoftwareTz" target="_blank" rel="noreferrer">YOUTUBE <Arrow diagonal /></a></div><form className="contact-form reveal" onSubmit={submit}><div className="form-heading"><span>{copy.contactFormHeading}</span><span>{copy.contactFormSub}</span></div><label>{copy.namePrompt}<input name="name" autoComplete="name" placeholder={copy.namePlaceholder} required /></label><label>{copy.email}<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label><label>{copy.servicePrompt}<select name="service" defaultValue="" required><option value="" disabled>{copy.chooseService}</option>{services.map((service) => <option key={service.name}>{service.name}</option>)}</select></label><label>{copy.detailsPrompt}<textarea name="details" placeholder={copy.detailsPlaceholder} rows="3" required></textarea></label><button className="button button-primary form-submit" type="submit">{copy.prepareMessage} <Arrow diagonal /></button>{messageDraft && <div className="form-feedback" role="status"><p>{copy.messageReady} {copied ? copy.copied : ''}</p><pre>{messageDraft}</pre><button type="button" className="copy-message" onClick={copyMessage}>{copied ? copy.copied : copy.copyMessage}</button><a href="mailto:megasoftwarecompanytz@gmail.com?subject=Project%20enquiry">{copy.directEmail} <Arrow diagonal /></a></div>}<p className="form-caption">{copy.contactCaption}</p></form></section>

      <footer className="site-footer" id="about-footer"><a href="#home" className="brand"><span className="brand-mark">M<span>.</span></span><span className="brand-name">MEGA<span>SOFTWARE</span></span></a><p>{copy.footerTagline}</p><div className="footer-right"><a href="mailto:megasoftwarecompanytz@gmail.com">megasoftwarecompanytz@gmail.com</a><a href="tel:+255629095954">+255 629 095 954</a><a href="https://www.instagram.com/megasoftwaretz/" target="_blank" rel="noreferrer">INSTAGRAM</a><a href="https://www.youtube.com/@MegaSoftwareTz" target="_blank" rel="noreferrer">YOUTUBE</a><span>{copy.madeIn} <b>✳</b></span><span>© {currentYear} MEGASOFTWARE COMPANY LIMITED</span></div><a href="#home" className="back-top" aria-label="Back to top">↑</a></footer>
    </main>
  )
}

export default App
