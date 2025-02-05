import resp from "../../../assets/resp.svg";

const MetricCard = ({ metricClass }) => {
  return (
    <div className={`${metricClass} rounded-2xl p-4 shadow h-60 w-56`}>
      <div>
        <img src={resp} alt="Metric image" className="mb-4" />
      </div>
      <p className="text-[16px] font-extralight">Respiratory Rate</p>
      <h1 className="text-[30px] font-bold mb-4">20 bpm</h1>
      <p>Normal</p>
    </div>
  );
};

export default MetricCard;
