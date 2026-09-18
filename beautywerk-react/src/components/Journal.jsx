import BrandLine from "./BrandLine";

const notes = [
  ["Skin note / 01", "Your routine does not need more steps. It needs the right ones."],
  ["Studio note / 02", "Why a slower appointment can change the way a treatment feels."],
  ["Beauty note / 03", "Small details, beautiful results: our philosophy in practice."],
];

export default function Journal() {
  return (
    <section className="journal section">
      <div className="journal__header">
        <span className="section-index">05</span>
        <BrandLine>From the studio</BrandLine>
        <p>Small thoughts on skin, beauty and taking your time.</p>
      </div>

      <div className="journal__grid">
        {notes.map(([label, title], index) => (
          <article className="journal-card reveal" key={label}>
            <span>{label}</span>
            <div className="journal-card__mark">0{index + 1}</div>
            <h3>{title}</h3>
            <a href="#visit" className="text-link">Read note <span>↗</span></a>
          </article>
        ))}
      </div>
    </section>
  );
}