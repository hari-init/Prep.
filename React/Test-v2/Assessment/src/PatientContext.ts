import { createContext } from "react";
import { PatientData, Patients } from "./patientTypes";

interface PatientContextType {
  patientsData: Patients;
  currentPatient: PatientData | null;
}

const defaultPatient: PatientData = {
  age: "",
  date_of_birth: "",
  diagnosis_history: [],
  diagnostic_list: [],
  emergency_contact: "",
  gender: "",
  insurance_type: "",
  lab_results: [],
  name: "",
  phone_number: "",
  profile_picture: "",
};
const defaultPatients: Patients = [];

const PatientContext = createContext<PatientContextType>({
  patientsData: defaultPatients,
  currentPatient: defaultPatient || null,
});

export default PatientContext;
