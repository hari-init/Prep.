import { useContext } from "react";
import searchIcon from "../assets/search.svg";
import ShellCard from "../components/ShellCard";
import PatientContext from "../PatientContext";
import UserCard from "../components/UserCard";

const PatientsList = () => {
  const { patientsData } = useContext(PatientContext);
  return (
    <ShellCard propClass="md:max-w-[367px]  md:min-w-[300px]">
      <div className="mb-8 text-2xl flex justify-between">
        <h2 className="font-semibold">Patients</h2>
        <img src={searchIcon} alt="search icon" />
      </div>

      <ul className=" h-60 md:h-[1054px] overflow-scroll">
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
              {/* <img src={moreH} alt="More patients options" className="mr-2" /> */}
            </li>
          );
        })}
      </ul>
    </ShellCard>
  );
};
export default PatientsList;
