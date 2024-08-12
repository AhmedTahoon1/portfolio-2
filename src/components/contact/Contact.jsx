import { useState, useEffect } from "react";
import "./contact.scss";
import contactImg from "../../assets/images/fotor-ai-20240713145520.jpg";
function Contact() {
  const [message, setMessage] = useState(false);
  const [data, setData] = useState({
    img: "../../assets/images/avataaars-1721562423147.png",
    message: "",
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

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage(true);

    const formData = new FormData(event.target);

    formData.append("access_key", "d9c6f6a0-7b69-4085-a772-2e8593faab0a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={data.img ? data.img : contactImg} alt="img" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="text" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
          {message && <span>{data.message}</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
