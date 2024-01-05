import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import "./index.css";
const Contacts = () => {
  return (
    <footer id="contacts" className="contacts-bg-container">
      <section className="container">
        <section className="icons">
          <FaInstagramSquare />
          <FaLinkedin />
          <MdMail />
        </section>
        <p>Copyright © 2024. All rights reserved</p>
      </section>
    </footer>
  );
};

export default Contacts;
