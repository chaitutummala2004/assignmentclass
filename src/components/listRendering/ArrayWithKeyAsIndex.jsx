import React from "react";
import ListCard from "./ListCard";

const ArrayWithKeyAsIndex = () => {
  const names = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

  return (
    <div>
      <h2>Array with Key as Index</h2>
      {names.map((person, index) => (
        <ListCard data={person} key={index} />
      ))}
    </div>
  );
};

export default ArrayWithKeyAsIndex;
