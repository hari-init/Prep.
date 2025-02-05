const InfoCard = ({ avatar, name, role }) => {
  return (
    <div className="flex">
      <div className="flex items-center mr-3">
        <img
          className="mr-2"
          src={avatar}
          alt="header Doctor Image"
          width="44px"
          height="44px"
        />
        <div>
          <p className="text-sm font-bold">{name}</p>
          <p className="text-sm font-extralight">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
