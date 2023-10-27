import { About } from "./about/About";
import { CursorBlob } from "./cursorBlob/CursorBlob";
import Footer from "./footer/Footer";
import { Header } from "./header/Header";
import { Works } from "./works/Works";

export const Layout = () => {
  return (
    <div>
      <CursorBlob />
      <div className="px-4 pb-6 md:p-0 md:max-w-5xl w-full mx-auto flex flex-col">
        <Header />
        <div>
          <About />
          <Works />
        </div>
        <div className="grid gap-4">
          <div className="col-start-0 col-end-2 h-40 bg-gray-200 p-4 bg-black">
            1/3
          </div>
          <div className="col-span-1 bg-black h-40 md:col-span-2 bg-gray-300 p-4">
            2/3
          </div>
          <div className="col-span-3 bg-black bg-gray-400 p-4">3/3</div>
          <div className="col-span-1 bg-black bg-gray-500 p-4">1/3</div>
          <div className="col-span-1 bg-black bg-gray-600 p-4">1/3</div>
          <div className="col-span-1 bg-black bg-gray-700 p-4">1/3</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
