import { useState, useEffect, memo } from "react";
import "./testimonialsdashboard.scss";
import toastr from "toastr";
import { Link } from "react-router-dom";

// Images & Icons
import del from "../../../../assets/icons/plane-1500675-1288086.png";
import edit from "../../../../assets/icons/icons8-external-link-200.png";

const TestimonialsDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      // Call Backend
      const res = await fetch("http://localhost:5000/testimonials").then(
        (res) => res.json()
      );
      setData(res);
    };
    fetchApi();
  }, []);

  const handleDelete = async (id) => {
    const fetchApi = async () => {
      // Call Backend
      await fetch(`http://localhost:5000/testimonials/${id}`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: null,
      });
    };
    fetchApi();

    // Delete From UI
    //Clone
    let newData = [...data];
    //Edit
    newData = newData.filter((e) => e.id !== id);
    //Update
    setData(newData);

    toastr.success("Item Deleted Successfully");
  };

  const handleShow = async (item) => {
    const fetchApi = async () => {
      // Call Backend
      await fetch(`http://localhost:5000/testimonials/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...item,
          show: item.show === "true" ? "false" : "true",
        }),
      });
    };
    fetchApi();

    // Change in UI
    let newData = [...data];
    //Edit
    newData = newData.map((e) => {
      if (e.id === item.id) {
        e.show = item.show === "true" ? "false" : "true";
      }
      return e;
    });
    //Update
    setData(newData);
  };
  return (
    <div className="testimonials-dashboard">
      <h2>Testimonials Data</h2>
      <div className="table_component">
        <table>
          <caption>Testimonials:</caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Review</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Show</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className={
                  item.name.toLowerCase().split(" ").join("-").trim() +
                  "-" +
                  item.id
                }
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  {item.reviewText.length > 50
                    ? item.reviewText.slice(0, 50) + "..."
                    : item.reviewText}
                </td>
                <td>
                  <Link to={"edit/" + item.id}>
                    {" "}
                    <img src={edit} alt="edit" />
                  </Link>
                </td>
                <td className="delete" onClick={() => handleDelete(item.id)}>
                  <img src={del} alt="delete" />
                </td>
                <td className="show">
                  <input
                    type="checkbox"
                    name="show"
                    id="show"
                    value={item.id}
                    defaultChecked={item.show === "true" ? true : false}
                    onChange={() => handleShow(item)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button>
        <Link to={"add"}>Add New</Link>
      </button>
    </div>
  );
};

export default memo(TestimonialsDashboard);
