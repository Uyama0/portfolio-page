import { About } from "./about/About";
import { CursorBlob } from "./blob/Blob.tsx";
import Footer from "./footer/Footer";
import { Header } from "./header/Header.tsx";
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
      </div>
      <Footer />
    </div>
  );
};
