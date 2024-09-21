import {Grid} from "@mui/material";
import {socials} from "@/components/utils/socials";

const Footer = () => {
    return (
        <div className="flex px-[16px] lg:px-[60px] py-[40px]">
            <Grid container alignItems="center" spacing="20px">

                <div className="social-media-section p-8">
                    <div
                        className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-8 dark:text-base-light text-base-dark">
                        {socials.map((data, index) => (
                            <div key={index} className="flex flex-col ">
                                <Grid item lg={12} md={12} xs={12}>
                                    <div className="flex flex-row items-center">
                                        <span className="text-md">{data.icon}</span>
                                        <p
                                            className="typography-h200 dark:hover:text-base-light dark:text-base-light-active text-base-dark-active hover:text-base-light-active cursor-pointer ml-2"
                                            onClick={data?.onClick}
                                        >
                                            {data.name}
                                        </p>
                                    </div>
                                </Grid>
                            </div>
                        ))}
                    </div>
                </div>

            </Grid>
        </div>
    );
};

export default Footer;
