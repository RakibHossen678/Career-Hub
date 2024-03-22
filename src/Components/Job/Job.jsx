import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
const Job = ({ job }) => {
  const { logo, job_title, company_name, location, salary,remote_or_onsite,job_type } = job;
  return (
    <div className="card  bg-base-100 border-2 px- py-2 ">
      <figure className="w-36 h-14 mt-2 ml-8">
        <img className="w-full h-full" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p className="py-2">{company_name}</p>
        <div className="card-actions justify-start py-2 text-[#7E90FE] ">
          <div className="badge badge-outline  "><p className="">{remote_or_onsite}</p></div>
          <div className="badge badge-outline">{job_type}</div>
        </div>
        <div className="flex py-2">
          <p>
            <span className='flex items-center space-x-1'>
            <CiLocationOn className='text-2xl'/>
              <p>{location}</p>
            </span>
          </p>
          <p className="">
            <span className='flex items-center space-x-1'>
            <RiMoneyEuroCircleFill className='text-2xl' />
              <p>Salary: {salary}</p>
            </span>
          </p>
        </div>
        <button className="flex justify-start bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-32 px-3 py-3 text-white font-bold rounded-lg">
          View Details
        </button>
      </div>
    </div>
  );
};
Job.propTypes ={
    job:PropTypes.objectOf.isRequired
}
export default Job;
