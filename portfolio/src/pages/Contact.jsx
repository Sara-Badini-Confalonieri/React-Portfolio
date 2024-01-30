import React from 'react';

function Contact() {
  return (
    <div className="container mt-4">
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out to me through the following contact information.
      </p>

      <div>
        <strong>Email:</strong> sara.badiniconfalonieri@gmail.com
      </div>

      <div>
        <strong>Linkedin:</strong> https://www.linkedin.com/in/sara-badini-confalonieri-594975b4/
      </div>

      <div>
        <strong>GitHub:</strong> https://github.com/Sara-Badini-Confalonieri
        <hr className="my-4" />
      </div>

      <div className="mt-4 p-5" style={{ background: '#9fd3c7' }}>
        <h2>Contact Form</h2>
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