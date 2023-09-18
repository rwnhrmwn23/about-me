import Image from "next/image";
import linkedindark from "../../public/social-media/linkedin-dark.svg";
import linkedinlight from "../../public/social-media/linkedin-light.svg";
import emaildark from "../../public/social-media/email-dark.svg";
import emaillight from "../../public/social-media/email-light.svg";

const SocialMedia = ({ colorTheme }: { colorTheme: string }) => {
  return (
    <div className="flex items-center ">
      <Image
        className="cursor-pointer "
        style={{
          height: "18px",
        }}
        alt="gmail"
        onClick={() => window.open("mailto:haryarrahman14@gmail.com", "_blank")}
        src={colorTheme == "light" ? emaillight : emaildark}
      />
      <Image
        className="cursor-pointer "
        style={{
          height: "18px",
        }}
        alt="linkedin"
        onClick={() =>
          window.open("https://www.linkedin.com/in/hary-arrahman", "_blank")
        }
        src={colorTheme == "light" ? linkedinlight : linkedindark}
      />
    </div>
  );
};

export default SocialMedia;
