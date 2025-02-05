import { useState } from "react";
import styles from "./Tab.module.css";
import TabChild from "./TabChild";
import ChildTwo from "../basics/ChildTwo";

const TabParent = () => {
  const [description, setDescription] = useState("");
  const rootObject = [
    {
      title: "Sweet",
      description: "🍩",
    },
    {
      title: "love",
      description: "❤️💕",
    },
    {
      title: "cat",
      description: "😻",
    },
  ];

  const onClickHandler = (item) => {
    setDescription(item.description);
  };
  return (
    <div className={styles.container}>
      <div>
        <h2>Parent</h2>
        <ul>
          {rootObject.map((item) => (
            <li onClick={() => onClickHandler(item)} key={item.title}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <TabChild
        className={`${styles.forward} ${styles.child}`}
        desc={description}
        anotherChild={<ChildTwo parentProp={"this from tab parent"} />}
        anotherChildEl="code"
      >
        <h2>Slot for child</h2>
      </TabChild>
    </div>
  );
};

export default TabParent;
