import user from "../../assets/images/user.png";
const Banner = () => {
  return (
    <div className="hero min-h-[calc(100vh-76px)] bg-gradient-to-br from-[#e5e8fb] to-[#f1f0f4] ">
      <div className="hero-content flex-col gap-7 lg:flex-row-reverse w-9/12 mx-auto items-center">
        <div className="h-96">
          <img
            src={user}
            className="max-w-xl  translate-x-6 -translate-y-6  rounded-lg "
          />
        </div>
        <div className="max-w-lg">
          <div>
            <h1 className="text-7xl leading-  font-bold">
              One Step Closer To Your{" "}
              <span className="bg-gradient-to-r from-[#7E90FE] via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
                Dream Job
              </span>
            </h1>
          </div>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <a
            href="#_"
            className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-[#7E90FE] rounded-md hover:bg-[#9873FF] sm:w-auto sm:mb-0"
            data-primary="green-400"
            data-rounded="rounded-2xl"
            data-primary-reset="{}"
          >
            Get Started
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
