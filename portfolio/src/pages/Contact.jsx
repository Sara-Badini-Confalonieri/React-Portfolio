import React from 'react';

function Contact() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Contact Me</h1>
      <p>
        Feel free to reach out to me through the following contact information.
      </p>

      <div className="mb-4">
        <strong>Email:</strong> sara.badiniconfalonieri@gmail.com
      </div>

      <div className="mb-4">
        <strong>Linkedin: </strong>https://www.linkedin.com/in/sara-badini-confalonieri-594975b4/
      </div>

      <div className="mb-4">
        <strong>GitHub: </strong>https://github.com/Sara-Badini-Confalonieri
        
      </div>

      <div className="mb-4">
        <strong>Download Resume:</strong>{" "}
        <a
          href="src/img/Sara-Badini-CV-2024.pdf"
          download="Sara-Badini-CV-2024.pdf"
        >
          Download PDF
        </a>
      </div>

      <hr className="my-4" />

      <div className="mt-4 p-4" style={{ background: '#f76b8a', color: 'white' }}>
        <h2 className="mb-4">Contact Form</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input type="text" className="form-control" id="name" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input type="email" className="form-control" id="email" />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea className="form-control" id="message" rows="4"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
