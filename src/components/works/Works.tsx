import { Card } from "../../UI/card/Card.jsx";

export const Works = () => {
  return (
    <div id="works" className="grid gap-4 ">
      <div className="grid md:grid-cols-3 md:h-60 gap-4">
        <Card
          workLink="https://github.com/Uyama0/cross-platform-markdown-editor"
          workName="markdown editor"
        />
        <Card workLink="https://uyama.vercel.app/" workName="portfolio page" />
        <Card
          workLink="https://pizza-boot.vercel.app/."
          workName="pizza boot"
        />
      </div>
      <div className="grid md:grid-cols-2 md:h-80 gap-4">
        <Card
          workLink="https://github.com/Uyama0/flow-Field"
          workName="flow Field"
        />
        <Card
          workLink="https://github.com/Uyama0/smooth-animated-todo-app-v2"
          workName="todo v2"
        />
      </div>
      <div className="grid md:grid-cols-3 md:h-60 gap-4">
        <Card
          workLink="https://github.com/Uyama0/message-box"
          workName="message box"
        />
        <Card />
        <Card />
      </div>
    </div>
  );
};
