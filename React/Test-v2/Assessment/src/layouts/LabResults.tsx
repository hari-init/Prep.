import { useContext } from "react";
import PatientContext from "../PatientContext";
import ShellCard from "../components/ShellCard";
import download from "../assets/donwload.svg";

/**
 * @function LabResults layout which holds Lab result list.
 * @constant currentPatient - Data from Context
 */

const LabResults = () => {
  const { currentPatient } = useContext(PatientContext);
  return (
    <ShellCard propClass="h-[365px]">
      <div className="mb-8 text-2xl flex justify-between">
        <h2 className="font-semibold">Lab Results</h2>
      </div>
      <ul>
        {currentPatient?.lab_results.map((result) => {
          return (
            <li className="font-normal text-sm flex justify-between py-2.5 px-4 first:bg-[#F6F7F8]">
              {result}
              <img src={download} alt="download icon" />
            </li>
          );
        })}
      </ul>
    </ShellCard>
  );
};

export default LabResults;
