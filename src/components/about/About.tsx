import Miyamoto1 from "../../assets/miyamoto.jpg";
import Miyamoto2 from "../../assets/vagabond.jpg";

export const About = () => {
  return (
    <div className="flex flex-1">
      <div className="flex-1"></div>
      <div className="flex-1 pl-2">
        <img
          className="max-w-md h-[300px] rounded-2xl object-cover"
          src={Miyamoto1}
          alt="miyamoto"
        />
        <h1 className="">Inspired by development</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          mollitia quas corrupti quod, voluptas quam soluta id ex iure quis a
          deserunt dolore magni laboriosam ipsa illum delectus laudantium
          veniam.
        </p>
      </div>
    </div>
  );
};
