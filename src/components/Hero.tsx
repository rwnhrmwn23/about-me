import {useDarkModeContext} from "@/hooks/DarkModeContex";

import Particle from "./Particles";
import {Grid} from "@mui/material";
import {socials} from "@/components/utils/socials";

const Hero = () => {
    const {colorTheme} = useDarkModeContext();

    return (
        <div className="relative flex justify-center items-center h-[calc(100vh-100px)] ">
            <Particle colorTheme={colorTheme}/>
            <div className="absolute flex flex-col  items-center z-2 max-w-[1140px] mb:px-[16px] lg:px-[60px] ">
                <div className="flex flex-col items-start mb:gap-[20px] lg:gap-[40px]">
                    <div>
                        <p className="mt-[-100px] typography-hello-mobile lg:hidden dark:text-base-light text-base-dark">
                            Irwan Hermawan, Mobile Developer
                        </p>
                        <p className="mt-[-100px] typography-hello mb:hidden lg:block dark:text-base-light text-base-dark">
                            Irwan Hermawan, Mobile Developer
                        </p>
                    </div>

                    <Grid>
                        <div className="social-media-section p-8">
                            <div
                                className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-8 dark:text-base-light text-base-dark">
                                {socials.map((data, index) => (
                                    <div key={index} className="flex flex-col ">
                                        <Grid item lg={3} md={12} xs={12}>
                                            <div className="flex flex-row items-center">
                                                <span className="text-3xl">{data.icon}</span>
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
            </div>
        </div>
    );
};

export default Hero;
