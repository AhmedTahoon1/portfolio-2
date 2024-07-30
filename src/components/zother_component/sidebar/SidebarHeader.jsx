const SidebarHeader = ({ children, styles = {} }) => {
  return (
    <div className="sidebar-header flex items-center mb-4" style={styles}>
      {children}
    </div>
  );
};

export default SidebarHeader;
