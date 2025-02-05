import { InfoItemType } from "../patientTypes";

const InfoItem = ({ icon, label, value }: InfoItemType) => {
  return (
    <li className="flex items-center mb-6">
      <img src={icon} alt="date of birth icon" className="mr-4" />
      <div className="">
        <p className="text-sm">{label}</p>
        <p className="text-sm font-bold">{value}</p>
      </div>
    </li>
  );
};

export default InfoItem;
