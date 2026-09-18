import BrandLine from "./BrandLine";

export default function Booking() {
  return (
    <section className="booking section" id="visit">
      <div className="booking__stamp">
        <span>BEAUTY</span>
        <span>WERK</span>
        <span>SKIN & BEAUTY STUDIO</span>
      </div>

      <div className="booking__content reveal">
        <span className="section-index">06</span>
        <BrandLine>Come as you are</BrandLine>
        <h2>Your next<br /><em>ritual awaits.</em></h2>
        <p>
          Ready when you are. Tell us what you are looking for and we’ll help
          you choose where to begin.
        </p>
        <div className="booking__actions">
          <a className="button button--dark" href="mailto:hello@beautywerk.studio">
            Request an appointment <span>↗</span>
          </a>
          <a className="button button--quiet" href="tel:+10000000000">
            Call the studio
          </a>
        </div>
      </div>
    </section>
  );
}