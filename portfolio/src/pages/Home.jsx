import React from "react";
import "animate.css"; // Import Animate.css for animations

function Home() {
    return (
        <div className="mt-4">
            {/* Hero Section */}
            <div className="row align-items-center" style={{ background: "#f9f9f9", padding: "40px", borderRadius: "10px" }}>
                <div className="col-md-4 text-center animate__animated animate__fadeInLeft">
                    <img
                        src="src/img/photo1.png"
                        className="img-fluid rounded-circle border"
                        style={{ width: "200px", height: "200px", objectFit: "cover", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}
                        alt="Profile"
                    />
                    <h5 className="mt-3">Sara Badini Confalonieri</h5>
                    <p className="text-muted">Front-End Developer</p>
                </div>
                <div className="col-md-8 animate__animated animate__fadeInRight">
                    <h1 className="mt-3">Welcome to my Portfolio!</h1>
                    <p className="lead">
                        Hi, I'm Sara Badini Confalonieri, a passionate Front-End Developer with a strong knack for design.
                        I specialise in creating unique and user-friendly web experiences. My goal is to craft distinctive UI
                        designs that enhance both user experience and search engine visibility.
                    </p>
                </div>
            </div>

            {/* Skills Section */}
            <section className="mt-5">
                <hr className="my-4" />
                <div className="container skills py-5 text-center">
                    <h2 id="skills" className="mb-4">My Skills</h2>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4">
                        {["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Node.js"].map((skill, index) => (
                            <div className="col animate__animated animate__zoomIn" style={{ animationDelay: `${index * 0.2}s` }} key={skill}>
                                <div className="skills-item mx-auto mb-4" style={{ width: "120px" }}>
                                    <img className="img-fluid rounded-circle mb-3" src={`src/img/logo-${skill[0].toLowerCase()}.png`} alt={skill} />
                                    <h5 className="text-center">{skill.toUpperCase()}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="my-4" />
            </section>

            {/* About Me Section */}
            <div style={{ background: '#f76b8a' }}>
                <section className="aboutme-section py-5" id="about-me">
                    <div className="container aboutme">
                        <div className="row">
                            <div className="col-md-8 mb-3 mb-md-0 animate__animated animate__fadeInLeft">
                                <div className="card p-4 h-100 shadow">
                                    <div className="card-body">
                                        <h2>About Me</h2>
                                        <hr className="my-4" />
                                        <p>
                                            I'm Sara Badini Confalonieri, a professional Front End Developer. My strengths are creativity, teamwork, 
                                            and bringing projects from ideation to execution. I'm enthusiastic about my work and always strive to excel.
                                            <br />
                                            If you have work related to my skills, feel free to contact me.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0 animate__animated animate__fadeInRight">
                                <div className="card p-4 h-100 shadow">
                                    <div className="card-body">
                                        <h2>Contact Me</h2>
                                        <hr className="my-4" />
                                        <div className="mb-4"><strong>Email:</strong> sara.badinic@gmail.com</div>
                                        <div className="mb-4"><strong>Phone:</strong> 0754689871</div>
                                        <div className="mb-4">
                                            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sara-badini-confalonieri-594975b4/" target="_blank" rel="noopener noreferrer">Profile</a>
                                        </div>
                                        <div className="mb-4">
                                            <strong>GitHub:</strong> <a href="https://github.com/Sara-Badini-Confalonieri" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                                        </div>
                                        <div className="mb-4">
                                            <strong>Download Resume:</strong>{" "}
                                            <a href="./src/img/Sara-Badini-CV-2024.pdf" download="Sara-Badini-CV-2024.pdf" className="text-primary">
                                                Download PDF
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-3" style={{ background: "#385170", color: "white" }}>
                    <div className="container-fluid text-center">
                        <div className="social d-flex justify-content-center">
                            <a href="https://www.linkedin.com/in/sara-badini-confalonieri-594975b4/" className="fa fa-linkedin m-2" style={{ fontSize: "1.5rem" }}></a>
                            <a href="https://github.com/Sara-Badini-Confalonieri" className="fa fa-github m-2" style={{ fontSize: "1.5rem" }}></a>
                        </div>
                        <h5 className="text-center p-3">Made with ❤️ by Sara</h5>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;
