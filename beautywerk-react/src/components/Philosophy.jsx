import BrandLine from "./BrandLine";

export default function Philosophy() {
  return (
    <section className="philosophy section" id="philosophy">
      <div className="section-index">02</div>

      <div className="philosophy__statement reveal">
        <BrandLine>The Beautywerk approach</BrandLine>
        <p>
          We believe great beauty care should feel less like maintenance and
          more like a <i>ritual.</i>
        </p>
      </div>

      <div className="philosophy__details">
        <div className="philosophy__number">B<span>W</span></div>
        <div>
          <p className="eyebrow">Less noise. More intention.</p>
          <p>
            Every detail — from the treatment room to the final touch — is
            considered around the individual, not a trend.
          </p>
        </div>
        <div className="philosophy__signature">beautywerk<span>®</span></div>
      </div>
    </section>
  );
}