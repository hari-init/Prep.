import { useContext } from "react";
import ArrowUp from "../assets/ArrowUp.svg";
import ArrowDown from "../assets/ArrowDown.svg";
import PatientContext from "../PatientContext";

interface ReportTypes {
  data?: object[];
  name: string;
  colorClass: string;
}

const BPReport = () => {
  const { currentPatient } = useContext(PatientContext);
  return (
    <>
      <div className="ml-6 w-[200px]">
        <div>
          <div className="flex items-center mb-2">
            <div className={`bg-[#E66FD2] w-3 h-3 rounded-2xl mr-2 `}></div>
            Systolic
          </div>
          <h2 className="font-semibold text-lg  mb-2">
            {currentPatient?.diagnosis_history &&
              currentPatient.diagnosis_history[0]?.blood_pressure?.systolic
                ?.value}
          </h2>
          <p className="font-extralight text-sm mb-2 flex">
            <img className="mr-2" src={ArrowUp} alt="arrow up icon" />
            {currentPatient?.diagnosis_history &&
              currentPatient.diagnosis_history[0]?.blood_pressure?.systolic
                ?.levels}
          </p>
        </div>
        <div className="w-full border-b border-b-gray-300 my-4"></div>
        <div>
          <div className="flex items-center mb-2">
            <div className={`bg-[#8C6FE6] w-3 h-3 rounded-2xl mr-2 `}></div>
            Diastolic
          </div>
          <h2 className="font-semibold text-lg  mb-2">
            {currentPatient?.diagnosis_history &&
              currentPatient.diagnosis_history[0]?.blood_pressure?.diastolic
                ?.value}
          </h2>
          <p className="font-extralight text-sm mb-2 flex">
            <img className="mr-2" src={ArrowDown} alt="arrow down icon" />
            {currentPatient?.diagnosis_history &&
              currentPatient.diagnosis_history[0]?.blood_pressure?.diastolic
                ?.levels}
          </p>
        </div>
      </div>
    </>
  );
};
export default BPReport;
