import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900">
      <div className=" text-white font-bold text-4xl">
        "You weren't supposed to see this… yet 👀
      </div>

      <button onClick={handleClick} className=" flex items-center justify-center gap-4 text-white font-bold text-4xl cursor-pointer border-amber-50 border-2 rounded-md p-3 mt-4">
        <ArrowLeft className="w-6 h-6" /> back to safety 
      </button>

      <div></div>
    </div>
  );
};

export default ErrorPage;
