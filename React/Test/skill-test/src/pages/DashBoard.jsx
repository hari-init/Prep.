import DiagnosisHistory from "../layouts/DiagnosisHistory/DiagnosisHistory";
import DiagnosisList from "../layouts/DiagnosticList/DiagnosticList";
import Header from "../layouts/Header/Header";
import Patients from "../layouts/Patients/Patients";

const DashBoard = ({ patientsData, currentPatient }) => {
  return (
    <div className="bg-[#F6F7F8] h-screen w-full p-[18px] flex flex-col">
      {/* Header component */}
      <Header />

      <div className="w-full h-[88%] flex">
        <div className="w-[25%]  h-full">
          <Patients data={patientsData} />
        </div>
        <div className="w-[50%] flex flex-col">
          <DiagnosisHistory data={currentPatient} />
          {/* <DiagnosisList /> */}
        </div>
        <div className="w-[25%] min-w-[250px] h-full">
          <Patients data={patientsData} />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
