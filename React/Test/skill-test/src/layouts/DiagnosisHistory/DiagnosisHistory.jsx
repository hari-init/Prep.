import ContainerCard from "../../components/Cards/ContainerCard/ContainerCard";
import MetricCard from "../../components/Cards/MetricCard/MetricCard";
import BPChart from "../../components/Chart/BPChart";
import Overview from "../../components/Overview/Overview";

const DiagnosisHistory = ({ data }) => {
  return (
    <ContainerCard title="Diagnosis History" cardClass="">
      <ContainerCard bg="bg-[#F4F0FE]">
        <div className="flex">
          <BPChart chartData={data} chartClass="w-[70%]" />
          <div className="w-[30%] ml-8">
            <Overview data={data} name="Systolic" colorClass="bg-[#E66FD2]" />
            <div className="w-full border-b border-b-gray-300 my-4"></div>
            <Overview data={data} name="Diastolic" colorClass="bg-[#8C6FE6]" />
          </div>
        </div>
      </ContainerCard>
      <div className="flex justify-around">
        <MetricCard metricClass="bg-[#E0F3FA]" />
        <MetricCard metricClass="bg-[#FFE6E9]" />
        <MetricCard metricClass="bg-[#FFE6F1]" />
      </div>
    </ContainerCard>
  );
};

export default DiagnosisHistory;
