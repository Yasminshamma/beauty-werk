import logo from "../assets/logo.jpg";
import BrandLine from "./BrandLine";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__orb hero__orb--one" />
      <div className="hero__orb hero__orb--two" />

      <div className="hero__topline">
        <BrandLine>Skin & beauty studio</BrandLine>
        <span className="hero__edition">EST. — BEAUTYWERK</span>
      </div>

      <div className="hero__composition">
        <div className="hero__copy">
          <p className="eyebrow">A quieter kind of beauty</p>
          <h1>
            Beauty,
            <em> considered.</em>
          </h1>
          <p className="hero__intro">
            Skin-focused rituals, thoughtful beauty care, and a space designed
            to let you slow down.
          </p>
          <a className="text-link" href="#treatments">
            Explore treatments <span>↓</span>
          </a>
        </div>

        <div className="hero__seal">
          <div className="hero__seal-ring" />
          <div className="hero__seal-inner">
            <img src={logo} alt="" aria-hidden="true" />
          </div>
          <span className="hero__seal-note hero__seal-note--left">01 / 04</span>
          <span className="hero__seal-note hero__seal-note--right">MIAMI · STUDIO</span>
        </div>

        <div className="hero__side-note">
          <span>01</span>
          <p>Where skin meets ritual.</p>
        </div>
      </div>

      <div className="hero__footer">
        <span>Scroll to discover</span>
        <div className="hero__scroll-line" />
        <span>01 — 06</span>
      </div>
    </section>
  );
}