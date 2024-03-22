import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl py-4 text-error font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to='/' className="bg-error my-3 px-6 rounded-lg text-white font-bold py-3">Go Back</Link>
      
    </div>
  );
};

export default ErrorPage;
