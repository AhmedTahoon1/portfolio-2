import React, { useState, useEffect } from "react";
import "./testimonials.scss";

import curveArrow from "../../assets/icons/icons8-forward-arrow-100.png";

const Testimonials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      // Call Backend
      const res = await fetch(
        "http://localhost:5000/testimonials?show=true"
      ).then((res) => res.json());
      setData(res);
    };
    fetchApi();
  }, []);
  return (
    <section
      className="testimonials"
      id="testimonials"
      style={{ display: data.length > 0 ? "flex" : "none" }}
    >
      <h2>Testimonials</h2>
      <div className="reviews">
        {data.map((review) => (
          <div className="review" key={review.id}>
            <div className="header">
              <img src={curveArrow} alt="arrow-icon" className="arrow-icon" />
              <img src={review.userImg} alt="Person" className="user-img" />
              <a href={review.socialLink}>
                <img
                  src={review.socialIcon}
                  alt="Social"
                  className="social-icon"
                />
              </a>
            </div>
            <div className="review-text">{review.reviewText}</div>
            <div className="owner">
              <div className="name">{review.name}</div>
              <div className="job">{review.job}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
