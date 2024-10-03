import {Grid, Button, Typography} from "@mui/material";
import {socials} from "@/components/utils/socials";

const Footer = () => {
    return (
        <div className="flex flex-col items-center px-[16px] lg:px-[60px] py-[40px] bg-dark-gray text-base-light">
            {/* Get In Touch Section */}
            <Typography variant="h4" align="center" className="mb-4 dark:text-base-light text-base-dark">
                Get In Touch
            </Typography>
            <Typography variant="body1" align="center" className="mb-4 dark:text-base-light text-base-dark">
                If you’re interested in collaborating
                or learning more about my background, feel free to drop me an email at&nbsp;
                <a href="mailto:rwnhermawan@gmail.com"
                   className="dark:text-base-light text-base-dark underline hover:text-blue-500 transition-colors duration-300">rwnhermawan@gmail.com</a>
            </Typography>

            {/* Reach Me Button */}
            <Button
                variant="outlined"
                className="dark:text-base-light dark:border-base-light text-base-dark border-base-dark
               hover:bg-base-dark hover:text-base-light
               dark:hover:bg-base-light dark:hover:text-base-dark"
                onClick={() => window.location.href = 'mailto:rwnhermawan@gmail.com'}>
                Reach Me
            </Button>

            {/* Social Media Section */}
            <Grid container alignItems="center" justifyContent="center" spacing={2} className="dark:text-base-light text-base-dark social-media-section p-8 mt-6">
                {socials.map((data, index) => (
                    <Grid item key={index} lg={3} className="flex justify-center">
                        <div
                            className="flex flex-row items-center cursor-pointer hover:text-blue-500 transition-colors duration-300"
                            onClick={data?.onClick}
                        >
                            <span className="text-2xl">{data.icon}</span>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Footer;
