import { Button } from "../../UI/Button";
import ContactButton from "../../UI/contactButton/ContactButton";

function Footer() {
  return (
    <>
      <footer className="mx-5" id="contact">
        <div className="flex flex-col md:flex-row gap-3 w-full h-[calc(100vh/2)]">
          <div className="flex flex-col justify-end">
            <h1 className="text-2xl uppercase">get in touch</h1>
            <a
              className="text-[2.2em] md:text-5xl font-playfair"
              href="mailto:heeeilels@gmail.com"
            >
              heeeilels@gmail.com
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-end md:items-end gap-3 md:gap-1 w-full">
            <ContactButton
              title={"Github"}
              contactLink="https://github.com/Uyama0"
            />
            <ContactButton
              title={"Linkedin"}
              contactLink="https://www.linkedin.com/in/uyama0/"
            />
            <ContactButton
              title={"Download CV"}
              contactLink="https://github.com/Uyama0"
            />
          </div>
        </div>
        <div className="flex justify-between my-4">
          <p>©Uyama</p>
          <p>Portfolio 2023</p>
          <Button targetId="about" title={"BACK TO TOP"} />
        </div>
      </footer>
    </>
  );
}

export default Footer;
