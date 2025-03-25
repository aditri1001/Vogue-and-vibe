import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      <div className="max-w-md w-full space-y-6">
        {/* 404 Illustration */}
        <div className="text-8xl font-bold text-indigo-600 animate-bounce">404</div>
        
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Page Not Found
        </h1>
        
        {/* Description */}
        <p className="text-lg text-gray-600">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Optional decorative element */}
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-indigo-300 rounded-full"></div>
        </div>
        
        {/* Home button */}
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Return to Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 -mr-1 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        </div>
        
        {/* Optional extra help text */}
        <p className="text-sm text-gray-500 mt-8">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  );
};

export default NotFound;