import { useState } from "react";

function TheamSwitcher(props) {
  const [radioValue, setRadioValue] = useState("light");
  const setActiveStyle = (color) => {
    console.log(color);
    const links = document.querySelectorAll(".alternate-style"),
      totalLinks = links.length;
    for (let i = 0; i < totalLinks; i++) {
      if (color === links[i].getAttribute("title")) {
        links[i].removeAttribute("disabled");
      } else {
        links[i].setAttribute("disabled", "true");
      }
    }
  };
  function toggleThemeSwitcher() {
    document.querySelector(".theme-switch").classList.toggle("open");
  }
  const modeSwitch = (e) => {
    console.log(e.target.value);
    if (e.target.value === "dark") {
      document.body.className = "dark";
      setRadioValue("dark");
    } else {
      document.body.className = "";
      setRadioValue("light");
    }
  };
  return (
    <>
      <div className="theme-switch">
        <div className="toggle-theme-switcher" onClick={toggleThemeSwitcher}>
          <i className="fa fa-cog fa-spin"></i>
        </div>
        <h5>Theme Switch</h5>
        <ul>
          <li>
            {" "}
            <button
              title="red"
              style={{ backgroundColor: "#e40017" }}
              onClick={() => {
                setActiveStyle("red");
              }}
            ></button>{" "}
          </li>
          <li>
            {" "}
            <button
              title="blue"
              style={{ backgroundColor: "#0779e4" }}
              onClick={() => {
                setActiveStyle("blue");
              }}
            ></button>{" "}
          </li>
          <li>
            {" "}
            <button
              title="green"
              style={{ backgroundColor: "#57d131" }}
              onClick={() => {
                setActiveStyle("green");
              }}
            ></button>{" "}
          </li>
          <li>
            {" "}
            <button
              title="purple"
              style={{ backgroundColor: "#a100ff" }}
              onClick={() => {
                setActiveStyle("purple");
              }}
            ></button>{" "}
          </li>
          <li>
            {" "}
            <button
              title="yellow"
              style={{ backgroundColor: "#ffcc00" }}
              onClick={() => {
                setActiveStyle("yellow");
              }}
            ></button>{" "}
          </li>
        </ul>
        <h5>Mode Switch</h5>
        <label>
          <input
            type="radio"
            className="mode-switch"
            name="body-mode"
            value="light"
            checked={radioValue === "light"}
            onChange={modeSwitch}
          />
          Light
        </label>
        <label>
          <input
            type="radio"
            className="mode-switch"
            name="body-mode"
            value="dark"
            onChange={modeSwitch}
            checked={radioValue === "dark"}
          />
          Dark
        </label>
      </div>
    </>
  );
}
export default TheamSwitcher;
