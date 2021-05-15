import profilepic from "../static/balu.jpg";
import ReactTypingEffect from "react-typing-effect";
function Home() {
  return (
    <>
      <section className="home section active" id="home">
        <div className="container">
          <div className="intro">
            <img src={profilepic} alt="balu's img" className="shadow-dark" />
            {/* <ReactTypingEffect
              className="typingeffect"
              text={[
                "I am Balachandraiah Gajwala",
                "working as a full stack web developer"
              ]}
              speed={100}
              eraseDelay={700}
            /> */}
            <h1>Balachandraiah</h1>
            <p>working as a full stack web developer</p>
            <div className="social-link">
              <a
                href="https://www.facebook.com/balu.gajwala"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="fa fa-facebook"></i>{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/balachandraiahgajwala"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="fa fa-linkedin"></i>{" "}
              </a>
              <a
                href="mailto:balachandraiahgajwala@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="fa fa-envelope-o"></i>{" "}
              </a>
              <a
                href="https://github.com/gajwala"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="fa fa-github"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
