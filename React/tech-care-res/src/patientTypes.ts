export interface PatientData {
  age: string;
  date_of_birth: string;
  diagnosis_history: BPtype[];
  diagnostic_list: Array<object>;
  emergency_contact: string;
  gender: string;
  insurance_type: string;
  lab_results: Array<string>;
  name: string;
  phone_number: string;
  profile_picture: string;
}

export interface BPtype {
  blood_pressure: {
    diastolic: {
      value: number;
      levels: string;
    };
    systolic: {
      value: number;
      levels: string;
    };
  };

  month: string;
  year: number;
  respiratory_rate: { value: number };
  heart_rate: { value: number };
  temperature: { value: number };
}

export type Patients = PatientData[];
