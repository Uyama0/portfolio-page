import React from "react";
import { Card } from "../../UI/card/Card.jsx";

export const Works = () => {
  return (
    <div className="grid gap-4">
      <div className="grid-col-s">
        <Card></Card>
        <Card></Card>
      </div>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};
