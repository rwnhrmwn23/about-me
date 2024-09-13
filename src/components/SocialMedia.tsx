import Image from "next/image";
import linkedindark from "../../public/social-media/linkedin-dark.svg";
import linkedinlight from "../../public/social-media/linkedin-light.svg";
import emaildark from "../../public/social-media/email-dark.svg";
import emaillight from "../../public/social-media/email-light.svg";
import githublight from "../../public/social-media/github-light.svg";
import githubdark from "../../public/social-media/github-dark.svg";

const SocialMedia = ({colorTheme}: { colorTheme: string }) => {
    return (
        <div className="flex items-center ">
            <Image
                className="cursor-pointer "
                style={{
                    height: "18px",
                }}
                alt="linkedin"
                onClick={() =>
                    window.open("https://www.linkedin.com/in/irwanhermawan", "_blank")
                }
                src={colorTheme == "light" ? linkedinlight : linkedindark}
            />
            <Image
                className="cursor-pointer "
                style={{
                    height: "18px",
                }}
                alt="github"
                onClick={() =>
                    window.open("https://github.com/rwnhrmwn23", "_blank")
                }
                src={colorTheme == "light" ? githublight : githubdark}
            />
            <Image
                className="cursor-pointer "
                style={{
                    height: "18px",
                }}
                alt="gmail"
                onClick={() => window.open("mailto:rwnhermawan@gmail.com", "_blank")}
                src={colorTheme == "light" ? emaillight : emaildark}
            />
        </div>
    );
};

export default SocialMedia;
