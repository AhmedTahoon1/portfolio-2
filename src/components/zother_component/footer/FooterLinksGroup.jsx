const FooterLinksGroup = ({ children, styles = {} }) => {
  return (
    <div className="nav-list my-4" style={styles}>
      {children}
    </div>
  );
};

export default FooterLinksGroup;
