const SidebarLinksGroup = ({ children, styles = {} }) => {
  return (
    <div className="nav-list-1 my-4" style={styles}>
      {children}
    </div>
  );
};

export default SidebarLinksGroup;
