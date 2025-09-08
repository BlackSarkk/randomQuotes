// import { useNavigate } from "react-router-dom";
import { GIT } from "../icons/gitIcon";
import { IG } from "../icons/IgIcon";
import { LN } from "../icons/LnIcon";
import { X } from "../icons/xIcon";
import Buttton from "./Buttton";

const Footer = () => {
  // const navigate = useNavigate();

  // const pages = [
  //   { text: "Contact", path: "/contact" },
  //   { text: "Support", path: "/support" },
  // ];

  const socials = [
    { id: "github", icon: <GIT size="xs" />, url: "https://github.com/BlackSarkk" },
    { id: "linkedin", icon: <LN size="xs" />, url: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" },
    { id: "instagram", icon: <IG size="xs" />, url: "https://www.instagram.com/obscure_dev/" },
    { id: "x", icon: <X size="xs" />, url: "https://x.com/rahul_dutta_34" },
  ];

  return (
    <div className="flex items-center justify-center w-screen h-[4rem] bg-transparent">
      <div className="flex flex-row-reverse w-screen h-full bg-white px-[11.44rem] justify-between items-center">
        {/* <div className="flex items-center justify-center gap-5">
          {pages.map(({ text, path }) => (
            <Buttton
              key={text}
              size="sm"
              text={text}
              varient="secondary"
              onClick={() => navigate(path)}
            />
          ))}
        </div> */}

        <div className="flex items-center justify-center gap-7">
          {socials.map(({ id, icon, url }) => (
            <Buttton
              key={id}
              size="sm"
              varient="secondary"
              onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
              endIcon={icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
