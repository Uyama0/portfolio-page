import React from "react";
import { Card } from "../../UI/card/Card";

export const Works = () => {
  return (
    <div id="cards" className="grid grid-cols-4 gap-2">
      <div className="col-span-2">
        <Card></Card>
      </div>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};
