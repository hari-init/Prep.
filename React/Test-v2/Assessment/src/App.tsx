import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import PatientContext from "./PatientContext";
import { Patients, PatientData } from "./patientTypes";
import "./App.css";

/**
 * @function App - The entry for whole render which
 * has the Auth key @constant API_KEY derived from the Task API document
 * @constant patientsData - which shores the data of whole API,
 * @constant currentPatient - holds the current patient - 'Jessica Taylor' as the Task.
 * The API is fetched and stored in context and provided to te whole app.
 */

const API_KEY = `Y29hbGl0aW9uOnNraWxscy10ZXN0`; // Auth Key

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
