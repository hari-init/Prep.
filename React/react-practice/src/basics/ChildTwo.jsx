const ChildTwo = ({ parentProp }) => {
  return (
    <div>
      <h2>This is Child Two </h2>
      <br />
      <span style={{ color: "pink" }}>{parentProp}</span>
    </div>
  );
};

export default ChildTwo;
