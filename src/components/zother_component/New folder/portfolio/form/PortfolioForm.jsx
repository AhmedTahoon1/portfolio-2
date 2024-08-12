import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import toastr from "toastr";

// Style
import "./portfolioform.scss";

const PortfolioForm = ({ props }) => {
  const [data, setData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const { title, desc, icon, img, show = "false" } = data;
  const { id } = useParams();
  const {
    intro = "",
    portfolio = "",
    works = "",
    testimonials = "",
    contact = "",
  } = props.match.params;
  const navigate = useNavigate();

  // If In Edit Mode Or Not
  useEffect(() => {
    if (id) {
      setEditMode(true);
      const fetchApi = async () => {
        // Call Backend
        const res = await fetch(`http://localhost:5000/portfolio/${id}`).then(
          (res) => res.json()
        );
        setData(res);
      };
      fetchApi();
    } else {
      setEditMode(false);
    }
  }, [id]);

  // When Inputs Change Work
  const handleChange = (e) => {
    // clone
    const newData = { ...data };
    // Edit
    newData[e.currentTarget.name] = e.target.value;
    // Set State
    setData(newData);
  };

  // On Upload Img
  const onUploadFile = async (file) => {
    console.log("file", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "i3qs53jw"); //"i3qs53jw" + "dqipumj12",
    await fetch("https://api.cloudinary.com/v1_1/dqipumj12/image/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ({ title, desc, icon, img }) {
      if (!editMode) {
        await fetch("http://localhost:5000/portfolio/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: Math.floor(Math.random() * 10000000).toString(),
            title: title,
            desc: desc,
            icon: icon ? icon : "../../assets/icons/phone.png",
            img: img ? img : "../../assets/icons/phone.png",
            show: "false",
          }),
        }).then((res) => {
          if (res.status === 201) {
            toastr.success("Added Successfully");
          } else {
            toastr.error("Something Went Wrong!");
          }
        });
      } else {
        await fetch(`http://localhost:5000/portfolio/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            title: title,
            desc: desc,
            icon: icon ? icon : "../../assets/icons/phone.png",
            img: img ? icon : "../../assets/icons/phone.png",
            show: show,
          }),
        }).then((res) => {
          if (res.status === 200) {
            toastr.success("Updated Successfully");
          } else {
            toastr.error("Something Went Wrong!");
          }
        });
      }
      setData({ title: "", desc: "", icon: "", img: "", show: "false" });
      navigate("/dashboard/portfolio");
    }
  };

  return (
    <>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h2>{editMode ? "Edit Work" : "Add Work"}</h2>
        <label htmlFor="title">
          <p>Title:</p>
          <input
            type="text"
            value={data.title}
            name="title"
            required
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="desc">
          <p>Desc:</p>
          <textarea
            name="desc"
            id="desc"
            value={data.desc}
            required
            onChange={(e) => handleChange(e)}
          ></textarea>
        </label>
        <label htmlFor="icon" style={{ display: editMode ? "none" : "block" }}>
          <p>Upload Icon:</p>
          <input
            type="file"
            name="icon"
            onChange={(e) => onUploadFile(e.target.files)}
          />
        </label>
        <label htmlFor="image" style={{ display: editMode ? "none" : "block" }}>
          <p>Upload Image:</p>
          <input
            type="file"
            name="image"
            multiple
            onChange={(e) => onUploadFile(e.target.files)}
          />
        </label>
        <div className="buttons">
          <button className="back-button">
            <Link to={"/dashboard/portfolio"}>Go Back</Link>
          </button>
          <button type="submit" className="submit-button">
            {editMode ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default PortfolioForm;
