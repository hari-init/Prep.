import { useContext } from "react";
import ShellCard from "../components/ShellCard";
import PatientContext from "../PatientContext";
import InfoItem from "../components/InfoItem";
import profileAvatar from "../assets/avatar/profileAvatar.png";
import birthIcon from "../assets/BirthIcon.svg";
import gender from "../assets/FemaleIcon.svg";
import contact from "../assets/PhoneIcon.svg";
import insur from "../assets/InsuranceIcon.svg";

/**
 * @function UserInfo renders the list of user info like DOB, Gender, etc.
 * @constant currentPatient - Data from Context
 */

const UserInfo = () => {
  const { currentPatient } = useContext(PatientContext);

  return (
    <ShellCard propClass="2xl:max-w-[367px] 2xl:min-w-[300px] mb-8">
      <div className="pt-3 mb-8 flex flex-col content-center items-center">
        <img
          className="mb-6 object-contain"
          src={profileAvatar}
          alt="profile image"
          style={{ width: "200px", height: "200px" }}
        />
        <h2 className="text-2xl font-semibold">{currentPatient?.name}</h2>
      </div>
      <div className="flex flex-col ">
        <ul>
          <InfoItem
            icon={birthIcon}
            label="Date Of Birth"
            value={currentPatient?.date_of_birth}
          />
          <InfoItem
            icon={gender}
            label="Gender"
            value={currentPatient?.gender}
          />
          <InfoItem
            icon={contact}
            label="Contact Info."
            value={currentPatient?.phone_number}
          />
          <InfoItem
            icon={contact}
            label="Emergency Contacts"
            value={currentPatient?.emergency_contact}
          />
          <InfoItem
            icon={insur}
            label="Insurance Provider"
            value={currentPatient?.insurance_type}
          />
        </ul>
        <button className="bg-[#01F0D0] py-2.5 px-4 rounded-[41px] my-10">
          Show All Information
        </button>
      </div>
    </ShellCard>
  );
};

export default UserInfo;
