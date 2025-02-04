import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate("/")
    }

  return (
    <div className="bg-white flex justify-center items-center h-screen">
      <b className="text-3xl text-black p-2 mb-1.5"> PAGE NOT FOUND- 404 </b>
      <div className="p-2 m-2">
      <button onClick={handleHome}>Go to Home</button>
      </div>
      
    </div>
  );
};

export default Error;
