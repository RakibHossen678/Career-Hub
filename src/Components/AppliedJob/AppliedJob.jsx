import { Link } from "react-router-dom";

const AppliedJob = ({ appliedJob }) => {
  const {
    id,
    logo,
    job_title,
    salary,
    company_name,
    remote_or_onsite,
    location,
    job_type,
  } = appliedJob;
  // console.log(appliedJob);
  return (
    <div className="my-4 py-4 px-3 flex justify-between items-center border-2 ">
      <div className="flex items-center space-x-4">
        <div>
          <img className="w-44" src={logo} alt="" />
        </div>
        <div>
          <h1 className="font-semibold">{job_title}</h1>
          <p className="py-1">{company_name}</p>
          <span className="flex space-x-2 my-2">
            <p className="border-2 px-2 rounded-lg">{remote_or_onsite}</p>
            <p className="border-2 px-2 rounded-lg m">{job_type}</p>
          </span>
          <p>
            <span>{location}</span>
            <span>{salary}</span>
          </p>
        </div>
      </div>
      <Link to={`job/${id}`}>
        <button className="flex justify-start bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-32 px-3 py-3 items-center text-white font-bold rounded-lg">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default AppliedJob;
