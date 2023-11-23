
import './footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-logo">
        OASIS
        <br />
        RESORTS
      </h1>
      <div className="footer-links1">
        <ul>
          <li>Contact: +62 361730361</li>
          <li>Email:oasisresorts@oasis.com</li>
        </ul>
      </div>
      <div className="footer-socials">
        <ul>
          <li>instagram</li>
          <li>twitter</li>
        </ul>
      </div>
      <div className="input-group">
        <input
          type="email"
          className="input"
          id="Email"
          name="Email"
          placeholder="uiverse@verse.io"
          autoComplete="off"
        />
        <input
          className="button--submit"
          defaultValue="Subscribe"
          type="submit"
        />
      </div>
    </div>
  );
}
