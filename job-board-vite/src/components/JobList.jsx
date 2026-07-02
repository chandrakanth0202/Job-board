import { useMemo, useState } from 'react';
import JobCard from './JobCard.jsx';
import { jobs } from '../data/jobs.js';

export default function JobList() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [shift, setShift] = useState('');

  const categories = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.category))),
    []
  );

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const matchesQuery =
        query.trim() === '' ||
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === '' || job.category === category;
      const matchesShift = shift === '' || job.shift === shift;
      return matchesQuery && matchesCategory && matchesShift;
    });
  }, [query, category, shift]);

  return (
    <section>
      <div className="filters">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title or company…"
          aria-label="Search jobs"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter by category"
        >
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          aria-label="Filter by shift"
        >
          <option value="">Any shift</option>
          <option value="Day">Day shift</option>
          <option value="Night">Night shift</option>
        </select>
      </div>

      <p className="results-count">
        {filtered.length} {filtered.length === 1 ? 'role' : 'roles'} open
      </p>

      {filtered.length === 0 ? (
        <div className="empty-state">
          No roles match your filters yet. Try widening your search.
        </div>
      ) : (
        <div className="job-grid">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </section>
  );
}
