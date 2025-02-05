const Overview = ({ data, name, colorClass }) => {
  return (
    <>
      <div className="flex items-center mb-2">
        <div className={`${colorClass} w-3 h-3 rounded-2xl mr-2 `}></div>
        {name}
      </div>

      <h2 className="font-semibold text-lg  mb-2">
        {data?.diagnosis_history &&
          data.diagnosis_history[0]?.blood_pressure?.[name.toLowerCase()]
            ?.value}
      </h2>
      <p className="font-extralight text-sm mb-2">
        {data?.diagnosis_history &&
          data.diagnosis_history[0]?.blood_pressure?.[name.toLowerCase()]
            ?.levels}
      </p>
    </>
  );
};

export default Overview;
