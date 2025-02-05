import testLogo from "../../assets/TestLogo.svg";

//Avatar
import srDrHeader from "../../assets/avatar/sr-dr-header.png";
import MoreSettings from "../../components/MoreSettings/MoreSettings";

//setting

import InfoCard from "../../components/Cards/InfoCard/InfoCard";
import NavList from "../../components/Cards/NavList/NavList";

const Header = () => {
  return (
    <header className="mb-8">
      <div className="py-[12px] px-8 w-full shadow bg-white h-[72px] rounded-[70px] flex justify-between">
        {/* <div className=""> */}
        {/* Site Logo */}
        <img src={testLogo} alt="Page Logo" />

        {/* Navigation list */}
        <NavList />

        {/* Info card and more setting Group */}
        <div className="flex">
          <InfoCard
            avatar={srDrHeader}
            name="Dr. Jose Simmons"
            role="General Practitioner"
          />
          <MoreSettings />
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
