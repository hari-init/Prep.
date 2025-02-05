import { useContext } from "react";
import searchIcon from "../assets/search.svg";
import ShellCard from "../components/ShellCard";
import PatientContext from "../PatientContext";
import UserCard from "../components/UserCard";

/**
 * @function PatientsList layout which holds Patient list (info data)
 * @constant patientsData - Data from Context
 */

const PatientsList = () => {
  const { patientsData } = useContext(PatientContext);
  return (
    <ShellCard propClass="2xl:max-w-[367px] 2xl:min-w-[300px] w-full lg:w-[25%]">
      <div className="mb-8 text-2xl flex justify-between">
        <h2 className="font-semibold">Patients</h2>
        <img src={searchIcon} alt="search icon" />
      </div>

      <ul className="h-60 lg:h-[1054px] overflow-scroll pr-1.5 overflow-x-auto">
        {patientsData.map((patient, index) => {
          return (
            <li key={index} className="flex mb-8">
              <UserCard
                title="Patients"
                avatar={patient.profile_picture}
                name={patient.name}
                description={`${patient.gender}, ${patient.age}`}
                icon="true"
              />
            </li>
          );
        })}
      </ul>
    </ShellCard>
  );
};
export default PatientsList;
