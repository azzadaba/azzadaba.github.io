import "../App.css";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>
          Literacy Wellness Inc. is a privately owned remedial education and
          consultancy company.
          <br />
          Azza Daba
          <br />
          Oakville, Ontario, Canada
          <br />
          azzadaba@literacywellness.com
          <br />
          (416)884-1970
        </p>
        <div className="social-links">
          <a href="https://www.instagram.com/literacywellness" target="_blank">
            <img src="instagram.png" alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/azzadaba/" target="_blank">
            <img src="linkedin.png" alt="linkedin" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Root;
