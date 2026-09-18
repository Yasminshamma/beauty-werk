export default function Ritual() {
  return (
    <section className="ritual section" id="ritual">
      <div className="ritual__visual">
        <div className="ritual__circle ritual__circle--outer" />
        <div className="ritual__circle ritual__circle--gold" />
        <div className="ritual__circle ritual__circle--inner">
          <span>BW</span>
        </div>
        <div className="ritual__arc" />
        <span className="ritual__caption">A moment to return to yourself</span>
      </div>

      <div className="ritual__copy reveal">
        <span className="section-index">04</span>
        <p className="eyebrow">The ritual</p>
        <h2>Slow down.<br /><em>Let your skin speak.</em></h2>
        <p>
          Beautywerk is intentionally intimate: warm light, clean forms and
          enough space between appointments to make your visit feel unrushed.
        </p>
        <div className="ritual__facts">
          <div><strong>01</strong><span>Consult first</span></div>
          <div><strong>02</strong><span>Treat with intention</span></div>
          <div><strong>03</strong><span>Leave feeling renewed</span></div>
        </div>
      </div>
    </section>
  );
}