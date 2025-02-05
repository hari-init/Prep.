import overViewIcon from "../../../assets/home.svg";
import patientsIcon from "../../../assets/group.svg";
import scheduleIcon from "../../../assets/calender.svg";
import messageIcon from "../../../assets/chat.svg";
import transactionsIcon from "../../../assets/cc.svg";

const NAVLIST = [
  { navTitle: "Overview", icon: overViewIcon },
  { navTitle: "Patients", icon: patientsIcon },
  { navTitle: "Schedule", icon: scheduleIcon },
  { navTitle: "Message", icon: messageIcon },
  { navTitle: "Transactions", icon: transactionsIcon },
];

const NavList = () => {
  return (
    <div className="flex items-center justify-center text-sm">
      <ul className="flex items-center justify-center">
        {NAVLIST &&
          NAVLIST.map((item) => {
            return (
              <li key={item.navTitle} className="flex mr-10">
                <img
                  src={item.icon}
                  alt={`${item.navTitle} icon`}
                  height="17px"
                  className="mr-2"
                />
                <p>{item.navTitle}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default NavList;
