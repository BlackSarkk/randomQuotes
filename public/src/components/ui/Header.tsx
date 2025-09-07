import { LogoIcon } from "../icons/LogoIcon"

const Header = () => {
  return (
    <div className="flex items-center justify-center w-screen h-[6.01rem] bg-transparent">
        <div className="flex w-[119.25rem] h-[5.13rem] bg-white px-10">
          <LogoIcon size="md"/>
        </div>
    </div>
  )
}

export default Header
