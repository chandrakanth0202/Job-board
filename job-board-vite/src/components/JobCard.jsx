import { Link } from 'react-router-dom';
import { formatSalary } from '../data/jobs.js';

// Small inline badge: a filled amber disc for night shift, a crescent for
// day shift, so each card carries a one-glance visual cue.
function ShiftBadge({ shift }) {
  const isNight = shift === 'Night';
  return (
    <span className="shift-badge" title={`${shift} shift`}>
      <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill={isNight ? '#F5A623' : 'none'}
          stroke="#F5A623"
          strokeWidth="2"
        />
        {!isNight && <path d="M12 2a10 10 0 0 0 0 20V2z" fill="#F5A623" />}
      </svg>
      {shift} shift
    </span>
  );
}

export default function JobCard({ job }) {
  return (
    <Link to={`/jobs/${job.id}`} className="job-card">
      <div className="job-card-header">
        <div>
          <h3 className="job-card-title">{job.title}</h3>
          <p className="job-card-meta">
            {job.company} · {job.location}
          </p>
        </div>
        <ShiftBadge shift={job.shift} />
      </div>

      <p className="job-card-description">{job.description}</p>

      <div className="tag-list">
        {job.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="job-card-footer">
        <span className="salary">
          {formatSalary(job.salaryMin, job.salaryMax)}
        </span>
        <span style={{ color: 'var(--dusk)' }}>
          {job.type} · {job.workMode}
        </span>
      </div>
    </Link>
  );
}
