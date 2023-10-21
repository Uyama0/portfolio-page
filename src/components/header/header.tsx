import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-1 py-5">
      <div className="flex-1 ">Uyama</div>
      <ul className="flex-1 flex flex-row space-x-10">
        <li className="hover:underline">About</li>
        <li className="hover:underline">Works</li>
        <li className="hover:underline">Contact</li>
      </ul>
    </div>
  );
};
