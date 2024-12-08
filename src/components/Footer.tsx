import {Button, Grid} from "@mui/material";
import {socials} from "@/components/utils/socials";

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-dark-gray text-base-light px-4 lg:px-16">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 lg:p-12 text-center max-w-3xl w-full">
                <h2 className="text-2xl lg:text-4xl font-bold dark:text-base-light text-base-dark mb-6">
                    Get In Touch
                </h2>
                <p className="text-sm lg:text-base dark:text-base-light text-base-dark mb-6">
                    If you’re interested in collaborating or learning more about my background, feel free to drop me an
                    email at&nbsp;
                    <a
                        href="mailto:rwnhermawan@gmail.com"
                        className="underline hover:text-blue-500 transition-colors duration-300"
                    >
                        rwnhermawan@gmail.com
                    </a>
                </p>

                <Button
                    variant="outlined"
                    className="py-2 px-6 text-base font-medium dark:text-base-light dark:border-base-light text-base-dark border-base-dark
                           hover:bg-base-dark hover:text-base-light dark:hover:bg-base-light dark:hover:text-base-dark mb-8"
                    onClick={() => window.location.href = "mailto:rwnhermawan@gmail.com"}
                >
                    Reach Me
                </Button>

                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                    className="dark:text-base-light text-base-dark social-media-section"
                >
                    {socials.map((data, index) => (
                        <Grid item key={index} lg={3} className="flex justify-center">
                            <div
                                className="flex flex-row items-center cursor-pointer hover:text-blue-500 transition-colors duration-300"
                                onClick={data?.onClick}
                            >
                                <span className="text-3xl">{data.icon}</span>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default Footer;
