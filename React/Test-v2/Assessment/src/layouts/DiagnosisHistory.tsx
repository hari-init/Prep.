import BPChart from "../components/BPChart";
import BPReport from "../components/BPReport";
import MetricCard from "../components/MetricCard";
import ShellCard from "../components/ShellCard";

/**
 * @function DiagnosisHistory layout which holds the chart, report and metric details
 *
 */

const DiagnosisHistory = () => {
  return (
    <div className="flex flex-col">
      <ShellCard propClass="lg:h-[675px] mb-8">
        <div className="mb-8 text-2xl flex justify-between">
          <h2 className="font-semibold">Diagnosis History</h2>
        </div>
        <ShellCard isChart={true} propClass="lg:h-[310px]">
          <div className="flex flex-col lg:flex-row">
            <BPChart /> {/* Responsible for the rendering the Chart */}
            <BPReport /> {/* Responsible for the rendering the BP's report */}
          </div>
        </ShellCard>
        <MetricCard /> {/* Renders the Metrics */}
      </ShellCard>
    </div>
  );
};

export default DiagnosisHistory;
