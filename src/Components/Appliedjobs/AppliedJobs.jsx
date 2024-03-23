import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
const AppliedJobs = () => {
  const [appliedJobs, setAppliedJObs] = useState([]);
  const Jobs = useLoaderData();
  // console.log(Jobs)
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    // console.log(storedJobIds)
    if (Jobs.length > 0) {
      const jobsApplied = Jobs.filter((job) => storedJobIds.includes(job.id));
      // const jobsApplied=[];
      // console.log(jobsApplied)s
      setAppliedJObs(jobsApplied);
    }
  }, []);
  // console.log(appliedJobs)
  return (
    <div>
      <div className="bg-gradient-to-br from-[#e5e8fb] to-[#f1f0f4] h-44 text-2xl font-semibold flex justify-center items-center">
        <h2>Applied Jobs</h2>
      </div>
      <div className="w-9/12 max-auto">
        <div></div>
      </div>
    </div>
  );
};

export default AppliedJobs;
