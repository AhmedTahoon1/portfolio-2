const SidebarHeaderText = ({ header, desc, style = {} }) => {
  return (
    <div className="sidebar-header-text flex-1" style={style}>
      {header && (
        <h3 className="sidebar-header-name text-mainText text-4xl lg:text-xl">
          {header}
        </h3>
      )}
      {desc && (
        <p className="sidebar-header-desc text-secText text-2xl lg:text-lg">
          {desc}
        </p>
      )}
    </div>
  );
};

export default SidebarHeaderText;
