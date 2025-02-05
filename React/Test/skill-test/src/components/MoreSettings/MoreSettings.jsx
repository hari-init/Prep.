import setting from "../../assets/setting.svg";
import more from "../../assets/more.svg";

const MoreSettings = () => {
  return (
    <div className="border-l border-gray-400 flex items-center">
      <img
        src={setting}
        alt="Profile setting"
        className="mx-3"
        style={{ height: "20px", width: "20px" }}
      />
      <img src={more} alt="More setting" style={{ height: "20px" }} />
    </div>
  );
};
export default MoreSettings;
