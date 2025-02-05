import { useContext } from "react";
import PatientContext from "../PatientContext";
import { DHPatient } from "../patientTypes";
import resp from "../assets/resp.svg";
import temp from "../assets/temperature.svg";
import heart from "../assets/HeartBPM.svg";

/**
 * @function MetricCard help to show the important metric like
 * Respiratory,Temperature and Hear rate.
 * These data are derived from the Context @constant currentPatient
 */

const MetricCard = () => {
  const { currentPatient } = useContext(PatientContext) as {
    currentPatient: DHPatient;
  };

  //Extracting the data form the object.
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
    <div className="flex flex-col lg:flex-row justify-between mt-5">
      {metricArray.map((item) => {
        return (
          <div
            className={`${item.color} rounded-2xl p-4 shadow lg:h-[242px] w-full lg:first:ml-0 lg:last:mr-0 lg:mx-2.5 my-2.5 `}
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
