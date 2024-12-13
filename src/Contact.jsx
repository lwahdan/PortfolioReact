import React, { useState } from "react";
function Contact() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`); // Debugging
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit triggered"); // Debugging statement
    const newErrors = {};
    if (!formData.name || formData.name.length < 4) {
      newErrors.name = "Please enter a valid name of at least 4 characters.";
    }
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject || formData.subject.length < 8) {
      newErrors.subject = "Please enter a subject of at least 8 characters.";
    }
    if (!formData.message || formData.message.trim() === "") {
      newErrors.message = "Please enter a message.";
    }
    console.log("Validation errors:", newErrors); // Debugging
    if (Object.keys(newErrors).length > 0) {
      console.log(newErrors);
      setErrors(newErrors); // Update errors state
      return;
    }
    setErrors({});
    setStatus(" Sending...");
    setTimeout(() => {
      setStatus("Your message has been sent. Thank you!");
      setformData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <p>Contact Me</p>
          </div>
          <div className="row">
            <div
              className="col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && (
                      <div className="error-message" style={{ color: "red" }}>
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <div className="error-message" style={{ color: "red" }}>
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  {errors.subject && (
                    <div className="error-message" style={{ color: "red" }}>
                      {errors.subject}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {errors.message && (
                    <div className="error-message" style={{ color: "red" }}>
                      {errors.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  {status && (
                    <div
                      className="sent-message"
                      style={{
                        color: status.includes("Thank you") ? "green" : "red",
                        marginBottom: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {status}
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
