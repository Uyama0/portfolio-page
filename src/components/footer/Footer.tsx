import ContactButton from "../../UI/contactButton/ContactButton";

function Footer() {
  return (
    <>
      <footer className="mx-5">
        <div className="w-screen h-32"></div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex flex-col justify-end">
            <p className="text-2xl uppercase">get in touch</p>
            <h2 className="text-[2.2em] md:text-5xl font-playfair">
              heeeilels@gmail.com
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-end gap-3 md:gap-1 w-full">
            <ContactButton title={"Github"} />
            <ContactButton title={"Linkedin"} />
            <ContactButton title={"Download CV"} />
          </div>
        </div>
        <div className="flex justify-between my-4">
          <p>©Uyama</p>
          <p>Portfolio 2023</p>
          <button className="uppercase underline">Back to top</button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
