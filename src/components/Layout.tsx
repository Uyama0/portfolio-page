import { About } from "./about/About";
import { CursorBlob } from "./cursorBlob/CursorBlob";
import { Header } from "./header/Header";

export const Layout = () => {
  return (
    <div>
      <CursorBlob />
      <div className="px-4 pb-6 md:p-0 md:max-w-5xl w-full mx-auto flex flex-col">
        <Header />
        <div className="">
          <About />
        </div>
        dwq
      </div>
    </div>
  );
};
