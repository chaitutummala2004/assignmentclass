import React from "react";
import ListCard from "./ListCard";

const ArrayWithoutKey = () => {
  const names = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" },
  ];

  return (
    <div>
      <h2>Array without Key</h2>
      {names.map((person) => (
        <ListCard data={person} />
      ))}
    </div>
  );
};

export default ArrayWithoutKey;
