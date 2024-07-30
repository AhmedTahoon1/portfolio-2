import avatar from "../../assets/images/avatar.png";

const SidebarHeaderImg = ({
  src = avatar,
  alt = "Img Not Found",
  classes = "",
  styles = {},
  rounded = true,
}) => {
  return (
    <div
      className={
        "sidebar-header-img basis-1/12 me-5 lg:basis-2/6 lg:me-3" +
        " " +
        classes
      }
      style={styles}
    >
      <img src={src} alt={alt} className={rounded && " rounded-full"} />
    </div>
  );
};

export default SidebarHeaderImg;
