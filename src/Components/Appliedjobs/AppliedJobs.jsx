import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";
const AppliedJobs = () => {
  const [appliedJobs, setAppliedJObs] = useState([]);
  const [display,setDisplay]=useState([]);
  // console.log(display)
  const handleJObsFilter=Filter=>{
    if(Filter==='All'){
      setDisplay(appliedJobs)
    }
    else if(Filter==='remote'){
      const remoteJobs=appliedJobs.filter(job=>job.remote_or_onsite ==='Remote')
      // console.log(remoteJobs)
      setDisplay(remoteJobs)
      // console.log(display)
    }
    else if (Filter==='onsite'){
      const onsiteJObs=appliedJobs.filter(job=>job.remote_or_onsite==='Onsite')
      // console.log(onsiteJObs)
      setDisplay(onsiteJObs)
      console.log(display)
    }
  }
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
      setDisplay(jobsApplied)
    }
  }, []);
  // console.log(display);
  return (
    <div >
      <div className="bg-gradient-to-br from-[#e5e8fb] to-[#f1f0f4] h-44 text-2xl font-semibold flex justify-center items-center">
        <h2>Applied Jobs</h2>
      </div>
      <div className="dropdown flex justify-end w-10/12 pt-7  py-20">
        <div tabIndex={0} role="button" className="btn m-1 text-lg">
          Filter
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44"
        >
          <li onClick={()=>handleJObsFilter('All')}>
            <a>All</a>
          </li>
          <li onClick={()=>handleJObsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=>handleJObsFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </div>
      <div className="w-9/12 mx-auto ">
        {display.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
