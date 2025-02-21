'use client';

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="text-center mt-14">
      <h1>Oops! Something went wrong</h1>
      <p>{error.message}</p>
      <button className="bg-red-500 my-10" onClick={reset}>
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
