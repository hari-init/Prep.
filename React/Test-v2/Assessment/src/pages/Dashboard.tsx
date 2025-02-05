import DiagnosisHistory from "../layouts/DiagnosisHistory";
import DiagnosisList from "../layouts/DiagnosisList";
import Header from "../layouts/Header";
import LabResults from "../layouts/LabResults";
import PatientsList from "../layouts/PatientsList";
import UserInfo from "../layouts/UserInfo";

/**
 * @function Dashboard - The Main page that renders the whole structure
 * of the page
 */

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex-col lg:flex-row flex pb-8 justify-between">
        <PatientsList />
        <div className="my-4 lg:mx-8 w-full lg:w-[50%]">
          <DiagnosisHistory />
          <DiagnosisList />
        </div>
        <div className="lg:w-[25%]">
          <UserInfo />
          <LabResults />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
