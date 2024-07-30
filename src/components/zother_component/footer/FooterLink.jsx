import { Link } from "react-router-dom";

const FooterLink = ({ to = "/", children }) => {
  return (
    <li className="mb-1 p-1 w-fully hover:text-mainText cursor-pointer">
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default FooterLink;
