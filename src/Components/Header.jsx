import Logo from "../assets/Images/logo.png";
import {
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiHome,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderList from "./HeaderList";
import ProfileImage from "../assets/Images/profile.jpg";

const Header = () => {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center  gap-8">
        <img
          src={Logo}
          alt="website-logo"
          className="w-[80px] object-cover md:w-[120px]"
        />
        {menu.map((item) => (
          <HeaderList name={item.name} Icon={item.icon} />
        ))}
      </div>
      <div>
        <img
          src={ProfileImage}
          alt="avatar"
          className="w-[40px] rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
