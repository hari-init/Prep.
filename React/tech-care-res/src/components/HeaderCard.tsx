import headAvatar from "../assets/avatar/headAvatar.png";
import setting from "../assets/setting.svg";
import more from "../assets/more.svg";
import UserCard from "./UserCard";

const HeaderCard = () => {
  return (
    <>
      <div className="flex items-center">
        <UserCard avatar={headAvatar} />
        <div className="border-l border-[#EDEDED] h-full ml-3"></div>
        <img
          src={setting}
          alt="Profile setting"
          className="mx-3"
          style={{ height: "20px", width: "20px" }}
        />
        <img src={more} alt="More setting" style={{ height: "20px" }} />
      </div>
    </>
  );
};

export default HeaderCard;
