const Line = ({
  bg = "#000",
  height = "2px",
  width = "100%",
  radius = "0",
}) => {
  const lineStyle = {
    backgroundColor: bg,
    height: height,
    width: width,
    borderRadius: radius,
    textAlign: "center",
  };
  return <div className="line" style={lineStyle}></div>;
};

export default Line;
