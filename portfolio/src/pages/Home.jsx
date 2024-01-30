import React from "react";
import headshotImage from "../img/photo1.png";

function Home() {
    return (
        <div className="container mt-4" >
            <div className="row align-items-center" style={{ background: "#f0f0f0", padding: "30px" }}>
                <div className="col-md-4 text-center">
                    <img
                        src={headshotImage}
                        alt="Your Headshot"
                        className="img-fluid rounded-circle border"
                        style={{ width: "200px", height: "200px", objectFit: "cover" }}
                    />
                    <h5 className="mt-3">Sara Badini Confalonieri</h5>
                    <p>Front-End Developer</p>
                </div>
                <div className="col-md-8">
                    <div className="mt-4">
                        <h1 className="mt-3">Welcome to my Portfolio!</h1>
                        <p className="lead">
                            Hi, I'm Sara Badini Confalonieri, a passionate Front-End Developer
                            with a strong knack for design. I specialize in creating unique
                            and user-friendly web experiences. My goal is to craft distinctive
                            UI designs that enhance both user experience and search engine
                            visibility.
                        </p>
                    </div>
                </div>
            </div>

            <section>
                <hr className="my-4" />
                <div className="container skills py-5">
                    <h2 id="skills" className="mb-3">My Skills:</h2>
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="skills-item mx-auto mb-lg-0" style={{ width: "120px" }}>
                                <img className="img-fluid rounded-circle mb-3" src="src/img/logo-h.png" alt="" />
                                <h5 className="text-center">HTML</h5>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="skills-item mx-auto mb-lg-0" style={{ width: "120px" }}>
                                <img className="img-fluid rounded-circle mb-3" src="src/img/logo-c.png" alt="" />
                                <h5 className="text-center">CSS</h5>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="skills-item mx-auto mb-lg-0" style={{ width: "120px" }}>
                                <img className="img-fluid rounded-circle mb-3" src="src/img/logo-b.png" alt="" />
                                <h5 className="text-center">BOOTSTRAP</h5>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="skills-item mx-auto mb-lg-0" style={{ width: "120px" }}>
                                <img className="img-fluid rounded-circle mb-3" src="src/img/logo-js.png" alt="" />
                                <h5 className="text-center">JAVASCRIPT</h5>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="skills-item mx-auto mb-lg-0" style={{ width: "120px" }}>
                                <img className="img-fluid rounded-circle mb-3 p-2" src="src/img//logo-r.png" alt="" />
                                <h5 className="text-center">REACT</h5>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="skills-item mx-auto mb-lg-0" style={{ width: "120px" }}>
                                <img className="img-fluid rounded-circle mb-3 p-2" src="src/img/logo-n.png" alt="" />
                                <h5 className="text-center">NODE.JS</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
            </section>

            <div style={{ background: '#f76b8a' }}>
                <section className="aboutme-section py-5" id="about-me">
                    <div className="container aboutme">
                        <div className="row">
                            <div className="col-md-8 mb-3 mb-md-0">
                                <div className="card p-4 h-100">
                                    <div className="card-body">
                                        <h2>About Me</h2>
                                        <hr className="my-4" />
                                        <p>
                                            I'm Sara Badini Confalonieri, a professional Front End Developer.
                                            <br />
                                            My strengths are in: creativity, teamwork, and building projects from ideation to execution.
                                            <br />
                                            I am enthusiastic about everything I do and I always try my best in every given task.
                                            <br />
                                            If you have work related to my skills, please do not hesitate to contact me.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card p-4 h-100">
                                    <div className="card-body">
                                        <h2>Contact Me</h2>
                                        <hr className="my-4" />
                                        
                                        <div className="mb-4">
                                            <strong>Email:</strong> sara.badinic@gmail.com
                                        </div>

                                        <div className="mb-4">
                                            <strong>Phone:</strong> 0754689871
                                        </div>

                                        <div className="mb-4">
                                            <strong>Linkedin:</strong>{" "}
                                            <a href="https://www.linkedin.com/in/sara-badini-confalonieri-594975b4/" target="_blank" rel="noopener noreferrer">
                                                LinkedIn Profile
                                            </a>
                                        </div>

                                        <div className="mb-4">
                                            <strong>GitHub:</strong>{" "}
                                            <a href="https://github.com/Sara-Badini-Confalonieri" target="_blank" rel="noopener noreferrer">
                                                GitHub Profile
                                            </a>
                                        </div>

                                        <div className="mb-4">
                                            <strong>Download Resume:</strong>{" "}
                                            <a
                                                href="../src/img/Sara-Badini-CV-2024.pdf"
                                                download="Sara-Badini-CV-2024.pdf"
                                                className="text-primary"
                                            >
                                                Download PDF
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="py-2" style={{ background: "#385170", color: "white", }}>
                    <div className="container-fluid">
                        <div className="social d-flex justify-content-center">
                            <a href="https://www.linkedin.com/in/sara-badini-confalonieri-594975b4/" className="fa fa-linkedin m-2" style={{ width: '70px' }}></a>
                            <a href="https://github.com/Sara-Badini-Confalonieri" className="fa fa-github m-2" style={{ width: '70px' }}></a>
                        </div>
                        <h5 className="text-center p-3">Made with ❤️️ by Sara</h5>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;
