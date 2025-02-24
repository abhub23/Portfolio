import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  const handleHome = () => {
    router.push("/")
  };

  return (
    <div className="bg-white dark:bg-black flex flex-col justify-center items-center h-screen">
      <div className="text-3xl text-black dark:text-white p-2 mb-1.5">
        {" "}
        PAGE NOT FOUND - 404{" "}
      </div>
      <div className="p-2">
        <button
          className="border-4 px-3 py-2 rounded-2xl bg-white cursor-pointer text-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white "
          onClick={handleHome}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
