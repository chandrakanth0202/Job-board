import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getJobById } from "../data/jobs.js";

export default function Apply() {
  const { id } = useParams();
  const job = getJobById(id);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    coverNote: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim()) {
      setError("Name and Email are required.");
      return;
    }

    // Create application object
    const application = {
      id: Date.now(),
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      location: job.location,
      name: form.name,
      email: form.email,
      phone: form.phone,
      coverNote: form.coverNote,
      appliedDate: new Date().toLocaleString(),
      status: "Applied",
    };

    // Get existing applications
    const existingApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    // Save new application
    existingApplications.push(application);

    localStorage.setItem(
      "applications",
      JSON.stringify(existingApplications)
    );

    setSubmitted(true);
  }

  if (!job) {
    return (
      <div className="not-found">
        <h1 className="detail-title">Job not found</h1>

        <Link to="/" className="back-link">
          ← Back to Jobs
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="form-success">
        <h1>🎉 Application Submitted Successfully!</h1>

        <p>
          Thank you <strong>{form.name}</strong>.
        </p>

        <p>
          Your application for
          <strong> {job.title}</strong> at
          <strong> {job.company}</strong> has been submitted.
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link to="/applications" className="btn-primary">
            View My Applications
          </Link>

          <Link
            to="/"
            className="btn-secondary"
            style={{ marginLeft: "15px" }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Link to={`/jobs/${job.id}`} className="back-link">
        ← Back to {job.title}
      </Link>

      <div className="form-intro">
        <h1>Apply for {job.title}</h1>

        <p>
          {job.company} • {job.location}
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row form-row-2">
          <div>
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div>
          <label>Phone Number</label>

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
          />
        </div>

        <div>
          <label>Cover Letter</label>

          <textarea
            rows="6"
            name="coverNote"
            value={form.coverNote}
            onChange={handleChange}
            placeholder="Tell us why you're a good fit..."
          />
        </div>

        {error && (
          <p className="form-error">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="btn-primary"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}