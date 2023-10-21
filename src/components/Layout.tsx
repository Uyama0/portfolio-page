import { About } from "./about/About";
import { CursorBlob } from "./cursorBlob/CursorBlob";
import { Header } from "./header/Header";

export const Layout = () => {
  return (
    <div>
      <CursorBlob />
      <div className="max-w-5xl w-full mx-auto flex flex-col">
        <Header />
        <About />
      </div>
    </div>
  );
};
