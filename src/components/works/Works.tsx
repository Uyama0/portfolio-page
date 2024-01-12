import { Card } from "../../UI/card/Card.jsx";

export const Works = () => {
  return (
    <div id="works" className="grid gap-4 ">
      <div className="grid md:grid-cols-3 md:h-60 gap-4">
        <Card
          workLink="https://github.com/Uyama0/smooth-animated-todo-app-v2"
          workName="todo v2"
        />
        <Card
          workLink="https://github.com/Uyama0/portfolio-page"
          workName="portfolio page"
        />
        <Card />
      </div>
      <div className="grid md:grid-cols-2 md:h-80 gap-4">
        <Card />
        <Card />
      </div>
      <div className="grid md:grid-cols-3 md:h-60 gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
