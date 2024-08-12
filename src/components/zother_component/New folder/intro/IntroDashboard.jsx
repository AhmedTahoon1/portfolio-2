import { useState, useEffect } from "react";
import "./introdashboard.scss";
import toastr from "toastr";
import { useLoaderData } from "react-router";

const IntroDashboard = () => {
  const [data, setData] = useState({});
  const secName = useLoaderData();

  useEffect(() => {
    const fetchApi = async () => {
      // Call Backend
      const res = await fetch("http://localhost:5000/intro").then((res) =>
        res.json()
      );
      setData(res);
    };
    fetchApi();
    console.log(secName);
  }, [secName]);

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
      await fetch("http://localhost:5000/intro", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img: data.img
            ? "../../assets/images/avataaars-1721562423147.png"
            : "../../assets/images/avataaars-1721562423147.png",
          name: data.name ? data.name : "No Data",
          jobs: data.jobs ? data.jobs : "No Data",
        }),
      });
    };
    fetchApi();
    toastr.success("Done!");
    //navigate("/", { replace: true });
  };

  return (
    <form className="intro-form" onSubmit={(e) => handleSubmit(e)}>
      <h2>Intro Section</h2>
      <label htmlFor="name">
        <p>Name:</p>
        <input
          type="text"
          value={data.name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label htmlFor="jobs">
        <p> Jobs: Separated with (,)</p>
        <textarea
          name="jobs"
          id="jobs"
          value={data.jobs}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </label>
      <label htmlFor="img">
        <p>Upload Image:</p>
        <input
          type="file"
          name="img"
          id="file"
          multiple
          onChange={(e) => handleChange(e)}
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
};

export default IntroDashboard;
