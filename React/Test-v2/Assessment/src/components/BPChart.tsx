import { useRef, useEffect, useContext } from "react";
import Chart from "chart.js/auto";
import expand from "../assets/expand.svg";
import PatientContext from "../PatientContext";

//To make the full month shorter
const MONTH_MAP: any = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

/**
 * Its responsible for Rending the chart using ChartJS.
 *
 * BPChart get the dataset form the Context @constant currentPatient and constructs
 * the chart object. @constant chartInst help to store the instance of the chart so
 * it helps to clear the instance when its re rendered.
 *
 * The @constant MONTH_MAP help to map the short name for the month as per the design
 */

const BPChart = () => {
  const { currentPatient } = useContext(PatientContext);
  const chartEl = useRef(null);
  const chartInst = useRef<Chart<"line", any[], string> | null>(null);

  //Handles the Rendering of chart and data feeding
  useEffect(() => {
    const diagnosis_history = currentPatient?.diagnosis_history;

    let diastolic = [];
    let systolic = [];
    let recentRecords: any[] = [];

    if (diagnosis_history) {
      recentRecords =
        diagnosis_history && diagnosis_history.slice(0, 6).reverse();
      for (let core of recentRecords) {
        diastolic.push(core?.blood_pressure?.diastolic);
        systolic.push(core?.blood_pressure?.systolic);
      }
    }
    if (chartEl.current) {
      if (chartInst.current) {
        chartInst.current.destroy();
      }

      chartInst.current = new Chart(chartEl.current, {
        type: "line",
        data: {
          labels:
            recentRecords &&
            recentRecords.map((row) => {
              const shortMonth = MONTH_MAP[row.month];
              return `${shortMonth}, ${row.year}`;
            }),
          datasets: [
            {
              label: "Diastolic",
              data: diastolic && diastolic.map((row) => row.value),
              borderColor: "#8C6FE6",
              tension: 0.4,
              borderWidth: 2,
              pointBackgroundColor: "#8C6FE6",
              pointRadius: 5,
            },
            {
              label: "Systolic",
              data: systolic && systolic.map((row) => row.value),
              borderColor: "#E66FD2",
              pointBackgroundColor: "#E66FD2",
              tension: 0.4,
              borderWidth: 2,
              pointRadius: 5,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                color: "#e0e0e0",
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInst.current) {
        chartInst.current.destroy();
      }
    };
  }, [currentPatient]);

  return (
    <div className="lg:w-[65%]">
      <div className={`flex justify-between mb-4`}>
        <h2 className="font-semibold text-lg">Blood Pressure</h2>
        <p className="font-extralight text-sm flex items-center">
          Last 6 months
          <img
            src={expand}
            alt="Expand icon"
            className="ml-2"
            style={{ width: "10px" }}
          />
        </p>
      </div>
      <div className="lg:h-[230px] mb-4">
        <canvas id="chartCanvas" ref={chartEl}></canvas>
      </div>
    </div>
  );
};
export default BPChart;
