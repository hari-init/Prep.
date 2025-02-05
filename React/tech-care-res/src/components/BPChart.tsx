import Chart from "chart.js/auto";
import expand from "../assets/expand.svg";
import PatientContext from "../PatientContext";
import { useRef, useEffect, useContext } from "react";

const BPChart = () => {
  const { currentPatient } = useContext(PatientContext);
  const chartEl = useRef(null);
  const chartInst = useRef<Chart<"line", any[], string> | null>(null);

  useEffect(() => {
    const diagnosis_history = currentPatient?.diagnosis_history;
    console.log(diagnosis_history);

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
              const date = new Date(`${row.month}, ${row.year}`);
              return `${date.toLocaleString("default", { month: "short" })}, ${
                row.year
              }`;
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
    <>
      <div className="md:w-[500px]">
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
        <div className="h-[230px] mb-4">
          <canvas id="chartCanvas" ref={chartEl}></canvas>
        </div>
      </div>
    </>
  );
};
export default BPChart;
