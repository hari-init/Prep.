import { ShellCardProps } from "../patientTypes";

/**
 * @function ShellCard component act as wrapper to give the common card style.
 * @param children which come as s slot (JSX)
 * @param isChart to add different BG in the BPChart component
 * @param propClass additional props
 */

const ShellCard = ({ children, propClass = "", isChart }: ShellCardProps) => {
  return (
    <div
      className={`rounded-2xl p-5 shadow ${
        isChart ? "bg-[#F4F0FE]" : "bg-white"
      } ${propClass}`}
    >
      {children}
    </div>
  );
};

export default ShellCard;
