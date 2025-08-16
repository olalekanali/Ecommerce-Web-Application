import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "../assets/data";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <Link to="/" className="mb-10 bold-20">
              Shopper
            </Link>
          </div>
          <div>
            {FOOTER_LINKS.map((col) => (
              <FooterColumn ></FooterColumn>
            ))}
              
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  )
}

export default Footer;
