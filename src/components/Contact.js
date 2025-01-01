import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-awesome-reveal";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Unauthorized: Please log in first.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/feedback-submit",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Feedback submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      const errorMsg =
        error.response?.status === 401
          ? error.response.data.error || "Unauthorized: Invalid token."
          : "Failed to submit feedback.";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="container  my-3">
      <ToastContainer position="top-right" />
      <div className="text-center">
        <h1 className="text-danger mb-3">Get in Touch</h1>
        <p className="text-muted fs-5">
          Have questions? Send us your message or connect with us directly.
        </p>
      </div>
      <div className="justify-content-center d-flex align-items-ceneter flex-wrap gap-4">
          {/* Contact Information */}
          <div className="col-12 col-md-10 col-lg-5 mb-4">
            <ul className="list-group shadow">
              <li className="list-group-item">
                <h6>
                  <FaEnvelope className="me-2 text-danger" />
                  Email:{" "}
                  <span className="text-dark">devsirtutorials@gmail.com</span>
                </h6>
              </li>
              <li className="list-group-item">
                <h6>
                  <FaPhone className="me-2 text-success" />
                  Phone:{" "}
                  <span className="text-dark">+18866224439 / 9594750338</span>
                </h6>
              </li>
              <li className="list-group-item">
                <h6>
                  <FaMapMarkerAlt className="me-2 text-primary" />
                  Address:
                  <span className="text-dark">
                    Ganeshleela Soc. B wing Ground floor, opposite to Narepark
                    ground, Nana palkar Lane Parel, Mumbai 400012
                  </span>
                </h6>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="col-12 col-md-10 col-lg-5">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title text-center text-danger">
                  Send Us a Message
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">
                      <FaUser className="me-2" />
                      Your Name
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">
                      <FaEnvelope className="me-2" />
                      Email Address
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Type your message here"
                      style={{ height: "150px" }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">
                      <FaPaperPlane className="me-2" />
                      Message
                    </label>
                  </div>

                  <button type="submit" className="btn btn-danger w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
