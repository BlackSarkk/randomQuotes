import { FB } from "../icons/fbIcon";
import { IG } from "../icons/IgIcon";
import { LN } from "../icons/LnIcon";
import { X } from "../icons/xIcon";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-screen h-[4rem] bg-transparent">
      <div className="flex w-screen h-full bg-white px-[11.44rem] justify-between items-center">
        <div className="flex"> Contact Contact Support</div>
        <div className="flex items-center justify-center gap-7">
          <button>
            <a href="https://facebook.com"><FB size="xs" /></a>
          </button>

          <button>
            <a href="https://x.com"><X size="xs" /></a>
          </button>

          <button>
            <a href="https://instagram.com"><IG size="xs" /></a>
          </button>

          <button>
            <a href="https://linkedin.com"><LN size="xs" /></a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
