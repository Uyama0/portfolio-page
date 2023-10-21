import { CursorBlob } from "./cursorBlob/CursorBlob";
import { Header } from "./header/Header";

export const Layout = () => {
  return (
    <>
      <CursorBlob />
      <div className="max-w-5xl w-full mx-auto -space-x-10 flex">
        <Header />
        {/* <div className="flex-grow">
          <div className="max-w-lg overflow-hidden">
            <h1 className="text-7xl font-VT323 leading-tight">Portfolio</h1>
            <p className="leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              natus molestiae saepe veniam reprehenderit repellendus vero libero
              eveniet! Harum et quo omnis quam minima laboriosam nemo a magni,
              earum corrupti.
            </p>
          </div>
        </div>
        <div className="flex-grow max-w-md ">
          <div>hello</div>
        </div> */}
      </div>
      <div className="h-screen">qw</div>
    </>
  );
};
