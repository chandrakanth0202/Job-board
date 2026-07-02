import { useEffect, useState } from "react";

export default function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("applications")) || [];

    setApplications(data);
  }, []);

  if (applications.length === 0) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>My Applications</h1>
        <p>No applications submitted yet.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>My Applications</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th>Job</th>
            <th>Company</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Applied On</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.jobTitle}</td>
              <td>{app.company}</td>
              <td>{app.name}</td>
              <td>{app.email}</td>
              <td>{app.phone}</td>
              <td>{app.status}</td>
              <td>{app.appliedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}