import DiagnosisHistory from "../layouts/DiagnosisHistory";
import DiagnosisList from "../layouts/DiagnosisList";
import Header from "../layouts/Header";
import LabResults from "../layouts/LabResults";
import PatientsList from "../layouts/PatientsList";
import UserInfo from "../layouts/UserInfo";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row pb-8 justify-between">
        <PatientsList />
        <div className=" my-6 md:mx-8">
          <DiagnosisHistory />
          {/* <DiagnosisList /> */}
        </div>
        <div>
          {/* <UserInfo /> */}
          {/* <LabResults /> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
