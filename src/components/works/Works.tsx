import { Card } from "../../UI/card/Card.jsx";

export const Works = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="block w-30 h-60 bg-white col-span-1"></div>
      <Card cardHeight="h-60" cardWidth="w-30" cardColSpan="col-span-1"></Card>
    </div>
  );
};
