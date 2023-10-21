import Miyamoto1 from "../../assets/miyamoto.jpg";
import Miyamoto2 from "../../assets/vagabond.jpg";

export const About = () => {
  return (
    <div className="md:flex flex-1">
      <div className="md:flex-1"></div>
      <div className="md:flex-1 flex flex-col gap-6">
        <img
          className="max-w-[360px] h-60 md:max-w-sm md:h-64 rounded-xl object-cover"
          src={Miyamoto1}
          alt="miyamoto"
        />
        <div className="max-w-sm">
          <h1 className="">Inspired by development</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            mollitia quas corrupti quod, voluptas quam soluta id ex iure quis a
            deserunt dolore magni laboriosam ipsa illum delectus laudantium
            veniam.
          </p>
        </div>
      </div>
    </div>
  );
};
