const SidebarNav = ({ children, styles = {} }) => {
  return (
    <nav className="sidebar-nav">
      <ul
        className="sidebar-nav-list text-secText text-2xl font-bold lg:text-lg text-center lg:text-start"
        style={styles}
      >
        {children}
      </ul>
    </nav>
  );
};

export default SidebarNav;
