import { NavLink } from "react-router-dom";
import profilepic from "../static/balu.jpg";

function Navbar() {
  const nav = document.querySelector(".nav"),
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
  const asideSectionTogglerBtn = () => {
    const navTogglerBtn = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.toggle("open");
    }
  };

  return (
    <>
      <div className="aside">
        <div className="nav-toggler" onClick={asideSectionTogglerBtn}>
          <span></span>
        </div>
        <div className="aside-inner">
          <img
            src={profilepic}
            className="shadow-dark"
            style={{ borderRadius: "50%", height: "150px", margin: "25px" }}
            alt="balu"
          />
          <div className="logo">
            <a href="index.html">Balu</a>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <NavLink to="home" activeClassName="active">
                  {" "}
                  Home{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="about" activeClassName="active">
                  {" "}
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink to="projects" activeClassName="active">
                  {" "}
                  Projects{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="contact" activeClassName="active">
                  {" "}
                  Contact{" "}
                </NavLink>
              </li>
            </ul>
          </nav>
          <footer>
            <small> &copy; 2021 balu</small>
          </footer>
        </div>
      </div>
    </>
  );
}
export default Navbar;
