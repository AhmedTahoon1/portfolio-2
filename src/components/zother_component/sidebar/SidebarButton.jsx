import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarButton = ({
  iconCode,
  iconStyle = {},
  position = {},
  handler,
  classes = " ",
}) => {
  return (
    <div
      className={
        "absolute right-5 top-5 text-2xl text-mainText lg:hidden" +
        " " +
        classes
      }
      style={position}
    >
      <button onClick={handler}>
        <FontAwesomeIcon icon={iconCode} style={iconStyle} />
      </button>
    </div>
  );
};

export default SidebarButton;
