import styles from "./Tab.module.css";
const TabChild = ({
  desc,
  children,
  anotherChild,
  anotherChildEl,
  ...props
}) => {
  const AnotherChildEl = anotherChildEl;
  return (
    <div {...props}>
      {desc}
      <div>{children}</div>
      <AnotherChildEl>{anotherChild}</AnotherChildEl>
    </div>
  );
};

export default TabChild;
