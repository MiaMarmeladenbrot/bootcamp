import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");

  return (
    <section className="form-container">
      <form action="">
        <input
          type="text"
          placeholder="Vorname"
          onChange={(event) => setFirstname(event.target.value)}
          value={firstname}
        />
        <input
          type="text"
          placeholder="Nachname"
          onChange={(event) => setLastname(event.target.value)}
          value={lastname}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setMail(event.target.value)}
          value={mail}
        />
      </form>{" "}
      <p>Vorname: {firstname}</p>
      <p>Nachname:{lastname}</p>
      <p>Email: {mail}</p>
    </section>
  );
};

export default Form;
