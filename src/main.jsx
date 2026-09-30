import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, MapPin, Phone, Mail, Menu, X, ChevronRight } from 'lucide-react';
import './styles.css';

const WA = '263788432058';
const phone = '+263 78 843 2058';
const email = 'giovannimenswear01@gmail.com';

const looks = [
  { src: '/images/look-18.webp', label: 'Statement tailoring', type: 'Suiting' },
  { src: '/images/look-01.webp', label: 'Black formal look', type: 'Formalwear' },
  { src: '/images/look-03.webp', label: 'Evening black', type: 'Formalwear' },
  { src: '/images/look-05.webp', label: 'Ivory double-breasted', type: 'Tailoring' },
  { src: '/images/look-02.webp', label: 'Terracotta double-breasted', type: 'Tailoring' },
  { src: '/images/look-10.webp', label: 'Chocolate double-breasted', type: 'Tailoring' },
  { src: '/images/look-09.webp', label: 'Pinstripe tailoring', type: 'Suits' },
  { src: '/images/look-07.webp', label: 'Classic black suit', type: 'Suits' },
  { src: '/images/look-13.webp', label: 'Black statement suit', type: 'Formalwear' },
  { src: '/images/look-08.webp', label: 'Black evening set', type: 'Formalwear' },
  { src: '/images/look-12.webp', label: 'Knitwear', type: 'Seasonal' },
  { src: '/images/look-15.webp', label: 'Patterned shirt', type: 'Shirts' },
  { src: '/images/look-04.webp', label: 'Trousers', type: 'Trousers' },
  { src: '/images/look-16.webp', label: 'White trousers', type: 'Trousers' },
  { src: '/images/look-17.webp', label: 'Neutral trousers', type: 'Trousers' },
  { src: '/images/look-19.webp', label: 'Trouser selection', type: 'Trousers' },
];

const filters = ['All', 'Suits', 'Formalwear', 'Tailoring', 'Shirts', 'Trousers', 'Seasonal'];

function App() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState('All');
  const [activeLook, setActiveLook] = useState(null);
  const visible = filter === 'All' ? looks : looks.filter((item) => item.type === filter);

  useEffect(() => {
    document.body.style.overflow = activeLook ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeLook]);

  const closeMenu = () => setMenu(false);

  return (
    <div className="site-shell">
      <div className="topbar">
        <span>QUALITY IS OUR PRIORITY.</span>
        <a href={`https://wa.me/${WA}?text=Hello%20Giovanni%20Men's%20Wear`} target="_blank" rel="noreferrer">WhatsApp {phone}</a>
      </div>

      <header className="nav-wrap">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Giovanni Men's Wear home">
          <img src="/logo.png" alt="Giovanni Men's Wear" />
        </a>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">
          {menu ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menu ? 'nav open' : 'nav'}>
          <a href="#collection" onClick={closeMenu}>Collection</a>
          <a href="#about" onClick={closeMenu}>Giovanni</a>
          <a href="#stores" onClick={closeMenu}>Stores</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href={`https://wa.me/${WA}?text=Hello%20Giovanni%20Men's%20Wear`} target="_blank" rel="noreferrer">Enquire <ArrowUpRight size={16}/></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">GIOVANNI MEN'S WEAR · HARARE</p>
            <h1>Dress with<br/><em>presence.</em></h1>
            <p className="hero-text">A curated selection of men's tailoring, formalwear and occasion looks, presented by Giovanni Men's Wear.</p>
            <div className="hero-actions">
              <a className="button dark" href="#collection">Explore collection <ChevronRight size={17}/></a>
              <a className="text-link" href={`https://wa.me/${WA}?text=Hello%20Giovanni%20Men's%20Wear`} target="_blank" rel="noreferrer">Talk to Giovanni <ArrowUpRight size={16}/></a>
            </div>
            <div className="hero-note"><span className="line"></span><span>Formal. Refined. Ready.</span></div>
          </div>
          <div className="hero-image-wrap">
            <img className="hero-image" src="/images/look-18.webp" alt="Giovanni men's tailored suit" fetchPriority="high" />
            <div className="hero-card">
              <span>01</span>
              <div><strong>THE GIOVANNI LOOK</strong><small>Tailoring for the occasion</small></div>
            </div>
          </div>
        </section>

        <section className="intro-band" id="about">
          <p className="eyebrow">THE HOUSE</p>
          <div>
            <h2>Quality is<br/><em>our priority.</em></h2>
            <p>Giovanni Men's Wear brings a polished men's wardrobe to the heart of Harare — from sharp formal looks to statement tailoring and everyday pieces.</p>
          </div>
        </section>

        <section className="collection" id="collection">
          <div className="section-heading">
            <div><p className="eyebrow">SELECTED LOOKS</p><h2>The collection</h2></div>
            <p>Explore the current visual selection from Giovanni Men's Wear.</p>
          </div>
          <div className="filters">
            {filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
          <div className="look-grid">
            {visible.map((look, i) => (
              <button className={`look-card ${i === 0 ? 'featured' : ''}`} key={look.src} onClick={() => setActiveLook(look)}>
                <img src={look.src} alt={look.label} loading={i < 4 ? 'eager' : 'lazy'} />
                <span className="look-overlay"><small>{look.type}</small><strong>{look.label}</strong><ArrowUpRight size={18}/></span>
              </button>
            ))}
          </div>
        </section>

        <section className="statement">
          <div className="statement-image"><img src="/images/look-06.webp" alt="Giovanni formalwear collection" loading="lazy" /></div>
          <div className="statement-copy"><p className="eyebrow">FOR THE OCCASION</p><h2>Make the<br/><em>entrance count.</em></h2><p>From black-tie evenings to important meetings and celebrations, choose a look that carries the room before you say a word.</p><a className="text-link" href={`https://wa.me/${WA}?text=Hello%20Giovanni%20Men's%20Wear%2C%20I'd%20like%20to%20view%20your%20collection.`} target="_blank" rel="noreferrer">Enquire on WhatsApp <ArrowUpRight size={16}/></a></div>
        </section>

        <section className="stores" id="stores">
          <div className="section-heading"><div><p className="eyebrow">VISIT US</p><h2>Find Giovanni.</h2></div><p>Visit either Harare location to see the collection in person.</p></div>
          <div className="store-grid">
            <article className="store-card"><span className="store-number">01</span><MapPin size={21}/><h3>Angwa City</h3><p>Shop F09 Upstairs, M Floor<br/>Corner Julius Nyerere Way & Kwame Nkrumah Avenue<br/>Harare, Zimbabwe</p><a href="https://www.google.com/maps/search/?api=1&query=Angwa+City+Harare+Zimbabwe" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={15}/></a></article>
            <article className="store-card"><span className="store-number">02</span><MapPin size={21}/><h3>Robinson House</h3><p>Shop 13B<br/>Corner Kwame Nkrumah Avenue & Angwa Street<br/>Harare, Zimbabwe</p><a href="https://www.google.com/maps/search/?api=1&query=Robinson+House+Harare+Zimbabwe" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={15}/></a></article>
          </div>
        </section>

        <section className="contact" id="contact">
          <div><p className="eyebrow">GET IN TOUCH</p><h2>Start with<br/><em>Giovanni.</em></h2></div>
          <div className="contact-details">
            <a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer"><Phone size={19}/><span><small>Call / WhatsApp</small>{phone}</span><ArrowUpRight size={16}/></a>
            <a href={`mailto:${email}`}><Mail size={19}/><span><small>Email</small>{email}</span><ArrowUpRight size={16}/></a>
            <div className="socials"><a href="https://www.instagram.com/giovannimenswear_zw/" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a><a href="https://www.facebook.com/p/Giovanni-Mens-Wear-100083607145889/" target="_blank" rel="noreferrer" aria-label="Facebook">FB</a></div>
          </div>
        </section>
      </main>

      <footer><img src="/logo.png" alt="Giovanni Men's Wear"/><span>© {new Date().getFullYear()} Giovanni Men's Wear. Harare, Zimbabwe.</span><a href="#home">Back to top <ArrowUp size={14}/></a></footer>

      <a className="whatsapp-float" href={`https://wa.me/${WA}?text=Hello%20Giovanni%20Men's%20Wear`} target="_blank" rel="noreferrer" aria-label="WhatsApp Giovanni">WA</a>

      {activeLook && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActiveLook(null)}><button aria-label="Close" onClick={() => setActiveLook(null)}><X size={24}/></button><img src={activeLook.src} alt={activeLook.label} onClick={(e) => e.stopPropagation()}/><div className="lightbox-caption"><span>{activeLook.type}</span><strong>{activeLook.label}</strong></div></div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
