import React from "react";

const HeaderList = ({ name, Icon }) => {
  return (
    <div className="flex items-center text-[18px] cursor-pointer gap-3">
      <Icon />
      <h3>{name}</h3>
    </div>
  );
};

export default HeaderList;
