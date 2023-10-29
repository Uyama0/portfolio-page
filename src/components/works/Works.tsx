import { Card } from "../../UI/card/Card.jsx";

export const Works = () => {
  return (
    <div className="grid gap-4">
      <div className="group grid grid-cols-3 h-60 gap-4">
        <Card cardHeight="" cardColSpan="col-span-1"></Card>
        <Card cardHeight="" cardColSpan="col-span-1"></Card>
        <Card cardHeight="" cardColSpan="col-span-1"></Card>
      </div>
      <div className="group grid grid-cols-2 h-80 gap-4">
        <Card cardHeight="" cardColSpan="col-span-1"></Card>
        <Card cardHeight="" cardColSpan="col-span-1"></Card>
      </div>
      <div className="group grid grid-cols-1 h-60 gap-4">
        <Card cardHeight="" cardColSpan="col-span-1"></Card>
      </div>
    </div>
  );
};
