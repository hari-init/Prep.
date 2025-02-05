import ContainerCard from "../../components/Cards/ContainerCard/ContainerCard";
import InfoCard from "../../components/Cards/InfoCard/InfoCard";
import moreH from "../../assets/more_h.svg";
import search from "../../assets/search.svg";

const Patients = ({ data }) => {
  return (
    <ContainerCard title="Patients" cardClass="h-full" search={search}>
      <ul className="overflow-scroll h-[90%]">
        {data.map((patient, index) => {
          return (
            <li className="flex mb-8 justify-between items-center">
              <div key={index}>
                <InfoCard
                  avatar={patient.profile_picture}
                  name={patient.name}
                  role={`${patient.gender}, ${patient.age}`}
                />
              </div>
              <img src={moreH} alt="More patients options" className="mr-2" />
            </li>
          );
        })}
      </ul>
    </ContainerCard>
  );
};
export default Patients;
