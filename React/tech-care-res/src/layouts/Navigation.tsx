import overViewIcon from "../assets/home.svg";
import patientsIcon from "../assets/group.svg";
import scheduleIcon from "../assets/calender.svg";
import messageIcon from "../assets/chat.svg";
import transactionsIcon from "../assets/cc.svg";

const NAV_LIST = [
  { navTitle: "Overview", icon: overViewIcon, active: false },
  { navTitle: "Patients", icon: patientsIcon, active: true },
  { navTitle: "Schedule", icon: scheduleIcon, active: false },
  { navTitle: "Message", icon: messageIcon, active: false },
  { navTitle: "Transactions", icon: transactionsIcon, active: false },
];

const NavigationList = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center justify-center text-sm">
      {NAV_LIST &&
        NAV_LIST.map((item) => {
          return (
            <li
              key={item.navTitle}
              className={`${
                item.active ? "bg-[#01F0D0] py-2.5 px-4 rounded-[41px]" : ""
              } flex my-3.5 md:mr-10`}
            >
              <img
                src={item.icon}
                alt={`${item.navTitle} icon`}
                style={{ height: "17px" }}
                className="mr-2"
              />
              <p>{item.navTitle}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default NavigationList;
