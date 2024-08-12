import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import toastr from "toastr";
// Style
import "./addeditform.scss";

const AddEditForm = () => {
  const [data, setData] = useState({});
  const [categories, setCategories] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const { id } = useParams();
  const secName = useLoaderData();

  const navigate = useNavigate();

  // If In Edit Mode Or Not
  useEffect(() => {
    if (secName === "intro" || secName === "contact") {
      setEditMode(true);
      const fetchApi = async () => {
        // Call Backend
        const res = await fetch(`http://localhost:5000/${secName}/`).then(
          (res) => res.json()
        );
        setData(res);
      };
      fetchApi();
      setEditMode(false);
    } else {
      if (id) {
        setEditMode(true);
        const fetchApi = async () => {
          // Call Backend
          const res = await fetch(
            `http://localhost:5000/${secName}/${id}`
          ).then((res) => res.json());
          setData(res);
          if (secName === "portfolio") {
            // Call Backend
            const res = await fetch(
              `http://localhost:5000/projectCategoryList`
            ).then((res) => res.json());
            setCategories(res);
          }
        };
        fetchApi();
      } else {
        setEditMode(false);
        const fetchApi = async () => {
          if (secName === "portfolio") {
            // Call Backend
            const res = await fetch(
              `http://localhost:5000/projectCategoryList`
            ).then((res) => res.json());
            setCategories(res);
          }
        };
        fetchApi();
      }
    }
  }, [id, secName]);

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
    switch (secName) {
      case "intro":
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
        toastr.success("Done!");
        break;
      case "portfolio":
        if (!editMode) {
          await fetch(`http://localhost:5000/portfolio`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: Math.floor(Math.random() * 10000000).toString(),
              title: data.title,
              desc: data.desc,
              mainImg: data.mainImg
                ? data.mainImg
                : "../../assets/icons/phone.png",
              images: data.images
                ? data.images
                : "../../assets/icons/phone.png",
              publishLink: data.publishLink,
              repoLink: data.repoLink,
              techs: data.techs,
              category: data.category ? data.category : "featured",
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
              title: data.title,
              desc: data.desc,
              mainImg: data.mainImg
                ? data.mainImg
                : "../../assets/icons/phone.png",
              images: data.images
                ? data.images
                : "../../assets/icons/phone.png",
              publishLink: data.publishLink,
              repoLink: data.repoLink,
              techs: data.techs,
              category: data.category ? data.category : "featured",
              show: "false",
            }),
          }).then((res) => {
            if (res.status === 200) {
              toastr.success("Updated Successfully");
            } else {
              toastr.error("Something Went Wrong!");
            }
          });
        }
        setData({});
        navigate("/dashboard/portfolio");
        break;
      case "testimonials":
        if (!editMode) {
          await fetch("http://localhost:5000/testimonials/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: Math.floor(Math.random() * 10000000).toString(),
              name: data.name,
              job: data.job,
              reviewText: data.reviewText,
              userImg: data.userImg
                ? data.userImg
                : "../../assets/images/fotor-ai-20240713145320-removebg-preview.ico",
              socialIcon: data.socialIcon
                ? data.socialIcon
                : "../../assets/icons/icons8-linkedin-500.png",
              socialLink: data.socialLink
                ? data.socialLink
                : "https://www.github.com/AhmedTahoon1",
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
          await fetch(`http://localhost:5000/testimonials/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: data.id,
              name: data.name,
              job: data.job,
              reviewText: data.reviewText,
              userImg: data.userImg
                ? data.userImg
                : "../../assets/icons/phone.png",
              socialIcon: data.socialIcon
                ? data.socialIcon
                : "../../assets/icons/phone.png",
              socialLink: data.socialLink
                ? data.socialLink
                : "https://www.github.com/AhmedTahoon1",
              show: "false",
            }),
          }).then((res) => {
            console.log(res);
            if (res.status === 200) {
              toastr.success("Updated Successfully");
            } else {
              toastr.error("Something Went Wrong!");
            }
          });
        }
        setData([]);
        navigate("/dashboard/testimonials");
        break;
      case "works":
        if (!editMode) {
          await fetch(`http://localhost:5000/works`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: Math.floor(Math.random() * 10000000).toString(),
              title: data.title,
              desc: data.desc,
              icon: data.icon ? data.icon : "../../assets/icons/phone.png",
              img: data.img ? data.img : "../../assets/icons/phone.png",
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
          await fetch(`http://localhost:5000/works/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: data.id,
              title: data.title,
              desc: data.desc,
              icon: data.icon ? data.icon : "../../assets/icons/phone.png",
              img: data.img ? data.icon : "../../assets/icons/phone.png",
              show: data.show,
            }),
          }).then((res) => {
            if (res.status === 200) {
              toastr.success("Updated Successfully");
            } else {
              toastr.error("Something Went Wrong!");
            }
          });
        }
        setData([]);
        navigate("/dashboard/works");
        break;
      case "contact":
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
        toastr.success("Done!");
        break;
      default:
        new Error("Somthin Wrong Happend In AddEditForm.jsx");
        break;
    }
  };

  return (
    <>
      {secName === "intro" && (
        <form className="intro-form" onSubmit={(e) => handleSubmit(e)}>
          <h2>Intro Section</h2>
          <label htmlFor="name">
            <p>Name:</p>
            <input
              type="text"
              value={data.name}
              name="name"
              required
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label htmlFor="jobs">
            <p> Jobs: Separated with (,)</p>
            <textarea
              name="jobs"
              id="jobs"
              value={data.jobs}
              required
              onChange={(e) => handleChange(e)}
            ></textarea>
          </label>
          <label htmlFor="img">
            <p>Upload Image:</p>
            <input
              type="file"
              name="img"
              id="file"
              required
              onChange={(e) => onUploadFile(e)}
            />
          </label>

          <button type="submit">Save</button>
        </form>
      )}
      {secName === "portfolio" && (
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <h2>{editMode ? "Edit Testimonial" : "Add Testimonial"}</h2>
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
            <p>Description:</p>
            <textarea
              name="desc"
              id="portfolio-desc"
              value={data.desc}
              required
              onChange={(e) => handleChange(e)}
            ></textarea>
          </label>
          <label htmlFor="mainImage">
            <p>Upload Main Image:</p>
            <input
              type="file"
              name="mainImg"
              onChange={(e) => onUploadFile(e.target.files)}
            />
          </label>
          <label htmlFor="images">
            <p>Upload Project Images:</p>
            <input
              type="file"
              name="images"
              multiple
              onChange={(e) => onUploadFile(e.target.files)}
            />
          </label>
          <label htmlFor="techs">
            <p> Jobs: Separated with (,)</p>
            <textarea
              name="techs"
              id="techs"
              value={data.techs}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </label>
          <label htmlFor="publishLink">
            <p>View Link:</p>
            <input
              type="text"
              value={data.publishLink}
              name="publishLink"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label htmlFor="repoLink">
            <p>Repo Link:</p>
            <input
              type="text"
              value={data.repoLink}
              name="repoLink"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label htmlFor="category">
            <p>Select The Category:</p>
            <select
              className="category-list"
              name="category"
              value={data.category}
              onChange={(e) => handleChange(e)}
            >
              {categories.map((category) => (
                <option
                  name={category.id}
                  value={category.id}
                  key={category.id}
                >
                  {category.name}
                </option>
              ))}
            </select>
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
      )}
      {secName === "testimonials" && (
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <h2>{editMode ? "Edit Testimonial" : "Add Testimonial"}</h2>
          <label htmlFor="name">
            <p>Name:</p>
            <input
              type="text"
              value={data.name}
              name="name"
              required
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label htmlFor="job">
            <p>Job:</p>
            <input
              type="text"
              value={data.job}
              name="job"
              required
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label htmlFor="review">
            <p>Review:</p>
            <textarea
              name="reviewText"
              id="review"
              value={data.reviewText}
              required
              onChange={(e) => handleChange(e)}
            ></textarea>
          </label>
          <label
            htmlFor="userImage"
            style={{ display: editMode ? "none" : "block" }}
          >
            <p>Upload User Image:</p>
            <input
              type="file"
              name="userImg"
              onChange={(e) => onUploadFile(e.target.files)}
            />
          </label>
          <label
            htmlFor="socialIcon"
            style={{ display: editMode ? "none" : "block" }}
          >
            <p>Upload Social Icon:</p>
            <input
              type="file"
              name="socialIcon"
              onChange={(e) => onUploadFile(e.target.files)}
            />
          </label>
          <label htmlFor="socialLink">
            <p>social Link:</p>
            <input
              type="text"
              value={data.socialLink} //// PROBLEM
              name="socialLink"
              required
              onChange={(e) => handleChange(e)}
            />
          </label>
          <div className="buttons">
            <button className="back-button">
              <Link to={"/dashboard/testimonials"}>Go Back</Link>
            </button>
            <button type="submit" className="submit-button">
              {editMode ? "Update" : "Add"}
            </button>
          </div>
        </form>
      )}
      {secName === "works" && (
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
          <label
            htmlFor="icon"
            style={{ display: editMode ? "none" : "block" }}
          >
            <p>Upload Icon:</p>
            <input
              type="file"
              name="icon"
              onChange={(e) => onUploadFile(e.target.files)}
            />
          </label>
          <label
            htmlFor="image"
            style={{ display: editMode ? "none" : "block" }}
          >
            <p>Upload Image:</p>
            <input
              type="file"
              name="image"
              onChange={(e) => onUploadFile(e.target.files)}
            />
          </label>
          <div className="buttons">
            <button className="back-button">
              <Link to={"/dashboard/works"}>Go Back</Link>
            </button>
            <button type="submit" className="submit-button">
              {editMode ? "Update" : "Add"}
            </button>
          </div>
        </form>
      )}
      {secName === "contact" && (
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
      )}
    </>
  );
};

export default AddEditForm;
