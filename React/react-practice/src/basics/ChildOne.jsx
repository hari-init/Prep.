import ChildTwo from "./ChildTwo";
const ChildOne = ({ parentProp, parentTrigger }) => {
  return (
    <div>
      <h2>This is Child One </h2>
      <button onClick={parentTrigger}>onClickHandler from parent</button>
      <br />
      <span style={{ color: "pink" }}>{parentProp}</span>

      <ChildTwo parentProp="passed from Child One" />
    </div>
  );
};

export default ChildOne;
