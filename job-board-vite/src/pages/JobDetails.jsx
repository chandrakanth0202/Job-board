import { Link, useParams } from 'react-router-dom';
import { getJobById, formatSalary } from '../data/jobs.js';

export default function JobDetails() {
  const { id } = useParams();
  const job = getJobById(id);

  if (!job) {
    return (
      <div className="not-found">
        <h1 className="detail-title">Job not found</h1>
        <p className="hero-subtitle">
          This listing may have been removed or the link is incorrect.
        </p>
        <Link to="/" className="back-link">
          ← Back to all jobs
        </Link>
      </div>
    );
  }

  return (
    <article>
      <Link to="/" className="back-link">
        ← Back to all jobs
      </Link>

      <div className="detail-header">
        <div>
          <h1 className="detail-title">{job.title}</h1>
          <p className="detail-meta">
            {job.company} · {job.location}
          </p>
        </div>
        <span className="shift-badge" title={`${job.shift} shift`}>
          {job.shift} shift
        </span>
      </div>

      <div className="detail-tags">
        {job.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="detail-stats">
        <div>
          <p className="stat-label">Type</p>
          <p className="stat-value">{job.type}</p>
        </div>
        <div>
          <p className="stat-label">Mode</p>
          <p className="stat-value">{job.workMode}</p>
        </div>
        <div>
          <p className="stat-label">Shift</p>
          <p className="stat-value">{job.shift}</p>
        </div>
        <div>
          <p className="stat-label">Salary</p>
          <p className="stat-value salary">
            {formatSalary(job.salaryMin, job.salaryMax)}
          </p>
        </div>
      </div>

      <div className="detail-section">
        <h2>About the role</h2>
        <p>{job.description}</p>
      </div>

      <div className="detail-section">
        <h2>Responsibilities</h2>
        <ul>
          {job.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="detail-section">
        <h2>Requirements</h2>
        <ul>
          {job.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <Link to={`/apply/${job.id}`} className="btn-primary apply-btn">
        Apply for this role
      </Link>
    </article>
  );
}
