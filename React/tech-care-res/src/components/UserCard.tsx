import moreH from "../assets/more_h.svg";

interface UserCardProps {
  avatar: string;
  name?: string;
  description?: string;
  icon?: string;
  title?: string;
}

const UserCard = ({
  avatar,
  name = "Dr. Jose Simmons",
  description = "General Practitioner",
  icon,
}: UserCardProps) => {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <img
            className="mr-2"
            src={avatar}
            alt="header Doctor Image"
            width="44px"
            height="44px"
          />
          <div>
            <p className="text-sm font-bold">{name}</p>
            <p className="text-sm font-extralight text-[#707070]">
              {description}
            </p>
          </div>
        </div>
        {icon && <img src={moreH} alt="More user option" />}
      </div>
    </>
  );
};
export default UserCard;
