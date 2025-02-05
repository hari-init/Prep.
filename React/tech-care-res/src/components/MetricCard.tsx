import { useContext } from "react";
import PatientContext from "../PatientContext";
import resp from "../assets/resp.svg";
import temp from "../assets/temperature.svg";
import heart from "../assets/HeartBPM.svg";

interface DiagnosisHistory {
  respiratory_rate?: any;
  heart_rate?: any;
  temperature?: any;
  [key: string]: any;
}

interface Patient {
  diagnosis_history: DiagnosisHistory[];
}

const MetricCard = () => {
  const { currentPatient } = useContext(PatientContext) as {
    currentPatient: Patient;
  };
  const metrics = ["respiratory_rate", "temperature", "heart_rate"];

  const metricArray = metrics.map((metric) => ({
    ...currentPatient?.diagnosis_history[0][metric],
    color:
      metric == "respiratory_rate"
        ? "bg-[#E0F3FA]"
        : metric == "heart_rate"
        ? "bg-[#FFE6F1]"
        : "bg-[#FFE6E9]",
    image:
      metric == "respiratory_rate"
        ? resp
        : metric == "heart_rate"
        ? heart
        : temp,
    name:
      metric == "respiratory_rate"
        ? "Respiratory Rate"
        : metric == "heart_rate"
        ? "Heart Rate"
        : "Temperature",
    measurement:
      metric == "respiratory_rate"
        ? "bpm"
        : metric == "heart_rate"
        ? "bpm"
        : "'F",
  }));
  return (
    <div className="flex justify-between mt-5">
      {metricArray.map((item) => {
        return (
          <div
            className={`${item.color} rounded-2xl p-4 shadow h-[242px] w-[240px]`}
          >
            <img src={item.image} alt="Metric icon" className="mb-4" />
            <p className="text-[16px] font-light">{item.name}</p>
            <p className="text-3xl font-bold mb-4">
              {item.value} {item.measurement}
            </p>
            <p className="text-sm font-extralight">{item.levels}</p>
          </div>
        );
      })}
    </div>
  );
};
export default MetricCard;
