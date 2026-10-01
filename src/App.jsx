import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Code2, Globe2, Zap, Headphones } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { value: "98%", label: "Client satisfaction" },
  { value: "150+", label: "Projects delivered" },
  { value: "50+", label: "Happy clients" },
  { value: "5+", label: "Years of experience" },
];

const services = [
  { icon: Globe2, title: "Modern websites", copy: "Clean, responsive and SEO-friendly websites." },
  { icon: Code2, title: "Web applications", copy: "Useful digital products, built around your needs." },
  { icon: Zap, title: "Performance", copy: "Faster experiences that feel effortless." },
  { icon: Headphones, title: "Ongoing support", copy: "A real team beside you after launch." },
];

function CarArtwork() {
  return (
    <div className="car-wrap" aria-label="Orange sports car" role="img">
      <img className="car-image" src="/car.png" alt="" />
      <div className="car-label"><span>ITZ / 001</span><span>BUILT TO MOVE</span></div>
    </div>
  );
}

export default function App() {
  const root = useRef(null);
  const hero = useRef(null);
  const car = useRef(null);

  useGSAP(() => {
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro.from(".eyebrow", { y: 12, opacity: 0, duration: .65 })
      .from(".headline-line", { yPercent: 115, opacity: 0, duration: .9, stagger: .12 }, "-=.25")
      .from(".hero-copy", { y: 18, opacity: 0, duration: .7 }, "-=.45")
      .from(".stat", { y: 18, opacity: 0, duration: .55, stagger: .12 }, "-=.35")
      .from(".scroll-cue", { opacity: 0, duration: .5 }, "-=.15");

    gsap.to(car.current, {
      x: () => window.innerWidth < 700 ? 45 : 155,
      y: -35,
      rotate: -2,
      scale: 1.08,
      ease: "none",
      scrollTrigger: {
        trigger: hero.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    gsap.to(".road", {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: hero.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    gsap.from(".service-card", {
      y: 28, opacity: 0, stagger: .12, duration: .7, ease: "power2.out",
      scrollTrigger: { trigger: ".services", start: "top 72%" }
    });
  }, { scope: root });

  return (
    <main ref={root}>
      <section className="hero" ref={hero}>
        <div className="ambient" />
        <header className="nav">
          <a className="brand" href="#home" aria-label="Itzfizz home">itzfizz<span>✳</span></a>
          <nav aria-label="Main navigation">
            <a className="active" href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#careers">Careers</a><a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="#contact">Build with us <ArrowUpRight size={16}/></a>
        </header>

        <div className="hero-content" id="home">
          <p className="eyebrow">IDEAS <i>/</i> CODE <i>/</i> IMPACT</p>
          <h1><span className="headline-line">WELCOME</span><span className="headline-line accent">ITZFIZZ</span></h1>
          <p className="hero-copy">We build digital experiences that help brands grow,<br className="desktop-break"/> engage and make a real impact.</p>
          <div className="stats">
            {stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
          </div>
        </div>

        <div className="landscape" aria-hidden="true">
          <div className="mountain mountain-back" />
          <div className="mountain mountain-mid" />
          <div className="mountain mountain-front" />
          <div className="horizon-glow" />
          <div className="road"><div className="road-line" /></div>
          <div className="guardrail" />
        </div>
        <div ref={car} className="moving-car"><CarArtwork /></div>
        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={17}/></div>
        <div className="hero-index"><span>01</span><span>—</span><span>THE DRIVE</span></div>
      </section>

      <section className="services" id="services">
        <div className="section-intro" id="about">
          <p className="section-kicker"><span>01</span><i /></p>
          <h2>Web development<br/><em>that drives growth.</em></h2>
          <p>We create fast, thoughtful websites and web apps that help your business stand out and move forward.</p>
          <a href="#contact" className="text-link">A little more about us <ArrowUpRight size={16}/></a>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, copy }, i) => <article className="service-card" key={title}>
            <div className="service-top"><span>0{i + 1}</span><Icon size={23} strokeWidth={1.5}/></div>
            <h3>{title}</h3><p>{copy}</p>
          </article>)}
        </div>
      </section>

      <section className="closing" id="careers">
        <div><p className="section-kicker"><span>02</span><i /></p><p className="closing-label">GOOD WORK STARTS WITH A CONVERSATION.</p><h2>Have a good one<br/>in mind<span>?</span></h2></div>
        <a href="mailto:hello@itzfizz.com" className="round-link" id="contact">Let’s talk <ArrowUpRight size={20}/></a>
      </section>
      <footer><a className="brand" href="#home">itzfizz<span>✳</span></a><span>Ideas into impact. © 2026</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}