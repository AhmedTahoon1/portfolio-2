import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SidebarLink = ({
  to = "/",
  iconCode = ["fal", "coffee"],
  children,
  iconStyle = {},
}) => {
  return (
    <li className="mb-2 lg:mb-1 p-2 lg:p-1 w-fully lg:w-11/12 border-sideBar border rounded hover:border-iconBorder hover:text-mainText cursor-pointer">
      <FontAwesomeIcon icon={iconCode} style={iconStyle} />
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default SidebarLink;
