import Miyamoto1 from "../../assets/miyamoto.jpg";

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row flex-1 h-[calc(100vh-77px)]">
      <div className="flex-1"></div>
      <div className="flex-1 flex flex-col gap-6 justify-center md:items-start">
        <img
          className="max-w-[360px] h-60 md:max-w-sm md:h-64 rounded-xl object-cover"
          src={Miyamoto1}
          alt="miyamoto"
        />
        <div className="max-w-sm">
          <h1>Inspired by development</h1>
          <p>
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
