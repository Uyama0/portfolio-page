import { Button } from "../../UI/Button";

export const Header = () => {
  return (
    <div className="flex flex-1 py-5 border-b border-gray">
      <div className="flex-1 text-3xl ">Uyama</div>
      <ul className="flex-1 flex-row hidden md:flex md:space-x-16 items-center">
        <li>
          <Button title={"About"} />
        </li>
        <li>
          <Button title={"Works"} />
        </li>
        <li>
          <Button title={"Contact"} />
        </li>
      </ul>
    </div>
  );
};
