const LinksGroupHeader = ({ children, styles = {} }) => {
  return (
    <p className="nav-list-header text-sm mb-2 font-normal" style={styles}>
      {children}
    </p>
  );
};

export default LinksGroupHeader;
