import { useEffect, useState, createContext } from "react";
import "./App.css";
import DashBoard from "./pages/DashBoard";

const API_KEY = `Y29hbGl0aW9uOnNraWxscy10ZXN0`;

function App() {
  const PatientContext = createContext(null);

  const [patientsData, setPatientsData] = useState([]);
  const [currentPatient, setCurrentPatient] = useState([]);

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
        <DashBoard
          patientsData={patientsData}
          currentPatient={currentPatient}
        />
      </PatientContext.Provider>
    </>
  );
}

export default App;
