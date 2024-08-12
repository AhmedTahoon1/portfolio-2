import { useState, useEffect } from "react";
import "./contactdashboard.scss";
import toastr from "toastr";

const ContactDashboard = () => {
  const [data, setData] = useState({
    img: "../../assets/images/avataaars-1721562423147.png",
    message: "Asap",
  });

  useEffect(() => {
    const fetchApi = async () => {
      // Call Backend
      const res = await fetch("http://localhost:5000/contact").then((res) =>
        res.json()
      );
      setData(res);
    };
    fetchApi();
  }, []);

  const handleChange = (e) => {
    // clone
    const newData = { ...data };
    // Edit
    newData[e.currentTarget.name] = e.target.value;
    // Set State
    setData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fetchApi = async () => {
      // Call Backend
      await fetch("http://localhost:5000/contact", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img: data.img
            ? "../../assets/images/avataaars-1721562423147.png"
            : "../../assets/images/avataaars-1721562423147.png",
          message: data.message,
        }),
      });
    };
    fetchApi();
    toastr.success("Done!");
    //navigate("/", { replace: true });
  };

  return (
    <>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h2>Contact Section</h2>
        <label htmlFor="name">
          <p>Message:</p>
          <input
            type="text"
            value={data.message}
            name="message"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="img">
          <p>Upload Image:</p>
          <input
            type="file"
            name="img"
            id="file"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default ContactDashboard;
