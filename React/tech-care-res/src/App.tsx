import { useState, useEffect, createContext } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import PatientContext from "./PatientContext";
import { Patients, PatientData } from "./patientTypes";

const API_KEY = `Y29hbGl0aW9uOnNraWxscy10ZXN0`;

function App() {
  const [patientsData, setPatientsData] = useState<Patients>([]);
  const [currentPatient, setCurrentPatient] = useState<PatientData | null>(
    null
  );

  const getData = async () => {
    await fetch("https://fedskillstest.coalitiontechnologies.workers.dev/", {
      headers: {
        authorization: `Basic ${API_KEY}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPatientsData(data);
        for (const user of data) {
          if (user.name === "Jessica Taylor") {
            setCurrentPatient(user);
            break;
          }
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <PatientContext.Provider value={{ patientsData, currentPatient }}>
        <Dashboard />
      </PatientContext.Provider>
    </>
  );
}

export default App;
