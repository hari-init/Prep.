import { useContext } from "react";
import profileAvatar from "../assets/avatar/profileAvatar.png";
import ShellCard from "../components/ShellCard";
import PatientContext from "../PatientContext";

import birthIcon from "../assets/BirthIcon.svg";
import gender from "../assets/FemaleIcon.svg";
import contact from "../assets/PhoneIcon.svg";
import insur from "../assets/InsuranceIcon.svg";

const UserInfo = () => {
  const { currentPatient } = useContext(PatientContext);
  return (
    <ShellCard propClass="max-w-[367px]  min-w-[300px] h-[760px] mb-8">
      <div className="pt-3 mb-8 flex flex-col content-center items-center">
        <img
          className="mb-6"
          src={profileAvatar}
          alt="profile image"
          style={{ width: "200px", height: "200px" }}
        />
        <h2 className="text-2xl font-semibold">{currentPatient?.name}</h2>
      </div>
      <div className="flex flex-col ">
        <ul>
          <li className="flex items-center mb-6">
            <img src={birthIcon} alt="date of birth icon" className="mr-4" />
            <div className="">
              <p className="text-sm">Date Of Birth</p>
              <p className="text-sm font-bold">
                {currentPatient?.date_of_birth}
              </p>
            </div>
          </li>
          <li className="flex items-center mb-6">
            <img src={gender} alt="gender icon" className="mr-4" />
            <div className="">
              <p className="text-sm">Gender</p>
              <p className="text-sm font-bold">{currentPatient?.gender}</p>
            </div>
          </li>
          <li className="flex items-center mb-6">
            <img src={contact} alt="contact icon" className="mr-4" />
            <div className="">
              <p className="text-sm">Contact Info.</p>
              <p className="text-sm font-bold">
                {currentPatient?.phone_number}
              </p>
            </div>
          </li>
          <li className="flex items-center mb-6">
            <img src={contact} alt="contact icon" className="mr-4" />
            <div className="">
              <p className="text-sm">Contact Info.</p>
              <p className="text-sm font-bold">
                {currentPatient?.emergency_contact}
              </p>
            </div>
          </li>
          <li className="flex items-center mb-6">
            <img src={insur} alt="insurance icon" className="mr-4" />
            <div className="">
              <p className="text-sm">Insurance Provider</p>
              <p className="text-sm font-bold">
                {currentPatient?.insurance_type}
              </p>
            </div>
          </li>
        </ul>
        <button className="bg-[#01F0D0] py-2.5 px-4 rounded-[41px] my-10">
          Show All Information
        </button>
      </div>
    </ShellCard>
  );
};

export default UserInfo;
