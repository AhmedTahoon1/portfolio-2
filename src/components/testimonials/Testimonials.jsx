import React from "react";
import "./testimonials.scss";
import userImg from "../../assets/images/fotor-ai-20240713145320-removebg-preview.ico";
import twitter from "../../assets/icons/icons8-twitter-500.png";
import linkedin from "../../assets/icons/icons8-linkedin-500.png";
import youtube from "../../assets/icons/icons8-youtube-500.png";
import curveArrow from "../../assets/icons/icons8-forward-arrow-100.png";

const Testimonials = () => {
  const data = [
    {
      id: "1",
      userImg: userImg,
      social: {
        socialIcon: twitter,
        socialLink: "https://www.x.com",
      },
      reviewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In optio quisquam quasi dolores, eveniet id deleniti exercitationem repudiandae voluptatum reiciendis porro delectus aperiam voluptas",
      name: "Mohamed Tarek",
      job: "Senior Web Developer",
    },
    {
      id: "2",
      userImg: userImg,
      social: {
        socialIcon: youtube,
        socialLink: "https://www.youtube.com",
      },
      reviewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In optio quisquam quasi dolores, eveniet id deleniti exercitationem repudiandae voluptatum reiciendis porro delectus aperiam voluptas",
      name: "Shohdy Tahoon",
      job: "Senior Mobile Developer",
    },
    {
      id: "3",
      userImg: userImg,
      social: {
        socialIcon: linkedin,
        socialLink: "https://www.linkedin.com",
      },
      reviewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In optio quisquam quasi dolores, eveniet id deleniti exercitationem repudiandae voluptatum reiciendis porro delectus aperiam voluptas",
      name: "Shahd Tarek",
      job: "Senior Engineer",
    },
  ];
  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="reviews">
        {data.map((review) => (
          <div className="review" key={review.id}>
            <div className="header">
              <img src={curveArrow} alt="arrow-icon" className="arrow-icon" />
              <img src={review.userImg} alt="Person" className="user-img" />
              <a href={review.social.socialLink}>
                <img
                  src={review.social.socialIcon}
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
