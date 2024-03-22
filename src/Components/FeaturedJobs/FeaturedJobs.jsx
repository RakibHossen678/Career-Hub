import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
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
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <div className="flex justify-center items-center mb-16 ">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="flex justify-start bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-32 px-3 py-3 text-white font-bold rounded-lg"
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
