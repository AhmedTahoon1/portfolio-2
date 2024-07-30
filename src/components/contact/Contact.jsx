import { useRef, useState } from "react";
import "./contact.scss";
import contactImg from "../../assets/images/shake.svg";
function Contact() {
  const [message, setMessage] = useState(false);

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
        <img src={contactImg} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Full Name" />
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
