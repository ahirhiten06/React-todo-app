import React from "react";

const FilterButton = (props) => {
  return (
    <button
      className="px-4 py-2 bg-gray-200 rounded-sm border-[1px] border-gray-600"
      onClick={() => props.setFilterName(props.name)}
    >
      {props.name}
    </button>
  );
};

export default FilterButton;
