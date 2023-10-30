import { Card } from "../../UI/card/Card.jsx";

export const Works = () => {
  return (
    <div className="grid gap-4">
      <div className=" md:grid md:grid-cols-3 h-60 gap-4">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="grid md:grid-cols-2 h-80 gap-4">
        <Card></Card>
        <Card></Card>
      </div>
      <div className="grid md:grid-cols-3 h-60 gap-4">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};
