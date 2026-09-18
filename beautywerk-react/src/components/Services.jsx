import { services } from "../data/services";
import BrandLine from "./BrandLine";

export default function Services() {
  return (
    <section className="services section" id="treatments">
      <div className="section-heading reveal">
        <div>
          <span className="section-index">03</span>
          <BrandLine>Selected treatments</BrandLine>
        </div>
        <p>
          A focused menu rather than a crowded one. Start with what your skin
          is asking for.
        </p>
      </div>

      <div className="service-list">
        {services.map((service) => (
          <article className="service-row reveal" key={service.number}>
            <span className="service-row__number">{service.number}</span>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
            <span className="service-row__meta">{service.meta}</span>
            <span className="service-row__arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}