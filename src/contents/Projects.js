function Projects() {
  return (
    <>
      <section className="project section active" id="projects">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>My Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="project-item padd-15">
              <div className="project-item-inner shadow-dark">
                <div className="project-img">
                  <img
                    src="https://assets.website-files.com/5cb90b63adbd7da37ea60e30/5fb427276298857449cd9c89_mentor%20mentee%20meetings%20guide.jpg"
                    alt=""
                  />
                </div>
                <div className="project-info">
                  <h4 className="project-title">Task Management</h4>
                  <p className="project-description">
                    Used Reactjs,HTML,CSS for froent end side and backend side
                    Nodejs,Express,Mongodb. In this project admin can create a
                    mentors and tasks corresponding mentor
                  </p>
                  <div className="buttons">
                    <a
                      href="https://github.com/gajwala/taskmanagement-MERN"
                      className="btn"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item padd-15">
              <div className="project-item-inner shadow-dark">
                <div className="project-img">
                  <img
                    src="https://images.theconversation.com/files/371681/original/file-20201127-13-5lb1kc.jpg?ixlib=rb-1.1.0&rect=0%2C4%2C1000%2C661&q=45&auto=format&w=496&fit=clip"
                    alt=""
                  />
                </div>
                <div className="project-info">
                  <h4 className="project-title">Memories Website</h4>
                  <p className="project-description">
                    Used Nextjs,CSS,HTML,and Nodejs, Mongodb. in this project
                    user can insert Memories and it will save into db. any time
                    he can do CURD operations on specific Image
                  </p>
                  <div className="buttons">
                    <a
                      href="https://github.com/gajwala/memories"
                      className="btn"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item padd-15">
              <div className="project-item-inner shadow-dark">
                <div className="project-img">
                  <img
                    src="https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg"
                    alt=""
                  />
                </div>
                <div className="project-info">
                  <h4 className="project-title">Portfolio</h4>
                  <p className="project-description">
                    Using Reactjs and javacsript and css for paint. in this
                    project shows the portfolio of balachandraia Gajwala
                  </p>
                  <div className="buttons">
                    <a
                      href="https://github.com/gajwala/portfolio"
                      className="btn"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item padd-15">
              <div className="project-item-inner shadow-dark">
                <div className="project-img">
                  <img
                    src="https://www.toco.com.om/wp-content/uploads/2020/03/banner2.png"
                    alt=""
                  />
                </div>
                <div className="project-info">
                  <h4 className="project-title">Covid Tracker</h4>
                  <p className="project-description">
                    using nextjs and css implemented covid tracker. so In this
                    project we can check country wise how many cases are active
                    ,inactive,deaths
                  </p>
                  <div className="buttons">
                    <a
                      href="https://github.com/gajwala/covidTracker"
                      className="btn"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item padd-15">
              <div className="project-item-inner shadow-dark">
                <div className="project-img">
                  <img
                    src="https://media.wired.com/photos/5926c0518d4ebc5ab806b5c3/master/pass/TeslaSHP.jpg"
                    alt=""
                  />
                </div>
                <div className="project-info">
                  <h4 className="project-title">Tesla clone</h4>
                  <p className="project-description">
                    Using reactjs and CSS Styled components. and this project is
                    mainly for tesla clone
                  </p>
                  <div className="buttons">
                    <a
                      href="https://github.com/gajwala/tesla-clone"
                      className="btn"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects;
