import { useState } from "react";
import logo from "../assets/logo.jpg";

const links = [
  ["Philosophy", "#philosophy"],
  ["Treatments", "#treatments"],
  ["The Ritual", "#ritual"],
  ["Visit", "#visit"],
];

export default function Navbar({ compact }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`nav ${compact ? "nav--compact" : ""}`}>
      <a className="nav__brand" href="#" aria-label="Beautywerk home">
        <img src={logo} alt="Beautywerk" />
      </a>

      <nav className={`nav__links ${open ? "is-open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav__cta" href="#visit" onClick={() => setOpen(false)}>
          Book a visit <span>↗</span>
        </a>
      </nav>

      <button
        className="nav__menu"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}