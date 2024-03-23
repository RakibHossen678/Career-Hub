import { useParams, useLoaderData, Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { RiMoneyEuroCircleFill } from "react-icons/ri";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  // console.log(id,jobs)
  const job = jobs.find((job) => job.id == id);
  // console.log(job)
  const {
    job_description,
    job_responsibility,
    experiences,
    educational_requirements,
    salary,
    location,
    contact_information,
    job_title
  } = job;
  const { address, email, phone } = contact_information;

  return (
    <div >
      <div className="bg-gradient-to-br from-[#e5e8fb] to-[#f1f0f4] h-44 text-2xl font-semibold flex justify-center items-center">
        <h2>Job Details</h2>
      </div>
      <div className="lg:w-9/12 mx-auto py-28 flex gap-7 flex-col  lg:flex-row px-2">
        <div className="lg:w-8/12">
          <h1 className="pb-4">
            <span className="font-bold">Job Title:</span>{" "}
            <span>{job_title}</span>
          </h1>
          <h1 className="pb-4">
            <span className="font-bold">Job Description:</span>{" "}
            <span>{job_description}</span>
          </h1>
          <h1 className="pb-4">
            <span className="font-bold">Job Responsibility:</span>{" "}
            <span>{job_responsibility}</span>
          </h1>
          <h1 className="pb-4">
            <span className="font-bold">Educational Requirement:</span>{" "}
            <p>{educational_requirements}</p>
          </h1>
          <h1 className="pb-4">
            <span className="font-bold">Experiences:</span> <p>{experiences}</p>
          </h1>
        </div>
        <div className="lg:w-4/12 px-2">
          <div className="bg-blue-100 py-4 px-3 rounded-xl">
            <h2 className="font-bold border-b-2 border-gray-400 pb-2">Job Details</h2>
            <div className=" py-3">
              <p className="pb-2">
                <span className="flex items-center space-x-1">
                  <CiLocationOn className="text-2xl" />
                  <p>{location}</p>
                </span>
              </p>
              <p className="">
                <span className="flex items-center space-x-1">
                  <RiMoneyEuroCircleFill className="text-2xl" />
                  <p>Salary: {salary}</p>
                </span>
              </p>
            </div>
            <div>
              <h2 className="font-bold border-b-2 border-gray-400 pb-3">Contact Information</h2>
              <p className="flex space-x-1 py-3">
                <h2 className="font-semibold">Phone: </h2>
                <p>{phone}</p>
              </p>
              <p className="flex space-x-1 pb-2">
                <h2 className="font-semibold">Email:</h2>
                <p>{email}</p>
              </p>
              <h1 className="flex space-x-1">
                <span className="font-semibold">Address:</span>
                <p>{address}</p>
              </h1>
            </div>
          </div>
          <div className="py-3">
          <Link to='/' className="" >
          <button className="flex justify-start bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-full  px-3 py-3 text-white font-bold rounded-lg">
            <p className="text-center w-full">Apply Now</p>
          </button>
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
