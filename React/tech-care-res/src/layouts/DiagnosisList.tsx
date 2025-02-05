import { useContext } from "react";
import PatientContext from "../PatientContext";
import ShellCard from "../components/ShellCard";

interface Item {
  name: string;
  description: string;
  status: string;
}

interface Patient {
  diagnostic_list: Item[];
}

const DiagnosisList = () => {
  const { currentPatient } = useContext(PatientContext) as {
    currentPatient: Patient;
  };

  return (
    <ShellCard propClass="h-[450px]">
      <div className="mb-8 text-2xl flex justify-between">
        <h2 className="font-semibold">Diagnostic List</h2>
      </div>
      <div className="flex justify-between bg-[#F6F7F8] p-4 rounded-3xl font-semibold">
        <p className="w-[30%]">Problem/Diagnosis</p>
        <p className="w-[50%]">Description</p>
        <p className="w-[20%]">Status</p>
      </div>
      <ul>
        {currentPatient &&
          currentPatient.diagnostic_list &&
          currentPatient.diagnostic_list.map((item: Item, index: number) => (
            <li
              key={index}
              className="flex justify-between p-4 text-sm font-normal"
            >
              <p className="w-[30%] ">{item.name}</p>
              <p className="w-[50%]">{item.description}</p>
              <p className="w-[20%]">{item.status}</p>
            </li>
          ))}
      </ul>
    </ShellCard>
  );
};

export default DiagnosisList;
