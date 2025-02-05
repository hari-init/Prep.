import { createContext } from "react";

interface PatientContextType {
  patientsData: Array<Object>;
  currentPatient: Array<Object>;
}

const PatientContext = createContext<PatientContextType>({
  patientsData: [],
  currentPatient: [],
});

export default PatientContext;
