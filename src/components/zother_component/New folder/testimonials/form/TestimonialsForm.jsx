import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import toastr from "toastr";

// Style
import "./testimonialsform.scss";

const TestimonialsForm = () => {
  const [data, setData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const { id } = useParams();
  const { name, job, reviewText, socialLink, socialIcon, userImg } = data;

  const navigate = useNavigate();
  // If In Edit Mode Or Not
  useEffect(() => {
    if (id) {
      setEditMode(true);
      const fetchApi = async () => {
        // Call Backend
        const res = await fetch(
          `http://localhost:5000/testimonials/${id}`
        ).then((res) => res.json());
        setData(res);
      };
      fetchApi();
    } else {
      setEditMode(false);
    }
  }, [id]);

  // When Inputs Change Testimonial
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

  // Handle Submit/*
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ({ name, job, reviewText, socialIcon, socialLink }) {
      if (!editMode) {
        await fetch("http://localhost:5000/testimonials/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: Math.floor(Math.random() * 10000000).toString(),
            name: name,
            job: job,
            reviewText: reviewText,
            userImg: userImg
              ? userImg
              : "../../assets/images/fotor-ai-20240713145320-removebg-preview.ico",
            socialIcon: socialIcon
              ? socialIcon
              : "../../assets/icons/icons8-linkedin-500.png",
            socialLink: socialLink
              ? socialLink
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
            id: id,
            name: name,
            job: job,
            reviewText: reviewText,
            userImg: userImg ? userImg : "../../assets/icons/phone.png",
            socialIcon: socialIcon
              ? socialIcon
              : "../../assets/icons/phone.png",
            socialLink: socialLink
              ? socialLink
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
      setData({
        name: "",
        job: "",
        reviewText: "",
        userImg: "",
        socialIcon: "",
        socialLink: "",
        show: "false",
      });
      navigate("/dashboard/testimonials");
    }
  };

  return (
    <>
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
          <Link className="back-button" to={"/dashboard/testimonials"}>
            Go Back
          </Link>
          <button type="submit" className="submit-button">
            {editMode ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TestimonialsForm;
