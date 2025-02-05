interface ShellCardProps {
  children: React.ReactNode;
  propClass?: string;
  isChart?: boolean;
}

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
