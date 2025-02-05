const ContainerCard = ({ title, children, cardClass = "", search, bg }) => {
  return (
    <div className={`${cardClass} rounded-2xl p-4 shadow ${bg || "bg-white"}`}>
      {title && (
        <div className="mb-8 text-2xl flex justify-between">
          <h2 className="font-semibold">{title}</h2>
          {search && <img src={search} alt="search icon" />}
        </div>
      )}

      {children}
    </div>
  );
};

export default ContainerCard;
