import Chart, { Legend } from "chart.js/auto";
import { useRef, useEffect } from "react";

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

const BPChart = ({ chartData, chartClass }) => {
  const chartEl = useRef(null);
  const chartInst = useRef(null);
  console.log(chartData);

  useEffect(() => {
    const diagnosis_history = chartData["diagnosis_history"];
    let diastolic = [];
    let systolic = [];
    let recentRecords = [];
    if (diagnosis_history) {
      recentRecords =
        diagnosis_history && diagnosis_history.slice(0, 6).reverse();
      for (let core of recentRecords) {
        diastolic.push(core["blood_pressure"]["diastolic"]);
        systolic.push(core["blood_pressure"]["systolic"]);
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
  }, [chartData]);

  return (
    <div className={`${chartClass}`}>
      <div className={`flex justify-between mb-4`}>
        <h2 className="font-semibold text-lg">Blood Pressure</h2>
        <p className="font-extralight text-sm">Last 6 months</p>
      </div>
      <canvas ref={chartEl}></canvas>
    </div>
  );
};

export default BPChart;
