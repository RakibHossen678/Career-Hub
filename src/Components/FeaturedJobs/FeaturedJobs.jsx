import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <h2 className="text-5xl font-medium text-center py-4">Featured Jobs</h2>
      <p className="text-center py-2">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="py-20 grid lg:grid-cols-2 gap-20 grid-cols-1">
        {
        jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
