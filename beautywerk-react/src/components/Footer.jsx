import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img src={logo} alt="Beautywerk Skin & Beauty Studio" />
      </div>
      <div className="footer__cols">
        <div>
          <span>Visit</span>
          <p>Studio address<br />Miami, FL</p>
        </div>
        <div>
          <span>Hours</span>
          <p>By appointment<br />Tuesday — Saturday</p>
        </div>
        <div>
          <span>Connect</span>
          <p><a href="mailto:hello@beautywerk.studio">Email</a><br /><a href="#visit">Instagram</a></p>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Beautywerk</span>
        <span>Skin & Beauty Studio</span>
        <span>Made with intention.</span>
      </div>
    </footer>
  );
}