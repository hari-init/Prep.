import BPChart from "../components/BPChart";
import BPReport from "../components/BPReport";
import MetricCard from "../components/MetricCard";
import ShellCard from "../components/ShellCard";

const DiagnosisHistory = () => {
  return (
    <div className="flex flex-col">
      <ShellCard propClass="h-[675px] mb-8">
        <div className="mb-8 text-2xl flex justify-between">
          <h2 className="font-semibold">Diagnosis History</h2>
        </div>
        <ShellCard isChart={true} propClass="h-[310px]">
          <div className="flex">
            <BPChart />
            <BPReport />
          </div>
        </ShellCard>
        <MetricCard />
      </ShellCard>
      {/* <ShellCard ></ShellCard> */}
    </div>
  );
};

export default DiagnosisHistory;
