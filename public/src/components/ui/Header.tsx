import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../icons/LogoIcon";
import Button from "./Buttton"; // Fixed import

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center w-screen h-[6rem] bg-transparent">
      <div className="flex w-[119.25rem] h-[5rem] bg-white ">
        <Button
          size="lg"
          varient="tertiary"
          startIcon={<LogoIcon size="md" />}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Header;
